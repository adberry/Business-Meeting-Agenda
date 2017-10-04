<?php
//include connect.php page for database connection
Include('connect.php');


if (isset($_REQUEST['Submit']))
{
// here check the submitted text box for null value by giving there name.
	if($_REQUEST['user_id']=="" || $_REQUEST['password']=="")
	{
	echo " Field must be filled";
	}
	else
	{
	  $sql1= "select * from members where username = '".$_REQUEST['user_id']."' &&  password ='".$_REQUEST['password']."'";
	  $result=mysql_query($sql1)
	    or exit("Sql Error".mysql_error());
	    $num_rows=mysql_num_rows($result);
	   if($num_rows > 0)
	   {
       //redirects the url to the homepage
		   header('Location: http://localhost:8888/calendar.html');
         }
	    else
		{

        echo "<p> username or password is incorrect </p>";
    //  echo "
      //  <script type="text/javascript">
        // $('#alert').show();
         //</script>
        // ";
		}
	}
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Login</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link href="css/styles.css" rel="stylesheet">

<!-- jQuery Version 1.11.1 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

</head>

<body>
  <div id="loginModal" class="modal show" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
  		<div class="modal-header">
            <h1 class="text-center">Login</h1>
        </div>
      <div class="modal-body">
        <div class="alert alert-danger fade in" id="alert">
          <a href="#" class="close" data-dismiss="alert">&times;</a>
          <strong>Error!</strong> Your username or password is incorrect
        </div>
      <form name="form_login" method="post" action="index.php" role="form">
          <div class="form-group">
            <input name="user_id" type="text" id="user_id" class="form-control input-lg" placeholder="User Name">
          </div>
          <div class="form-group">
            <input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password">
          </div>
          <div clas="form-group">
            <input type="submit" name="Submit" value="Sign In" class="btn btn-primary btn-lg btn-block">
          </div>
        </form>
        </div>
          <div class="modal-footer">
              <div class="col-md-12">
      						<div class="create-account">
      							<span class="pull-right"><a href="Create Account.php">Create Account</a></span>
      						</div>
    		        </div>
          </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>
