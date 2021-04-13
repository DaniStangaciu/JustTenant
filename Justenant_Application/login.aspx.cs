using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Justenant_Application
{
    public partial class login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void submit_Click(object sender, EventArgs e)
        {
            Just_DataEntities db = new Just_DataEntities();
            string userName = email.Text;
            string password = passWord.Text;

            try { 
            User user = db.Users.First(x => x.Username == userName && x.Password == password);
                Session["Username"] = userName;
                if (user == null)
                {
                    Response.Write("<script>alert('Please enter valid Username and Password')</script>");
                    return;
                }
                Response.Redirect("legalaid.html");
            }
            catch (Exception exp)
            {
                Response.Write("<script>alert('Please enter valid Username and Password')</script>");
                return;
            }

        }
    }
}