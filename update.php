<?php
// require_once('Models/Todo.php');
require_once 'Models/Todo.php';
// スーパーグローバル変数を使ってtask , idの値を取得するコードを書いてください
// $task , $id
// var_dump
$id = $_POST['id'];
$task = $_POST['task'];
// var_dump($id);
// var_dump($task);
$todo = new Todo();
$todo->update($task, $id);
header('Location: index.php');