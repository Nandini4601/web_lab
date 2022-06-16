<?php
$host = 'localhost:3306';
$user = 'root';
$pass = '';
$dbname = 'sam';
$conn = mysqli_connect($host, $user, $pass, $dbname);

if(!$conn){
die('Could not connect: '.mysqli_connect_error());
}
echo 'Connected successfully<br/>';
$f_name = $_REQUEST['f_name'];
$l_name = $_REQUEST['l_name'];
$email = $_REQUEST['email'];
$pwd = $_REQUEST['pwd'];

$sql = "INSERT INTO register(f_name,l_name,email,pwd) VALUES ('$f_name','$l_name','$email','$pwd')";
if(mysqli_query($conn, $sql)){
   header('Location: ack1.html');
}else{
echo "Registration Failed !! : ". mysqli_error($conn);
}
mysqli_close($conn);
?>