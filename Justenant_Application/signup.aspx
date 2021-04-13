<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="signup.aspx.cs" Inherits="Justenant_Application.signup" %>

<!DOCTYPE html lang="en">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Legal Aid</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

</head>
<body>
    <form id="form1" runat="server">
        <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">


            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                     
                    <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    <a class="nav-link" href="https://www.gov.uk/check-legal-aid">Check Financial Eligibility</a>
                    <a class="nav-link" href="signup.aspx">Sign Up</a>
                    <a class="nav-link" href="login.aspx">Login</a>
                    <a class="nav-link" href="legalaid.html">Generate Report</a>

                </div>
            </div>
        </div>
    </nav>

    <div id="signup">
        <p style="font-size: 25px; text-align: left;">JusTenant Sign Up</p>
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                 <asp:TextBox ID="email" TextMode="Email" runat="server" class="form-control" aria-describedby="emailHelp"></asp:TextBox>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
               <asp:TextBox ID="password" TextMode="Password" runat="server" class="form-control"></asp:TextBox>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <asp:TextBox ID="confirmPassword" TextMode="Password" runat="server" class="form-control"></asp:TextBox>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="terms">
                <label class="form-check-label" for="terms">I accept the <a href="">Terms of Use</a> & <a href=""> Privacy Policy</a> </label>
            </div>
            <asp:Button ID="signupButton" runat="server" class="btn btn-secondary" Text="Sign Up" BackColor="#666666" Font-Names="Arial" OnClick="signupButton_Click"></asp:Button>
        </form>
        Already registered? Click <a href="login.aspx">here</a>.
    </div>


    <script src="index.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_iTd9vtQX1qw73GrJT6mpY5oU7z5aNBw&callback=initMap&libraries=&v=weekly" async></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </div>
    </form>
</body>
</html>
