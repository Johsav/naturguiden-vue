
<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];



echo $name;


echo ' this is the posted data content';
?>