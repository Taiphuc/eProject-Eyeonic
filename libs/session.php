<?php
	//Check if session is false
	if (!check_Session())
	{
		$db = NULL; //disconnect the database
		debug_PageRedirect($admin_config, 0); //redirect to index.php
	}

	//logout button set -> delete the current session
	if (isset($_POST['Logout']))
	{
		session_destroy();
		$db = NULL;
		debug_PageRedirect($admin_config, 0);
	}
?>
