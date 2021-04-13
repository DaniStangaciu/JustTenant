function createPDF() {

    var doc = new jsPDF();
    doc.text("Tenant Report: ", 20, 10);
    doc.text("Housing Problem: ", 20, 30);
    doc.text(document.getElementById("housing-problem").value, 20, 40);
    doc.text("Annual Income (£): ", 20, 50);
    doc.text(document.getElementById("annual-income").value, 20, 60);
    doc.text("Time at Current Residence (weeks): ", 20, 70);
    doc.text(document.getElementById("current-residence").value, 20, 80);
    doc.text("Partner: ", 20, 90);
    doc.text(document.getElementById("partner").value, 20, 100);
    doc.text("Employment Status: ", 20, 110);
    doc.text(document.getElementById("employment").value, 20, 120);
    doc.text("Savings/Investments: ", 20, 130);
    doc.text(document.getElementById("savings").value, 20, 140);
    doc.text("Number of Children: ", 20, 150);
    doc.text(document.getElementById("children").value, 20, 160);
    doc.text("Number of Dependents: ", 20, 170);
    doc.text(document.getElementById("dependents").value, 20, 180);
    doc.text("Benefits: ", 20, 190);
    doc.text(document.getElementById("benefits").value, 20, 200);


    // saves file

    doc.save("tenant-report.pdf");

}
