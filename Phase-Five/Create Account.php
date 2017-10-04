<?php
//include connect.php page for database connection
Include('connect.php');
//if submit is not blanked i.e. it is clicked.
If(isset($_REQUEST['submit'])!='')
{
If($_REQUEST['team_select']=='' || $_REQUEST['user_id']=='' || $_REQUEST['password']==''|| $_REQUEST['repassword']=='')
{
Echo "please fill the empty field.";
}
Else
{


$sql="insert into members(username,password,teamname) values('".$_REQUEST['user_id']."', '".$_REQUEST['password']."', '".$_REQUEST['team_select']."')";
$res=mysql_query($sql);
If($res)
{
Echo "Record successfully inserted";
}
Else
{
Echo "There is some problem in inserting record";
}

}

}

?>





<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>Create Account</title>
		<meta name="generator" content="Bootply" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/styles.css" rel="stylesheet">

		<!-- script references -->
			<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
			<script src="js/bootstrap.min.js"></script>

	</head>
	<body>
<!--login modal-->
<div id="loginModal" class="modal show" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
          <h1 class="text-center">Create Account</h1>
      </div>
      <div class="modal-body">
          <form name="form_create_account" method="post" action="Create Account.php" role="form">
						<div class="form-group">
							<label for="exampleSelect1">Team Name</label>
						    <select class="form-control" input name="team_select" name="team_select" id="team_select">
						      <option>Agile Team</option>
						      <option>Marketing Team</option>
						    </select>
						</div>
            <div class="form-group">
							<input name="user_id" type="text" id="user_id" class="form-control input-lg" placeholder="User Name">
            </div>
            <div class="form-group">
              <input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="password" name="repassword" id="password" class="form-control input-lg" placeholder="Re-Enter Password">
            </div>
            <div class="form-group">
							<input type="submit" name="submit" value="Sign Up" class="btn btn-primary btn-lg btn-block">
            </div>
          </form>
      </div>
  </div>
  </div>
</div>
	</body>
</html>
