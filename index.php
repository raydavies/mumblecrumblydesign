<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Mumble Crumbly Design</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/style.css">

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" async></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js" async></script>
    <script src="http://jquery-ui.googlecode.com/svn/tags/latest/ui/jquery.effects.core.js" async></script>
    <script src="http://jquery-ui.googlecode.com/svn/tags/latest/ui/jquery.effects.slide.js" async></script>
    <script src="./js/scroll.js" async></script>
    <script src="./js/formvalidator.js" async></script>
	<script src="./js/analyticstracking.js" async></script>

    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>

<div id="floor"></div>

<div id="navbar">
	<a href="#prev"><span class="arrow-up"></span></a>
	<a href="#next"><span class="arrow-down"></span></a>
</div>

<div id="title" class="row"><a name="page1"></a>
	<div id="inner_title">
		<img id="title_text" class="img-responsive" src="images/title.png">
		<img id="bg_arrow" src="images/arrow.png">
	</div>

	<div id="freelance_wrapper"><a name="page2"></a>
		<div id="freelance">
			<img id="development" src="images/dnd.png">
			<img id="bg_arrow2" src="images/arrow2.png">
			
			<div id="bubble_wrapper">
			<a href="http://starlearningsystems.com" target="_blank"><img id="hippo" src="images/hippo.png"></a>
			<img id="hippotag" class="hidden" src="images/hippotag.png">
			<a href="http://larenardemusic.com" target="_blank"><img id="renarde" src="images/renarde.png"></a>
			<img id="renardetag" class="hidden" src="images/renardetag2.png">
			<a href="http://thevegimals.com" target="_blank"><img id="vegimals" src="images/vegimals.png"></a>
			<img id="vegimalstag" class="hidden" src="images/vegimalstag.png">
			</div>
		</div>
	</div>
</div>

<div id="projects_wrapper"><a name="page3"></a>
	<div id="projects">
		<img id="projects_title" src="images/projects.png">
		<a href="http://un-blog.appspot.com" target="_blank"><img id="blog" src="images/blog.png"></a>
		<a href="http://un-wiki.appspot.com" target="_blank"><img id="wiki" src="images/wiki.png"></a>
		<img id="python" src="images/python.png">
		<a href="/casino" target="_blank"><img id="casino" src="images/suits.png"></a>
		<img id="javascript" src="images/javascript.png">
		<a href="/guestbook" target="_blank"><img id="guestbook" src="images/guestbook.png"></a>
		<img id="php" src="images/php.png">
	</div>
</div>

<div id="foot_wrapper"><a name="page4"></a>
	<div id="footer">

	<form id="contact_form" action="processform.php" method="post">
		<span class="label"><img src="images/contactname.png"></span><span id="nameerror">Please enter a name!</span><br>
		
		<input type="text" id="name" class="forminput" name="name" size="35"><br>

		<span class="label"><img src="images/contactemail.png"></span><span id="emailerror">Please enter a valid email address!</span><br>

		<input type="text" id="email" class="forminput" name="email" size="35"><br>

		<span class="label"><img src="images/message.png"></span><span id="msgerror">Please enter a message below!</span><br>

		<textarea rows="8" cols="35" id="message" class="forminput" name="message"></textarea><br>

		<input type="submit" value="Contact Us!">
	</form>

		<img id="name" class="hidden" src="images/name.png">
	</div>
</div>

</body>
</html>
