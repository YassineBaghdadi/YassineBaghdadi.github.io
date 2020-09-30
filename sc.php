<?php

$data = $_POST['info'];
$fp = fopen('info.json', 'a');
fwrite($fp, $data);
fclose($fp);

?>