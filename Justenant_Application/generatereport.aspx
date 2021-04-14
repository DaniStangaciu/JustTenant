<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="generatereport.aspx.cs" Inherits="Justenant_Application.generatereport" %>

 
<html lang="en"> 
 
<head runat="server">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Legal Aid</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="jspdf.min.js"></script> 
    <script src="script.js"></script>
</head>
 
<body style="width:100%; padding-left:5%; padding-right:5%"> 
    <form id="form1" runat="server">
        <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
          <div class="container-fluid"> 
 
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> 
                  <div class="navbar-nav"> 
                      
                      
                        <asp:Label ID="success1" runat="server" Text="Label"></asp:Label>
                    <asp:Button ID="logout2" runat="server" class="btn btn-secondary" Text="Log out" BackColor="#666666" Font-Names="Arial" OnClick="logout2_Click" />
 
                </div> 
              </div> 
          </div> 
      </nav> 
      <form id="report" method="post" > 
 
        <h3>Please fill out the form</h3> 

          <div class="mb-3"> 
              <label for="housing-problem" class="form-label">Housing Problems</label> 
              <select required name="problems" id="housing-problem" style="display: block;"> 
                  <option value="eviction">Eviction</option> 
                  <option value="other">Other</option> 
                </select> 
          </div> 
 
        <div class="mb-3"> 
              <label for="annual-income" class="form-label">Annual income (£)</label> 
              <input required type="number" class="form-control" id="annual-income" aria-describedby="annual-income" placeholder="Type here..."> 
          </div> 
 
        <div class="mb-3"> 
              <label for="current-residence" class="form-label"> How long have you lived at your current residence (weeks)</label> 
              <input required type="number" class="form-control" id="current-residence" aria-describedby="current-residence" min="0" max="100"> 
          </div> 
 
        <div class="mb-3"> 
              <label for="partner" class="form-label">Do you have a partner</label> 
  
              <input required  type="radio" id="yes" name="partner" value="Yes"> 
              <label for="yes">Yes</label> 
              <input required type="radio" id="no" name="partner" value="No">
                <label for="no">No</label> 
 
        </div> 
 
        <div class="mb-6"> 
              <label for="employment" class="form-label">Employment Status</label> 
              <select required name="employment" id="employment" style="display: block;"> 
                  <option value="employed">Employed</option> 
                  <option value="self-employed">Self-Employed</option> 
                  <option value="Unemployed">Unemployed</option> 
 
              </select> 
          </div> 
 <br />
        <div class="mb-3"> 
              <label for="savings" class="form-label">Savings/Investments</label> 
  
              <input required type="radio" id="yes1" name="savings" value="Yes"> 
              <label for="yes">Yes</label> 
              <input type="radio" id="no1" name="savings" value="No"> 
              <label for="no">No</label> 
 
        </div> 
 
        <div class="mb-3"> 
              <label for="children" class="form-label">Children</label> 
              <input required type="number" class="form-control" id="children" aria-describedby="children" min="0" max="10"> 
          </div> 
 
        <div class="mb-3"> 
              <label for="dependents" class="form-label">Dependents</label> 
              <input required type="number" class="form-control" id="dependents" aria-describedby="dependents" min="0" max="10"> 
          </div> 
 
        <div class="mb-3"> 
              <label for="benefits" class="form-label">Benefits</label> 
 
              <input required type="radio" id="yes2" name="benefits" value="Yes"> 
              <label  for="yes">Yes</label> 
              <input required type="radio" id="no2" name="benefits" value="No"> 
              <label for="no">No</label> 
 
        </div> 
 
        <div class="mb-3"> 
            <button onclick="createPDF()" class="btn btn-outline-success">Generate PDF Report</button>
          </div> 
 
    </form> 
   </div>
    </form>

  </body> 
 
</html> 
   

