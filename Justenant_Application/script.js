
function createPDF() {
	var doc = new jsPDF();

	doc.text("Tenant Document", 90, 10);

	var ai = document.getElementById("rent").value;

	if (ai != "")
		doc.text("Rent Owed (£): " + ai, 20, 20);
	else {
		alert("ERROR..!!..Please Enter Rent. ");
		return;
	}

	ai = document.getElementById("arrear").value;

	if (ai != "")
		doc.text("Arrears owed (£): " + document.getElementById("arrear").value, 20, 30);
	else {
		alert("ERROR..!!..Please enter Arrear Amount. ");
		return;
	}

	ai = document.getElementById("current-residence").value;

	if (ai != "")
		doc.text("Time at Current Residence (Years): " + document.getElementById("current-residence").value, 20, 40);
	else {
		alert("ERROR..!!..Please Enter Current Residence. ");
		return;
	}


	ai = document.getElementById("occupants").value;

	if (ai != "")
		doc.text("How many people live with you: " + ai, 20, 50);
	else {
		alert("ERROR..!!..Please Enter Number of People Who Live With You. ");
		return;
	}



	ai = document.getElementById("age").value;

	if (ai != "")
		doc.text("Age of Occupant(s): " + ai, 20, 60);
	else {
		alert("ERROR..!!..Please Enter Age. ");
		return;
	}





	if (document.getElementById("children").value != "")
		doc.text("No. of Children: " + document.getElementById("children").value, 20, 70);
	else {
		alert("ERROR..!!..Please Enter No of Children. ");
		return;
	}


	if (document.getElementById("relation").value != "")
		doc.text("Relationship(s) to tenant: " + document.getElementById("relation").value, 20, 80);
	else {
		alert("ERROR..!!..Please Enter Relation to Tenant. ");
		return;
	}

	if (document.getElementById("annual-income").value != "")
		doc.text("Monthly Income(£): " + document.getElementById("annual-income").value, 20, 100);
	else {
		alert("ERROR..!!..Please Enter Monthly Income(£). ");
		return;
	}




	var y_coord = 90;
	if (document.getElementById("benefits").checked) {
		doc.text("Employment Status: Welfare Benefits", 20, 110);
		doc.text("Detailed Welfare Benefits are:" + document.getElementById("detailedbenefits").value, 20, 120);
		y_coord = 100;

	}
	else if (document.getElementById("self-employed").checked) {
		doc.text("Employment Status: Self-Employed", 20, 110);
		y_coord = 100;

	}
	else if (document.getElementById("employed").checked) {
		doc.text("Employment Status: Employed", 20, 110);
		y_coord = 100;
	}
	else {
		alert("ERROR..!!..Please Choose Employment Status.");
		return false;
	}

	if (document.getElementById("yes1").checked) {
		doc.text("Any significant mental/physical health problems: Yes", 20, 130);
		y_coord += 10;
		doc.text("Detail of health problems are:" + document.getElementById("detailedproblems").value, 20, 140);
		y_coord += 20;

	}
	else if (document.getElementById("no1").checked) {
		doc.text("Any significant mental/physical health problems: No", 20, 130);
		y_coord += 10;

	}
	else {
		alert("ERROR..!!..Please Choose Mental/Physical Problem status.");
		return false;
	}

	if (document.getElementById("yes2").checked) {
		doc.text("Any disrepair to your home: Yes", 20, 150);
		y_coord += 10;
		doc.text("Detail of disrepair are:" + document.getElementById("detaileddisrepair").value, 20, 160);
		y_coord += 20;

	}
	else if (document.getElementById("no2").checked) {
		doc.text("Any disrepair to your home: No", 20, 150);
		y_coord += 10;

	}
	else {
		alert("ERROR..!!..Please Choose disrepair to your home.");
		return false;
	}


	doc.save("tenant-report.pdf");
	alert("Your form is submitted, Please explore the document in pdf format. ");

}

function hidedivdbenefits() {
	document.getElementById('divdbenefits').style.display = 'none'
}
function showdivdbenefits() { document.getElementById('divdbenefits').style.display = 'block' }
function showdivproblems() { document.getElementById('divproblems').style.display = 'block' }
function hidedivproblems() { document.getElementById('divproblems').style.display = 'none' }
function showdisrepair() { document.getElementById('divdisrepair').style.display = 'block' }
function hidedisrepair() { document.getElementById('divdisrepair').style.display = 'none' }
