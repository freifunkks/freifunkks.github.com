<?php
	// TODO: Do we need parameter verification?

	$base    = "http://dl.ffks.de/images/";
	$channel = "stable"; // $_GET["channel"]
	$build   = "gluon-ffks-2015.02.07.11"; // TODO: Get this info dynamically somehow
	$vendor  = $_GET["vendor"];
	$device  = $_GET["device"];
	$version = $_GET["version"];

	$url     = $base . $channel . "/factory/" . $build . "-" . $vendor . "-" . $device;
	if (!empty($version)) {
		$url .= "-" . $version;
	}
	$url .= ".bin";

	header("Location: " . $url, true, 303);
?>
