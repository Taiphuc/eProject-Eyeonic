<?php
	session_start();

	$baseUrl = "http://".$_SERVER['HTTP_HOST']."/eProject";
	$admin_config = "http://".$_SERVER['HTTP_HOST']."/eProject/admin";
	$site = NULL;

	function debug_AlertMsg ($msg)
	{
		echo "<script type='text/javascript'>alert('{$msg}');</script>";
	}
	function debug_PageRedirect ($url, $time)
	{
		return header("Refresh:{$time}; url=$url");
	}
	function check_Session()
	{
		if (session_status() == PHP_SESSION_ACTIVE && isset($_SESSION['admin_authentication']))
			return true;
		else return false;
	}
?>
