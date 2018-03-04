<?php
	//Initiate connection
	$mysql = array ('Server'=>"localhost", 'User'=>"root", 'Password'=>NULL, 'DB'=>"eyeonic");
	$conn = new mysqli($mysql['Server'], $mysql['User'], $mysql['Password'], $mysql['DB']);
	//Check connection
	if ($conn->connect_errno)
	{
		trigger_error($conn->connect_error);
		debug_AlertMsg("Connection failed...");
		debug_PageRedirect('index.php/?settings=account&func=login', 1);
	}
?>
