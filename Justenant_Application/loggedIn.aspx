<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="loggedIn.aspx.cs" Inherits="Justenant_Application.loggedIn" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logged In</title>
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
                    <asp:Label ID="success" runat="server" Text="Label"></asp:Label>
                    <asp:Button ID="logout" runat="server" class="btn btn-secondary" Text="Log out" BackColor="#666666" Font-Names="Arial" OnClick="logout_Click" />
                </div>
            </div>
        </div>
    </nav>

    <div id="info">
        <p>

          Logged in successfully!
        </p>
    </div>


        </div>
    </form>
</body>
</html>
