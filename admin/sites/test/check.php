<?php
	require_once('../libs/session-management.php');

	$xpt = new XTemplate('views/test/check.html');

	$xpt->parse('PAGECHECK');
	$admin_content = $xpt->text('PAGECHECK');
?>
