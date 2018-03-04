<?php
	//Don't write any code above this line
	require_once("../libs/bootstrap.php");

	$xpt_home = new XTemplate("views/layout.html");
	$xpt_home->assign('baseUrl', $baseUrl);
	$xpt_home->assign('admin_config', $admin_config);

	//other pages
	if (isset($_GET['settings'], $_GET['func']))
	{

		$settings = $_GET['settings']; $func = $_GET['func'];
		$source = "sites/{$settings}/{$func}.php";

		if (file_exists($source)) include($source);
		else echo "404 NOT FOUND";

		$xpt_home->assign('admin_content', $admin_content);

		$xpt_home->parse('LAYOUT');
		$xpt_home->out('LAYOUT');
	}
	//redirect to login page if not logged in
	else if (!$_SESSION['admin_authentication'])
		debug_PageRedirect("{$admin_config}/?settings=account&func=login", 0);
	else
		debug_PageRedirect("{$admin_config}/?settings=test&func=check", 0);
?>
