
function createPDF() {
	var doc = new jsPDF();

	doc.text("Tenant Report", 90, 10);

	var ai = document.getElementById("rent").value;

	if (ai != "")
		doc.text("Rent owed (£): " + ai, 20, 20);
	else {
		alert("ERROR..!!..Please Enter Rent. ");
		return;
	}

	ai = document.getElementById("current-residence").value;

	if (ai != "")
		doc.text("Time at Current Residence (weeks): " + document.getElementById("current-residence").value, 20, 30);
	else {
		alert("ERROR..!!..Please Enter Current Residence. ");
		return;
	}
	ai = document.getElementById("occupant").value;
	if (ai != "")
		doc.text("Occupants: " + ai, 20, 40);
	else {
		alert("ERROR..!!..Please Enter number of occupants. ");
		return;
	}

	ai = document.getElementById("annual-income").value;
	if (ai != "")
		doc.text("Annual Income (£): " + ai, 20, 50);
	else {
		alert("ERROR..!!..Please Enter your Annual Income. ");
		return;
	}


	if (document.getElementById("yes").checked || document.getElementById("no").checked)
		document.getElementById("yes").checked == true ? doc.text("Significant mental/physical problems: Yes", 20, 60) : doc.text("Significant mental/physical problems: No", 20, 60);
	else {
		alert("ERROR..!!..Please Check health problems. ");
		return;
	}

	if (document.getElementById("yes1").checked || document.getElementById("no1").checked) {
		document.getElementById("yes1").checked == true ? doc.text("Disrepair to home: Yes", 20, 70) : doc.text("Disrepair to home: No", 20, 70);
	}
	else {
		alert("ERROR..!!..Please Check Disrepair to Home. ");
		return;
	}

	doc.save("tenant-report.pdf");
	alert("Congrats. Your form is submitted, Please explore the document in pdf format. ");
}