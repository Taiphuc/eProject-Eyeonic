<?php
	if (!empty($_POST['admin_pw']) && !empty($_POST['admin_acc']) && isset($_POST['Login']))
	{
		ob_start();
		//Check user information
		//Get the user's input by real_escape_string() to avoid SQL Injection
		$info = array
		(
			'account' => $db->_db->quote($_POST['admin_acc']),
			'password' => sha1($_POST['admin_pw'])
		);

		$debug_result = $db->fetchAll("SELECT * FROM administration WHERE acc={$info['account']};");

		//2 step verify password
		foreach ($debug_result as $col)
		{
			//hashes the sha1 string
			$pw_hash = password_hash($col['pw'], PASSWORD_DEFAULT);
			//verify the plain-sha1 with the hash
			if (!password_verify($info['password'], $pw_hash))
			{
				debug_AlertMsg("Wrong username or password...");
				$db = NULL;
			}
			else if (password_verify($info['password'], $pw_hash))
			{
				$_SESSION['admin_authentication'] = true;
				debug_PageRedirect("{$admin_config}/?settings=test&func=check", 0);
			}
		}
		ob_end_flush();
	}


?>
