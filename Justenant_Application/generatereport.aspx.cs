using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Justenant_Application
{
    public partial class generatereport : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["Username"] != null)
            {
                success1.Text = "Logged in as: " + Session["Username"];
            }
        }

        protected void logout2_Click(object sender, EventArgs e)
        {
            Response.Redirect("login.aspx");
        }
    }
}