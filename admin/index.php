<?php
	include("../libs/bootstrap.php");

	$xpt_home = new XTemplate("views/layout.html");
	$settings = $_GET['settings']; $func = $_GET['func'];
	$source = "sites/{$settings}/{$func}.php";

	if (file_exists($source))
		include($source);
	else
		echo "404 NOT FOUND";

	$xpt_home->assign('baseUrl',$baseUrl);
	$xpt_home->assign('admin_content',$admin_content);
	$xpt_home->parse('LAYOUT');
	$xpt_home->out('LAYOUT');
?>
