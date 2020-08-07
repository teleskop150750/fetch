<?php

$a = $_POST['a'];
$b = $_POST['b'];

$c = $a + $b;

echo json_encode($c);