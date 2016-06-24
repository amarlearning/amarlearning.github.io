# Imported 'os' package, to generate a file in a specied folder.
import os
# Imported 're' regular expression package, to get video code from any youtube url.
import re
# Imported 'webbrowser' to open the html file in a browser as soon as it is generated.
import webbrowser


header = """<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="description" content="PyMovie catalog is is a website made with love and python in India. In this 
	website you will find all the new movie release with their updated rating, official trailer, 
	starcast information, offcial poster, storyline." />
	<title>PyMovieCatalog</title>
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href='https://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
"""

body_part_one = """<body>
<header>
		<h2>PyMovie Catalog</h2>
	</header>
	<section class="section">
		<section class="inside">
			{publish_article}
		</section>
	</section>"""

body_part_two = """
	<section class="pull-out">
		{show_full_content}
	</section>
	<footer><p>Copyright (c) 2016 PyMovie Catalog All Rights Reserved.</p></footer>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</body>
"""

footer = """</html>"""

generate_full_content = """
<div class="movie" id="{i}yt">
			<div class="cross" id="{i}"><i class="fa fa-times-circle-o"></i></div>
			<div class="upper-part">
				<div class="image-part">
					<img src="{poster_url}">
				</div>
				<div class="content-part">
					<h2>{title_name}</h2>
					<h3>Rating : &nbsp; {rating}/5 stars</h3> 
					<p> <b>Starring : </b>
						{star_cast}
					</p>
					<p> <b>Storyline : </b>
						{storyline}
					</p>
				</div>
			</div>

			<!-- will work on this later -->
			<div class="lower-part">
				<iframe id="{i}pauseit" src="{youtube_trailer_link}" style="width:100%;height:100%" allowfullscreen></iframe>
			</div>
		</div>
"""

need_to_publish_articles = """<article id="{i}">
	<img src="{image_link}">
	<div class="title-name"><b>{title_name}</b></div>
</article>"""


def create_article(movies) :
	generated_article = ""
	cnt = 1
	for movie in movies :
		generated_article += need_to_publish_articles.format(
			i = cnt,
			title_name = movie.title,
			image_link = movie.poster_image_url
			)
		cnt+=1
	return generated_article

def create_full_content(movies) :
	generated_content = ""
	cnt = 1
	for movie in movies :

		youtube_id_match = re.search(r'(?<=v=)[^&#]+', movie.trailer_youtube_url)
  		youtube_id_match = youtube_id_match or re.search(r'(?<=be/)[^&#]+', movie.trailer_youtube_url)
  		trailer_youtube_id = (youtube_id_match.group(0) if youtube_id_match else None)
  		link = "https://www.youtube.com/embed/"+trailer_youtube_id

		generated_content += generate_full_content.format(
			i = cnt,
			poster_url = movie.poster_image_url,
			title_name = movie.title,
			star_cast = movie.star,
			rating = movie.rating,
			storyline = movie.storyline,
			youtube_trailer_link = link
		)
		cnt+=1
	return generated_content

def generate_html_page(movies) :
	#open the file which is to modify or if not present create one
	file_open = open("index.html",'w')

	body_part_one_clone = body_part_one.format(publish_article = create_article(movies))

	#
	#create body part two clone, so as to generate html
	body_part_two_clone = body_part_two.format(show_full_content = create_full_content(movies))
	#
	#

	#copy the content in the index file using defined "write()" function
	file_open.write(header + body_part_one_clone + body_part_two_clone + footer)

	#In the end close the file, using the defined "close()" function
	file_open.close()

	#Try opening the file using "webbrowser" module
	url = os.path.abspath(file_open.name)
	webbrowser.open("file://"+ url)
