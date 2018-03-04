<?php
	require("xtemplate.class.php");
	include("config-database.php");

	$baseUrl = "http://".$_SERVER['HTTP_HOST']."/eProject";
	function debug_AlertMsg ($msg)
	{
		echo "<script type='text/javascript'>alert('{$msg}');</script>";
	}

	function debug_PageRedirect ($url, $time)
	{
		return header("Refresh:{$time}; url=$url");
	}
?>
