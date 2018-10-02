<?php
	$path = $_SERVER['DOCUMENT_ROOT'];
	$path .= "/includes/header.php";
	include_once($path);

	$project = array();

	$projects[0] = array(
		"img" => "../img/maxresdefault.jpg",
		"language" => "OpenCV, Numpy, Python",
		"name" => "Finger Detection and Tracking",
		"text" => " Tracking the movement of a finger in the real-time video frame.",
		"demo" => "https://www.youtube.com/watch?v=P3dUePye_-k",
		"code" => "https://github.com/amarlearning/opencv#finger-detection-and-tracking"
		);
	$projects[1] = array(
			"img" => "../img/maven-version.png",
			"language" => "Java, Spring Boot, Maven",
			"name" => "Maven Repository Verison",
			"text" => "Now update the repository version of all maven dependency in just a click!",
			"demo" => "https://maven-repository-version.herokuapp.com/",
			"code" => "https://github.com/amarlearning/maven-repository-version"
		);
	$projects[2] = array(
			"img" => "../img/2fa.png",
			"language" => "Python",
			"name" => "Two Factor Authentication (2FA)",
			"text" => "CLI tool to generate two-factor authentication (2FA) tokens!",
			"demo" => "https://github.com/amarlearning/two-factor-auth#two-factor-authentication-2fa",
			"code" => "https://github.com/amarlearning/two-factor-auth/blob/master/twoFactorAuth.py"
		);
	$projects[3] = array(
			"img" => "../img/sreencast.gif",
			"language" => "Python",
			"name" => "Github Sectory",
			"text" => "CLI for downloading sub-directory of any Github repository using Github Content API!",
			"demo" => "https://github.com/amarlearning/Github-Sectory#demo",
			"code" => "https://github.com/amarlearning/Github-Sectory"
		);
	$projects[4] = array(
			"img" => "../img/footstep.png",
			"language" => "Python and JavaScript",
			"name" => "Footstep",
			"text" => "Footstep is a very basic event tracking application built using Python on the top of Django using Github API.",
			"demo" => "https://footstep.herokuapp.com",
			"code" => "https://github.com/amarlearning/Footstep"
		);
	$projects[5] = array(
			"img" => "../img/smartsupport.jpg",
			"language" => "Php and JavaScript",
			"name" => "Smart Support",
			"text" => "Smart Support is a web application which gives user the ability to talk to customer support in a choice of over 43 languages.",
			"demo" => "http://devpost.com/software/smart-support",
			"code" => "https://github.com/Herokux/smart_support"
		);
	$projects[6] = array(
			"img" => "../img/pingetron.png",
			"language" => "Electron and JavaScript",
			"name" => "Pingetron",
			"text" => "Pingetron is a very basic cross platform desktop application for Linux/Windows/OSX built using Electron and NodeJs.",
			"demo" => "https://youtu.be/D_JO7XkmahQ",
			"code" => "https://github.com/amarlearning/pingetron"
		);
	$projects[7] = array(
			"img" => "../img/pystalker.png",
			"language" => "Python",
			"name" => "PyStalker",
			"text" => "A very simple python script to check what your friend are doing on
				coding sites. You can see you friends Last visit, Last question solved,
				Last contest given.",
			"demo" => "https://www.youtube.com/watch?v=HeY2f43b59s&t=4s",
			"code" => "https://github.com/amarlearning/Pystalker"
		);
	$projects[8] = array(
			"img" => "../img/tasklist.gif",
			"language" => "Meteor JavaScript",
			"name" => "TaskList",
			"text" => "TaskList is a very simple web &amp; Android application built using Meteor, Blaze and MongoDB. Now add, delete and update your task.",
			"demo" => "https://youtu.be/D_JO7XkmahQ",
			"code" => "https://github.com/amarlearning/TaskList"
		);
	$projects[9] = array(
			"img" => "../img/plaked.gif",
			"language" => "Python",
			"name" => "PLaked",
			"text" => "Internet wasn't working and I was getting bored. So i made this Classic Snake Game named Plaked | Beyond the Apple using Pygame Library of Python.",
			"demo" => "https://youtu.be/67en0hRGUvc",
			"code" => "https://github.com/amarlearning/Plaked"
		);
	$projects[10] = array(
			"img" => "../img/recipejaar.png",
			"language" => "Php and JavaScript",
			"name" => "RecipeJaar",
			"text" => "Recipejaar is blogging application using AngularJs, CakePhp, Materialize.
				It wrote this code as a part of my freelancing project.",
			"demo" => "https://www.youtube.com/watch?v=9HwOMgeMm5E&t=7s",
			"code" => "https://github.com/amarlearning/RecipeJaar"
		);
	$projects[11] = array(
			"img" => "../img/dfeojm.png",
			"language" => "Php",
			"name" => "DFEOJM",
			"text" => "A PHP Script which just does a little and does that extremely well. It helps you find whether a website is Up or Down with just one function call.",
			"demo" => "http://amarpandey.me/project/down-for-everyone-or-just-me/",
			"code" => "https://github.com/amarlearning/Down-for-everyone-or-just-me"
		);
	$projects[12] = array(
			"img" => "../img/cot.jpg",
			"language" => "Php and JavaScript",
			"name" => "Strategy Game",
			"text" => "Simple strategy game more like clash of clans but in 1D, built using Php
				and Mysql and cron jobs for updatation.",
			"demo" => "",
			"code" => "https://github.com/amarlearning/effective-octo-strategy-game"
		);
	$projects[13] = array(
			"img" => "../img/abhivyakti.jpg",
			"language" => "Php and JavaScript",
			"name" => "Abhivyakti 2016",
			"text" => "Built a website for my colleges cultural fest named Abhivyakti.
				P.S. I got the Best Creative Performer award for this.",
			"demo" => "http://amarpandey.me/project/abhivyakti/",
			"code" => "https://github.com/amarlearning/Abhivyakti-2016"
		);
	$projects[14] = array(
			"img" => "../img/movie.jpg",
			"language" => "Python",
			"name" => "Movie Catalog",
			"text" => "Server-side code written in Python to store a list of my favorite movies.
				This data is then served to a web page using HTML, CSS and JavaScript.",
			"demo" => "http://amarpandey.me/project/moviecatalog/",
			"code" => "https://github.com/amarlearning/MovieCatalog"
		);
	$projects[15] = array(
			"img" => "../img/selfi.jpg",
			"language" => "JavaScript",
			"name" => "Laptop Selfi",
			"text" => "Capture, edit and share selfie's now with your webcam.
				using getMedia API of chrome i built this.",
			"demo" => "http://amarpandey.me/project/web%7bselfi%7d/",
			"code" => "https://github.com/amarlearning/YourLaptop-Selfi-"
		);
	$projects[16] = array(
			"img" => "../img/mis.jpg",
			"language" => "Php and JavaScript",
			"name" => "Make It Short",
			"text" => "PHP scripts that will help you in shortening your url by which you can get a more precised version of your url at ease.",
			"demo" => "http://urls.github.io/url-shortener",
			"code" => "https://github.com/urls/url-shortener"
		);
	$projects[17] = array(
			"img" => "../img/gantavya.png",
			"language" => "Php and JavaScript",
			"name" => "Gantavya 2015",
			"text" => "Built a website for my colleges technical fest named Gantavya.
				I build this website using Php and JQuery.",
			"demo" => "http://amarpandey.me/project/gantavya/",
			"code" => "https://github.com/srmcem/Gantavya-2015"
		);
	$projects[18] = array(
			"img" => "../img/share.jpg",
			"language" => "JavaScript",
			"name" => "Technopedia",
			"text" => "A Chrome Extension which overrides your default new tab page. The best things you will find link to pages which a tech guy needs.",
			"demo" => "",
			"code" => "https://github.com/amarlearning/Technopedia"
		);
	$projects[19] = array(
			"img" => "../img/dn.jpg",
			"language" => "JavaScript",
			"name" => "Desktop Notify",
			"text" => "Using the Desktop Notification API of chrome, i wrote done a script which generates
				a notification on click.",
			"demo" => "http://amarlearning.github.io/improved-potato",
			"code" => "https://github.com/amarlearning/improved-potato"
		);
	$projects[20] = array(
			"img" => "../img/speed.jpg",
			"language" => "JavaScript",
			"name" => "Speedometer",
			"text" => "Web application which as the name suggest find your internet connection speed, latency, Jitter, and IP. It was developed using REST API.",
			"demo" => "http://amarpandey.me/project/speed/",
			"code" => "https://github.com/amarlearning/Speedometer"
		);
	$projects[21] = array(
			"img" => "../img/response.jpg",
			"language" => "JavaScript",
			"name" => "Responsinator",
			"text" => "Responsinator is web application which help you to check the responsiveness of the website by just one click.",
			"demo" => "http://amarpandey.me/project/response/",
			"code" => "https://github.com/amarlearning/Responsinator"
		);
?>
		<section class="projects-section">
			<div class="swag-picture">
				<img src="../img/pp.jpg">
			</div>
			<div class="gap40"></div>
			<div class="about-me fixing">
				<span class="about-me-heading fixing-projects"><span id="bluehigh">F</span>un Projects</span>
				<div class="gap10"></div>
				<div class="card-container">
					<div class="row row-fixing">
					<?php foreach ($projects as $project) { ?>
						<div class="col s12 m6 l4">
							<div class="project-box">
								<div class="icon-image">
									<img src="<?php echo $project["img"]; ?>" alt="Todoed">
								</div>
								<div class="gap10"></div>
								<span class="place"><?php echo $project["language"]; ?><br></span>
								<h6 class="company"><?php echo $project["name"]; ?></h6>
								<p class="company-text-projects"><?php echo $project["text"]; ?></p>
								<div class="button-box">
									<a class="wonder-links" href="<?php echo $project["code"]; ?>" target="_blank">Code</a>
									<a class="wonder-links wonder-link-right" href="<?php echo $project["demo"]; ?>" target="_blank">Demo</a>
								</div>
							</div>
						</div>
					<?php } ?>
					</div>
				</div>
			</div>
		</section>
<?php
	$path = $_SERVER['DOCUMENT_ROOT'];
	$path .= "/includes/footer.php";
	include_once($path);
?>
