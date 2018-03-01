<?php
	$xpt_login = new XTemplate('views/account/login.html');

	$xpt_login->parse('LOGIN');
	$admin_content = $xpt_login->text('LOGIN');
?>
