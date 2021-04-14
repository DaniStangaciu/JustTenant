
function createPDF() {
	var doc = new jsPDF();

	doc.text("Tenant Report", 90, 10);
	doc.text("Housing Problem: " + document.getElementById("housing-problem").value, 20, 20);
	var ai = document.getElementById("annual-income").value;

	if (ai != "")
		doc.text("Annual Income (£): " + ai, 20, 30);
	else {
		alert("ERROR..!!..Please Enter Income. ");
		return;
	}


	ai = document.getElementById("current-residence").value;

	if (ai != "")
		doc.text("Time at Current Residence (weeks): " + document.getElementById("current-residence").value, 20, 40);
	else {
		alert("ERROR..!!..Please Enter Current Residence. ");
		return;
	}

	if (document.getElementById("yes").checked || document.getElementById("no").checked)
		document.getElementById("yes").checked == true ? doc.text("Partner: Yes", 20, 50) : doc.text("Partner: No", 20, 50);
	else {
		alert("ERROR..!!..Please Check the Partner. ");
		return;
	}

	if (document.getElementById("employment").value != "")
		doc.text("Employment Status: " + document.getElementById("employment").value, 20, 60);
	else {
		alert("ERROR..!!..Please Enter Employement Value. ");
		return;
	}

	if (document.getElementById("yes1").checked || document.getElementById("no1").checked) {
		document.getElementById("yes1").checked == true ? doc.text("Savings/Investments: Yes", 20, 70) : doc.text("Savings/Investments: No", 20, 70);
	}
	else {
		alert("ERROR..!!..Please Check the Savings/Investments. ");
		return;
	}


	if (document.getElementById("children").value != "")
		doc.text("Number of Children: " + document.getElementById("children").value, 20, 80);
	else {
		alert("ERROR..!!..Please Enter No of Children. ");
		return;
	}

	if (document.getElementById("dependents").value != "")
		doc.text("Number of Dependents: " + document.getElementById("dependents").value, 20, 90);
	else {
		alert("ERROR..!!..Please Enter No of dependents. ");
		return;
	}


	if (document.getElementById("yes2").checked || document.getElementById("no2").checked) {
		document.getElementById("yes2").checked == true ? doc.text("Benefits: Yes", 20, 100) : doc.text("Benefits: No", 20, 100);
	}
	else {
		alert("ERROR..!!..Please Check the Benefits. ");
		return;
	}



	doc.save("tenant-report.pdf");
	alert("Congratulations. Your form is submitted, Please explore the document in pdf format. ");
}

