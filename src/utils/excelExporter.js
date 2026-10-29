import * as XLSX from 'xlsx';

/**
 * Export a single Invoice / Quotation as a beautifully formatted .xlsx file
 */
export function exportInvoiceToExcel(invoice) {
  if (!invoice) return;

  const isQuote = (invoice.docType || 'INVOICE').toUpperCase() === 'QUOTATION';
  const currencySymbol = invoice.currency || '₹';
  const docTitle = isQuote ? 'QUOTATION' : 'INVOICE';

  // 1. Prepare Structured Data Rows for Excel
  const rows = [
    ['EBENORA CREATIONS — OFFICIAL ' + docTitle],
    ['DESIGN. DEVELOP. INSPIRE. — YOU THINK. WE CREATE.'],
    ['Email: ' + (invoice.contact?.email || 'ebenoracretion@gmail.com'), 'Phone: ' + (invoice.contact?.phone || '9037352739'), 'Web: ' + (invoice.contact?.website || 'www.ebenoracreations.com')],
    ['Location: ' + (invoice.contact?.location || 'Kerala, India')],
    [], // empty row
    ['DOCUMENT METADATA', '', 'BILL TO', '', 'PROJECT DETAILS'],
    [
      (isQuote ? 'Quotation No: ' : 'Invoice No: ') + (invoice.invoiceNo || invoice.id || 'N/A'),
      '',
      'Company: ' + (invoice.clientCompany || 'N/A'),
      '',
      'Project: ' + (invoice.projectDetails?.project || invoice.title || 'N/A')
    ],
    [
      'Issue Date: ' + (invoice.dateCreated || 'N/A'),
      '',
      'Contact: ' + (invoice.clientName || 'N/A'),
      '',
      'Type: ' + (invoice.projectDetails?.type || 'N/A')
    ],
    [
      (isQuote ? 'Valid Until: ' : 'Due Date: ') + (invoice.dueDate || '—'),
      '',
      'Location: ' + (invoice.clientLocation || 'N/A'),
      '',
      'Status: ' + (invoice.projectDetails?.status || 'N/A')
    ],
    [], // empty row
    ['VALUATION & LINE ITEMS BREAKDOWN'],
    ['No.', 'Description Title', 'Subtitle / Notes', 'Amount (' + currencySymbol + ')']
  ];

  // 2. Add Line Items
  const lineItems = invoice.lineItems || [];
  lineItems.forEach((item, idx) => {
    rows.push([
      item.no || idx + 1,
      item.title || '',
      item.subtitle || '',
      item.amount || 0
    ]);
  });

  // 3. Add Financial Totals
  rows.push([]);
  rows.push(['', '', 'Final Project Cost (After discount):', Number(invoice.finalCost || 0)]);
  if (invoice.advancePaidItem) {
    rows.push(['', '', invoice.advancePaidItem.title || 'Advance Already Paid:', Number(invoice.advancePaidItem.amount || 0)]);
  }
  rows.push(['', '', isQuote ? 'Net Estimate Balance:' : 'BALANCE DUE (Amount Remaining):', Number(invoice.balanceDue || 0)]);

  // 4. Special Offer
  if (invoice.specialOffer?.enabled !== false) {
    rows.push([]);
    rows.push(['SPECIAL APPRECIATION OFFER']);
    rows.push([invoice.specialOffer?.title || 'SPECIAL OFFER']);
    rows.push([invoice.specialOffer?.description || '']);
  }

  rows.push([]);
  rows.push(['Thank you for your trust and support. — Team Ebenora Creations']);
  rows.push(["LET'S BUILD SOMETHING GREAT TOGETHER."]);

  // 5. Generate Worksheet & Workbook
  const worksheet = XLSX.utils.aoa_to_sheet(rows);

  // Set nice column widths
  worksheet['!cols'] = [
    { wch: 10 },
    { wch: 36 },
    { wch: 48 },
    { wch: 20 },
    { wch: 25 }
  ];

  const workbook = XLSX.utils.book_new();
  const safeTitle = (invoice.invoiceNo || 'Invoice').replace(/[^a-zA-Z0-9-_]/g, '_');
  XLSX.utils.book_append_sheet(workbook, worksheet, safeTitle.substring(0, 31));

  // 6. Trigger Download
  const filename = `${safeTitle}.xlsx`;
  XLSX.writeFile(workbook, filename);
}

/**
 * Export Master Accounting Ledger of All Invoices / Quotes as a single Excel workbook
 */
export function exportAllInvoicesLedgerToExcel(worksList = []) {
  if (!worksList || worksList.length === 0) return;

  const headers = [
    'Document ID',
    'Doc Type',
    'Category',
    'Client Company',
    'Client Name',
    'Client Location',
    'Project Title',
    'Date Issued',
    'Due Date',
    'Currency',
    'Final Cost / Total',
    'Advance Paid',
    'Balance Due',
    'Payment Status',
    'Deliverables / Items Count',
    'Notes'
  ];

  const dataRows = worksList.map((w) => {
    const isInv = !!(w.lineItems || w.invoiceNo);
    const finalAmount = isInv
      ? Number(w.finalCost || 0)
      : Number(w.financials?.totalAmount || 0);

    const advancePaid = isInv
      ? Math.abs(Number(w.advancePaidItem?.amount || 0))
      : Number(w.financials?.advancePaid || 0);

    const balanceDue = isInv
      ? Number(w.balanceDue || 0)
      : Number(w.financials?.balanceDue || 0);

    return [
      w.invoiceNo || w.id || 'N/A',
      w.docType || (isInv ? 'INVOICE' : 'WORK_CARD'),
      w.category || 'N/A',
      w.clientCompany || 'N/A',
      w.clientName || 'N/A',
      w.clientLocation || 'N/A',
      w.title || 'N/A',
      w.dateCreated || 'N/A',
      w.dueDate || w.deliveryDate || '—',
      w.currency || w.financials?.currency || '₹',
      finalAmount,
      advancePaid,
      balanceDue,
      w.financials?.paymentStatus || (balanceDue === 0 ? 'Paid' : 'Pending'),
      w.lineItems ? w.lineItems.length : (w.deliverables ? w.deliverables.length : 0),
      w.notes || ''
    ];
  });

  const fullSheet = [
    ['EBENORA CREATIONS — MASTER INVOICES & CLIENT WORKS LEDGER'],
    ['Generated on: ' + new Date().toLocaleString()],
    [],
    headers,
    ...dataRows
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(fullSheet);

  worksheet['!cols'] = [
    { wch: 18 },
    { wch: 12 },
    { wch: 18 },
    { wch: 25 },
    { wch: 20 },
    { wch: 18 },
    { wch: 30 },
    { wch: 14 },
    { wch: 14 },
    { wch: 8 },
    { wch: 16 },
    { wch: 16 },
    { wch: 16 },
    { wch: 16 },
    { wch: 12 },
    { wch: 35 }
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Invoices Ledger');

  const filename = `ebenora-invoices-master-ledger-${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(workbook, filename);
}
