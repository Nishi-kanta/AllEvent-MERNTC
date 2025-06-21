import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PdfDownload = () => {
  const generateInvoicePDF = () => {
    const doc = new jsPDF();

    const invoiceData = {
      customer: {
        name: "Rahul Sharma",
        address: "12, Green Avenue, Delhi - 110001",
        phone: "+91-9876543210",
      },
      showroom: {
        name: "Honda Dream Motors",
        address: "Plot 45, Main Road, Mumbai - 400001",
        contact: "+91-9000012345",
        gst: "27AABCH1234A1Z9",
      },
      bike: {
        model: "Honda CB Shine 125cc",
        engineNo: "ENG20250123SHINE",
        chassisNo: "CHS20250123SHINE",
        price: 85000,
        registrationCharges: 2500,
        insurance: 3200,
        gstPercent: 18,
      },
      invoiceNumber: "INV-2025-001",
      date: new Date().toLocaleDateString(),
    };

    const { showroom, customer, bike, invoiceNumber, date } = invoiceData;

    // --- HEADER ---
    doc.setFontSize(18);
    doc.text(showroom.name, 14, 20);
    doc.setFontSize(11);
    doc.text(`Address: ${showroom.address}`, 14, 28);
    doc.text(`Contact: ${showroom.contact}`, 14, 34);
    doc.text(`GSTIN: ${showroom.gst}`, 14, 40);
    doc.setFontSize(12);
    doc.text(`Invoice No: ${invoiceNumber}`, 150, 20);
    doc.text(`Date: ${date}`, 150, 26);

    // --- CUSTOMER INFO ---
    doc.setFontSize(13);
    doc.text("Bill To:", 14, 50);
    doc.setFontSize(11);
    doc.text(`Name: ${customer.name}`, 14, 56);
    doc.text(`Address: ${customer.address}`, 14, 62);
    doc.text(`Phone: ${customer.phone}`, 14, 68);

    // --- BIKE DETAILS TABLE ---
    const rows = [
      ["Bike Model", bike.model],
      ["Engine Number", bike.engineNo],
      ["Chassis Number", bike.chassisNo],
      ["Base Price", `₹ ${bike.price.toLocaleString()}`],
      ["Registration Charges", `₹ ${bike.registrationCharges}`],
      ["Insurance", `₹ ${bike.insurance}`],
    ];

    const subtotal = bike.price + bike.registrationCharges + bike.insurance;
    const gst = (subtotal * bike.gstPercent) / 100;
    const total = subtotal + gst;

    // 🔧 Create table for bike details
    autoTable(doc, {
      startY: 75,
      head: [["Particulars", "Details"]],
      body: rows,
      theme: "grid",
      headStyles: {
        fillColor: [0, 102, 204],
        textColor: 255,
        halign: "center",
      },
      styles: { fontSize: 11 },
    });

    // ✅ CORRECTED: Use doc.lastAutoTable.finalY
    const summaryStart = doc.lastAutoTable.finalY + 10;

    doc.setFontSize(12);
    doc.text("Price Summary", 14, summaryStart);

    autoTable(doc, {
      startY: summaryStart + 4,
      body: [
        ["Subtotal", `₹ ${subtotal.toLocaleString()}`],
        [`GST (${bike.gstPercent}%)`, `₹ ${gst.toFixed(2)}`],
        ["Total Amount", `₹ ${total.toLocaleString()}`],
      ],
      theme: "plain",
      styles: { fontSize: 11 },
      columnStyles: {
        0: { fontStyle: "bold" },
        1: { halign: "right" },
      },
    });

    // --- FOOTER ---
    doc.setFontSize(10);
    doc.text("Thank you for your purchase!", 14, 280);
    doc.text("This is a system-generated invoice.", 14, 285);

    // Save the PDF
    doc.save("bike-invoice.pdf");
  };

  return (
    <button
      onClick={generateInvoicePDF}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Download Bike Invoice PDF
    </button>
  );
};

export default PdfDownload;