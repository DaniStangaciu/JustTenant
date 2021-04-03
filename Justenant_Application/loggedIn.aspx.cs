using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Justenant_Application
{
    public partial class loggedIn : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["Username"] != null)
            {
                success.Text = "Logged in as: " + Session["Username"];
            }
        }

        protected void logout_Click(object sender, EventArgs e)
        {
            Response.Redirect("login.aspx");
        }
    }
}