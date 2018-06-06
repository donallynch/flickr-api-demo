<?php

/* Flickr-api demonstration by Donal Lynch | Software Engineer */
include 'vendor/autoload.php';
include 'config/config.php';

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);

echo $twig->render('index/index.html.twig');

