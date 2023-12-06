<?php
	$fullNameName = $_POST['fullName'];
	$emailAddress = $_POST['emailAddress'];
	$loginPassword = $_POST['loginPassword'];
	

	// Database connection
	$conn = new mysqli('localhost','root','','iboutique');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(fullName, emailAddress, loginPassword) values(?, ?, ? )");
		$stmt->bind_param("sss", $fullName, $emailAddress, $loginPassword);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>
	}
?>