+++
title = "Finger Detection and Tracking using OpenCV and Python"
date = "2018-07-28T00:00:00-00:00"
description = "Finger Detection and Tracking using OpenCV and Python is a project to detect the fingers in a live video and track it in real-time."

tags = [ "gitops", "devops", "infrastructure", "iac"]
+++

[![Video Title](/images/finger-detection-and-tracking-using-opencv-and-python/banner.jpeg)](https://www.youtube.com/watch?v=P3dUePye_-k)

> **TL;DR. Code is [here](https://github.com/amarlearning/Finger-Detection-and-Tracking)**.

---

Finger detection is an important feature of many computer vision applications. In this application, A histogram based approach is used to separate out the hand from the background frame. Thresholding and Filtering techniques are used for background cancellation to obtain optimum results.

One of the challenges that I faced in detecting fingers is differentiating a hand from the background and identifying the tip of a finger. I’ll show you my technique for tracking a finger, which I used in this project. To see finger detection and tracking in action check out this video.

In an application where you want to track a user’s hand movement, skin color histogram will be very useful. This histogram is then used to subtracts the background from an image, only leaving parts of the image that contain skin tone.

A much simpler method to detect skin would be to find pixels that are in a certain RGB or HSV range. If you want to know more about this approach follow [here](https://docs.opencv.org/3.4.2/df/d9d/tutorial_py_colorspaces.html).

The problem with the above approach is that changing light conditions and skin colors can really mess with the skin detection. While on the other hand, Histogram tends to be more accurate and takes into account the current light conditions.

![Place hand over the rectangles](/images/finger-detection-and-tracking-using-opencv-and-python/1.png)

Green rectangles are drawn on the frame and the user places their hand inside these rectangles. Application is taking skin color samples from the user’s hand and then creates a histogram.

_The rectangles are drawn with the following function:_

```python:title=draw_rectangles_in_frame.py
def draw_rect(frame):
    rows, cols, _ = frame.shape
    global total_rectangle, hand_rect_one_x, hand_rect_one_y, hand_rect_two_x, hand_rect_two_y

    hand_rect_one_x = np.array(
        [6 * rows / 20, 6 * rows / 20, 6 * rows / 20, 9 * rows / 20, 9 * rows / 20, 9 * rows / 20, 12 * rows / 20,
         12 * rows / 20, 12 * rows / 20], dtype=np.uint32)

    hand_rect_one_y = np.array(
        [9 * cols / 20, 10 * cols / 20, 11 * cols / 20, 9 * cols / 20, 10 * cols / 20, 11 * cols / 20, 9 * cols / 20,
         10 * cols / 20, 11 * cols / 20], dtype=np.uint32)

    hand_rect_two_x = hand_rect_one_x + 10
    hand_rect_two_y = hand_rect_one_y + 10

    for i in range(total_rectangle):
        cv2.rectangle(frame, (hand_rect_one_y[i], hand_rect_one_x[i]),
                      (hand_rect_two_y[i], hand_rect_two_x[i]),
                      (0, 255, 0), 1)

    return frame
```

There’s nothing too complicated going on here. I have created four arrays `hand_rect_one_x`, `hand_rect_one_y`, `hand_rect_two_x`, `hand_rect_two_y` to hold the coordinates of each rectangle. The code then iterates over these arrays and draws them on the frame using `cv2.rectangle`. Here `total_rectangle` is just the length of the array i.e. `9`.

Now that the user understands where to place his or her palm, the succeeding step is to extract pixels from these rectangles and use them to generate an HSV histogram.

```python:title=generate_hsv_histogram.py
def hand_histogram(frame):
    global hand_rect_one_x, hand_rect_one_y

    hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    roi = np.zeros([90, 10, 3], dtype=hsv_frame.dtype)

    for i in range(total_rectangle):
        roi[i * 10: i * 10 + 10, 0: 10] = hsv_frame[hand_rect_one_x[i]:hand_rect_one_x[i] + 10,
                                          hand_rect_one_y[i]:hand_rect_one_y[i] + 10]

    hand_hist = cv2.calcHist([roi], [0, 1], None, [180, 256], [0, 180, 0, 256])
    return cv2.normalize(hand_hist, hand_hist, 0, 255, cv2.NORM_MINMAX)
```

Here function transforms the input frame to HSV. Using Numpy, we create an image of size `[90 * 10]` with `3` color channels and we name it as **ROI** _(Region of Intrest)_. It then takes the 900-pixel values from the green rectangles and puts them in the ROI matrix.

The `cv2.calcHist` creates a histogram using the ROI matrix for the skin color and `cv2.normalize` normalizes this matrix using the norm Type `cv2.NORM_MINMAX`. Now we have a histogram to detect skin regions in the frames.

Now that the user understands where to place his or her palm, the succeeding step is to extract pixels from these rectangles and use them to generate an HSV histogram.

Now that we hold a skin color histogram we can use it to find the components of the frame that contains skin. OpenCV provides us with a convenient method, `cv2.calcBackProject`, that uses a histogram to separate features in an image. I used this function to apply the skin color histogram to a frame. If you want to read more about back projection, you can read from [here](https://docs.opencv.org/master/dc/df6/tutorial_py_histogram_backprojection.html) and [here](https://docs.opencv.org/2.4/doc/tutorials/imgproc/histograms/back_projection/back_projection.html).

```python:title=histogram_masking.py
def hist_masking(frame, hist):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    dst = cv2.calcBackProject([hsv], [0, 1], hist, [0, 180, 0, 256], 1)

    disc = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (31, 31))
    cv2.filter2D(dst, -1, disc, dst)

    ret, thresh = cv2.threshold(dst, 150, 255, cv2.THRESH_BINARY)

    thresh = cv2.merge((thresh, thresh, thresh))

    return cv2.bitwise_and(frame, thresh)
```

In the first two lines, I changed the input frame to HSV and then applied `cv2.calcBackProject` with the skin color histogram `hist`. Following that, I have used Filtering and Thresholding function to smoothen the image. Lastly, I masked the input frame using the `cv2.bitwise_and` function. This final frame should just contain skin color regions of the frame.

![Hand seperated from background (1)](/images/finger-detection-and-tracking-using-opencv-and-python/2.png)

![Hand seperated from background (2)](/images/finger-detection-and-tracking-using-opencv-and-python/3.png)

Now we have a frame with skin color regions only, but what we really want is to find the location of a fingertip. Using OpenCV you can find contours in a frame if you don’t know what contour is you can read [here](https://docs.opencv.org/3.4.2/d3/d05/tutorial_py_table_of_contents_contours.html). Using contours you can find convexity defects, which will be potential fingertip location.

In my application, I needed to find the tip of a finger with which a user is aiming. To do this I determined the convexity defect, which is furthest from the centroid of the contour. This is done by the following code:

```python:title=fingertip_point.py
def manage_image_opr(frame, hand_hist):
    hist_mask_image = hist_masking(frame, hand_hist)
    contour_list = contours(hist_mask_image)
    max_cont = max_contour(contour_list)

    cnt_centroid = centroid(max_cont)
    cv2.circle(frame, cnt_centroid, 5, [255, 0, 255], -1)

    if max_cont is not None:
        hull = cv2.convexHull(max_cont, returnPoints=False)
        defects = cv2.convexityDefects(max_cont, hull)
        far_point = farthest_point(defects, max_cont, cnt_centroid)
        print("Centroid : " + str(cnt_centroid) + ", farthest Point : " + str(far_point))
        cv2.circle(frame, far_point, 5, [0, 0, 255], -1)
        if len(traverse_point) < 20:
            traverse_point.append(far_point)
        else:
            traverse_point.pop(0)
            traverse_point.append(far_point)

        draw_circles(frame, traverse_point)
```

![Contour in Frame (1)](/images/finger-detection-and-tracking-using-opencv-and-python/4.png)

![Contour in Frame (2)](/images/finger-detection-and-tracking-using-opencv-and-python/5.png)

Then it determines the largest contour. For the largest contour, it finds the hull, centroid, and defects.

![Defects in red circle and Centroid in purple circle](/images/finger-detection-and-tracking-using-opencv-and-python/6.png)

Now that you have all these defects you find the one that is farthest from the center of the contour. This point is assumed to be the pointing finger. The center is purple and the farthest point is red. And there you have it, you’ve found a fingertip.

![Centroid in purple color and Farthest point in red color](/images/finger-detection-and-tracking-using-opencv-and-python/7.png)

All hard part is done up until now, now all we have to do is to create a `list` to store the changed location of the `farthest_point` in the frame. It’s up to you that how many changed points you want to store. I am storing only `20` points.

![Finger Detection and Tracking using OpenCV and Python](/images/finger-detection-and-tracking-using-opencv-and-python/8.jpeg)
