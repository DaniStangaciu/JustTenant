using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Justenant_Application
{
    public partial class signup : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void signupButton_Click(object sender, EventArgs e)
        {
            // initialises a new data model object for the SQL database 
            Just_DataEntities db = new Just_DataEntities();
            // initialises a new user
            var user = new User();
            // maps database table columns to corresponding textboxes
            user.Username = email.Text;
            user.Password = password.Text;
            user.ConfirmedPassword = confirmPassword.Text;
            // adds the new user to the Users table
            db.Users.Add(user);
            // saves the changes to the database
            db.SaveChanges();
            // clears text in textboxes after user is registered to JusTenant
            email.Text = "";
            password.Text = "";
            confirmPassword.Text = "";
        }
    }
}
