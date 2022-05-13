<?php

if (isset($_POST['submit'])) {
    $name = $_POST['firstname'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "kccmrj@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "An email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}