# Created a class named 'Movie'.
# This 'Movie' class helped us in created multiple objects of itself of different movie.

class Movie() :
    # The commented line below this contain description about this class and what it does.
    """This 'Movie' class helped us in created multiple objects of itself of different movie"""

    # This is an '__init__' method of this class.
    # Remember as soon as you create an object of this 'Movie' class, this '__init__' will get initialised by itself.
    # When we create an object we have pass some information about that 'movie' and it will get initialised by itself.

    def __init__(self, movie_title, movie_storyline, star_cast, movie_rating, poster_image,trailer_youtube) :
        self.title = movie_title
        self.storyline = movie_storyline
        self.star = star_cast
        self.rating = movie_rating
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

    # This method is created to show you youtube trailer of any movie object that you have created.
    # In order to execute this method without any error, we have to import 'webbrowser'
    # Now lets see how to actually use this method :
    # Suppose you created movie object named 'ddlj', then simply type this to call this method :
    # ddlj.show_trailer()
    def show_trailer(self) :
        webbrowser.open(self.trailer_youtube_url)