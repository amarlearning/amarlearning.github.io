<?php
session_start();
if(isset($_POST['submit']))
{
	$name = $_POST['name'];
	$branch = $_POST['parent_branch'];
	$year = $_POST['child_year'];
	$email = $_POST['email'];
	$mobile = $_POST['number'];
	$dob = $_POST['dob'];
	$college = $_POST['college'];
	$city = $_POST['city'];
	$pcell = $_POST['parent_selection'];
	$event = $_POST['child_selection'];

	if($name == "")
	{
		header("Location: index.php?status=error");
	}
	elseif ($branch == "")
	{
		header("Location: index.php?status=error");
	}
	elseif ($year == "") {
		header("Location: index.php?status=error");
	}
	elseif ($email == "")
	{
		header("Location: index.php?status=error");
	}
	elseif ($mobile == "")
	{
		header("Location: index.php?status=error");
	}
	elseif ($dob == "") {
		header("Location: index.php?status=error");
	}
	elseif ($college == "" || $city == "" || $pcell == "" || $event == "")
	{
		header("Location: index.php?status=error");
	}
	else
	{
			header("Location: index.php?status=thanks");
			$contact_info = "";
			$contact_info = $contact_info . "Name : " . $name . "\n";
			$contact_info = $contact_info . "Branch : " . $branch . "\n";
			$contact_info = $contact_info . "Year : " . $year . "\n";
			$contact_info = $contact_info . "Email : " . $email . "\n";
			$contact_info = $contact_info . "Mobile : " . $mobile . "\n";
			$contact_info = $contact_info . "Date of Birth : " . $dob . "\n";
			$contact_info = $contact_info . "College Name : " . $college . "\n";
			$contact_info = $contact_info . "City : " . $city . "\n";
			$contact_info = $contact_info . "Cell Name : " . $pcell . "Cell \n";
			$contact_info = $contact_info . "Event Name : " . $event . "\n";
			$contact_info = $contact_info . "Registration From : Web (Amar Prakash Pandey)";
			if($pcell == "Euphony")
			{
				$to = "euphony.abhivyakti@gmail.com";
			}
			if($pcell == "Dramatics")
			{
				$to = "dracualsrm@gmail.com";
			}
			if($pcell == "Informal")
			{
				$to = "informal.abhivyakti@gmail.com";
			}
			if($pcell == "Creative Canvas")
			{
				$to = "c3club2016@gmail.com";
			}
			if($pcell == "Choreography")
			{
				$to = "stepcell2k16@gmail.com";
			}
			if($pcell == "Handicraft")
			{
				$to = "handicraftcellsrmcem@gmail.com";
			}
			if($pcell == "Media")
			{
				$to = "media.abhivyakti2016@gmail.com";
			}
			if($pcell == "Photography")
			{
				$to = "photographysrmgpc@gmail.com";
			}
			if($pcell == "Literaty")
			{
				$to = "amar.om1994@gmail.com";
			}
			if($pcell == "Newspaper")
			{
				$to = "newspaper.abhivyakti@gmail.com";
			}
			if($pcell == "Xero")
			{
				$to = "xero2k16@gmail.com";
			}
			$subject = "New Registration!";
			$txt = $contact_info;
			$header = "From: webmaster@abhivyakti.info" . "\r\n";
			$message = mail($to,$subject,$txt,$header);
	}
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registration Form | Abhivyakti 2016</title>
    <link rel="icon" href="/img/icon/favicon.png" typetr="image/x-icon">
    <link href='https://fonts.googleapis.com/css?family=Lobster+Two:400,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Salsa' rel='stylesheet' type='text/css'>
    <!-- <link rel="stylesheet" href="../register/css/vegas.min.css" media="screen" title="no title" charset="utf-8"> -->
    <link rel="stylesheet" href="../register/css/style.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="../register/css/media.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <div class="home-icon" style="margin:0px 40px;position:absolute;">
      <a href="/" style="z-index:100">
        <img class="home-img" style="background-color:#ffcc00" src="../img/icon/home1.png"/>
      </a>
    </div>
    <div class="main-wrapper">
      <h1>Registration Form</h1>
      <div class="gap-0" style="border-top:1px solid #ddd"></div>
      <div class="gap-40"></div>
			<?php
				if(isset($_GET["status"]) && $_GET["status"] == "error")
				{
					echo "<div class='error'>Fill out all the feilds!</div>";
				}
				if(isset($_GET["status"]) && $_GET["status"] == "thanks" )
				{
					echo "<div class='success'>Thanks For registration!</div>";
				}
		  ?>
      <form class="main-form" id="#commentForm" action="index.php" method="post">
        <div class="form-content">
          <div class="box-coloum"><label for="name">Name</label></div>
          <div class="gap-5"></div>
          <input placeholder="Name*" id="name" type="text" name="name" class="box-input"><i></i>
          <div class="gap-20"></div>
          <div class="box-coloum"><label for="name">Branch &amp; Year</label></div>
          <div class="gap-5"></div>
          <select name="parent_branch" id="parent_branch" class="box-input">
          <option value="">-- Please Select --</option>
          <option value="BBA">BBA</option>
          <option value="BCA">BCA</option>
          <option value="MBA">MBA</option>
          <option value="MCA">MCA</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information &amp; Technology</option>
          <option value="Electronics Communication">Electronics &amp; Communication</option>
          <option value="Machanical Engineering">Machanical Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Electronics Instrumentation">Electronics  Instrumentation</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Electrical Electronics">Electrical &amp; Electronics</option>
          </select>
          <div class="gap-5"></div>
          <select name="child_year" id="child_year" class="box-input">
          </select>
          <div class="gap-20"></div>
          <div class="box-coloum"><label for="email">Email</label></div>
          <div class="gap-5"></div>
          <input placeholder="Email*" id="email" type="email" name="email" class="box-input">
          <div class="gap-20"></div>
          <div class="box-coloum"><label for="mobile">Mobile Number</label></div>
          <div class="gap-5"></div>
          <input placeholder="Mobile Number*" id="mobile" type="text" name="number" class="box-input">
          <div class="gap-20"></div>
          <div class="box-coloum"><label for="dob">Date of Birth</label></div>
          <div class="gap-5"></div>
          <input placeholder="Date of Birth*" id="dob" type="date" name="dob" class="box-input">
          <div class="gap-20"></div>
          <div class="box-coloum"><label for="college">College</label></div>
          <div class="gap-5"></div>
          <input placeholder="College Name*" id="college" type="text" name="college" class="box-input">
          <div class="gap-20"></div>
          <div class="box-coloum"><label for="city">City</label></div>
          <div class="gap-5"></div>
          <input placeholder="City*" id="city" type="text" name="city" class="box-input">
          <div class="gap-20"></div>
          <div class="box-coloum"><label for="event">Genre of Interest</label></div>
          <div class="gap-5"></div>
          <select name="parent_selection" id="parent_selection" class="box-input">
          <option value="">-- Please Select --</option>
          <option value="Euphony">Euphony Events</option>
          <option value="Dramatics">Dramatics Event</option>
          <option value="Informal">Informal Events</option>
          <option value="Creative Canvas">Creative Canvas Events</option>
          <option value="Choreography">Dance Events</option>
          <option value="Handicraft">Handicraft Events</option>
          <option value="Media">Media Events</option>
          <option value="Photography">Photography Events</option>
          <option value="Literaty">Literaty Events</option>
					<option value="Newspaper">Newspaper Cell Events</option>
          <option value="Xero">Xero - The Annual Rockfest</option>
          </select>
          <div class="gap-5"></div>
          <select name="child_selection" id="child_selection" class="box-input">
          </select>
          <div class="gap-40"></div>
          <div class="gap-5"></div>
          <input type="submit" name="submit" value="Submit" class="box-submit">
          <div class="gap-20"></div>
        </div>
      </form>
    </div>
    <script src="../register/js/jquery-2.1.3.min.js" charset="utf-8"></script>
    <!-- <script src="../register/js/zepto.min.js"></script>
    <script src="../register/js/vegas.min.js" charset="utf-8"></script> -->
    <script src="../register/js/script.js" charset="utf-8"></script>
    <!-- <script type="text/javascript">
      $("body").vegas({
      slides: [
        { src: "/project/weblast/register/img/register.png" }
      ]
    </script> -->
  </body>
</html>
