// Local Database Engine for Ebenora Creations Works & Auto-ID Generator
// Stored privately inside browser localStorage with export/import backup capabilities.

export const WORK_CATEGORIES = [
  {
    key: 'web_development',
    prefix: 'EC-WEB',
    code: 'WD',
    label: 'Website Development',
    subtitle: 'W E B S I T E   D E V E L O P M E N T',
    color: '#F472B6',
    defaultDeliverables: ['Responsive High-Performance Website', 'Interactive 3D Elements', 'Global SEO & Core Vitals']
  },
  {
    key: 'graphic_design',
    prefix: 'EC-GD',
    code: 'GD',
    label: 'Graphic Design',
    subtitle: 'G R A P H I C   D E S I G N',
    color: '#D9B15F',
    defaultDeliverables: ['Luxury Brand Creative', 'Print-Ready Vector Files', 'Social Media Carousel']
  },
  {
    key: 'video_editing',
    prefix: 'EC-VE',
    code: 'VE',
    label: 'Video Editing',
    subtitle: 'V I D E O   E D I T I N G',
    color: '#60A5FA',
    defaultDeliverables: ['4K Cinematic Commercial', 'Vertical Reels / Shorts Cut', 'Sound Design & Color Grade']
  },
  {
    key: 'marketing',
    prefix: 'EC-MKT',
    code: 'MKT',
    label: 'Marketing & Social Media',
    subtitle: 'M A R K E T I N G   &   S O C I A L',
    color: '#34D399',
    defaultDeliverables: ['Social Media Content Strategy', 'Ad Creatives Suite', 'Audience Growth Campaign']
  },
  {
    key: 'branding',
    prefix: 'EC-BR',
    code: 'BR',
    label: 'Luxury Branding',
    subtitle: 'L U X U R Y   B R A N D I N G',
    color: '#FBBF24',
    defaultDeliverables: ['Primary & Secondary Logo Suites', 'Brand Guidelines Book (PDF)', 'Typography & Color Palette']
  },
  {
    key: 'invitations',
    prefix: 'EC-INV',
    code: 'INV',
    label: 'Digital Invitations',
    subtitle: 'D I G I T A L   I N V I T A T I O N',
    color: '#A78BFA',
    defaultDeliverables: ['Interactive Event Invitation Website', 'RSVP Tracking Form', 'Event Timeline & Navigation Map']
  },
  {
    key: 'custom_solutions',
    prefix: 'EC-CS',
    code: 'CS',
    label: 'Custom Solutions',
    subtitle: 'C U S T O M   S O L U T I O N S',
    color: '#38BDF8',
    defaultDeliverables: ['Custom Web Architecture', 'API Integrations & Automation', 'Technical Documentation']
  }
];

export const STORAGE_KEY_WORKS = 'ebenora_work_records_v1';

// Seed projects from Ebenora's existing portfolio so the database starts rich
export const INITIAL_SEED_WORKS = [
  {
    id: 'EC/WD/2026/016',
    invoiceNo: 'EC/WD/2026/016',
    docType: 'INVOICE',
    category: 'web_development',
    categoryCode: 'WD',
    subtitle: 'W E B S I T E   D E V E L O P M E N T',
    title: 'Website Development',
    projectType: 'Business Website',
    projectStatus: 'Ready to launch',
    clientName: 'Brownlights Media',
    clientCompany: 'BROWNLIGHTS MEDIA',
    clientLocation: 'Kozhikode Kerala',
    dateCreated: '15 Oct 2026',
    dueDate: '—',
    currency: '₹',
    contact: {
      email: 'ebenoracretion@gmail.com',
      phone: '9037352739',
      website: 'www.ebenoracreations.com',
      location: 'Kerala, India'
    },
    lineItems: [
      {
        id: 1,
        no: 1,
        title: 'Original Quotation',
        subtitle: '(Initial discussion and proposed cost)',
        amount: 12000,
        type: 'charge'
      },
      {
        id: 2,
        no: 2,
        title: 'Revised Development Cost',
        subtitle: '(First two website versions failed – design and functionality issues)',
        amount: 15000,
        type: 'charge'
      },
      {
        id: 3,
        no: 3,
        title: 'Additional Page',
        subtitle: '(As per client’s request)',
        amount: 2500,
        type: 'charge'
      },
      {
        id: 4,
        no: 4,
        title: 'Total Project Valuation',
        subtitle: '(Original quote + revised cost + additional page)',
        amount: 17500,
        type: 'valuation'
      },
      {
        id: 5,
        no: 5,
        title: 'Special Discount',
        subtitle: '(Token of appreciation)',
        amount: -1500,
        type: 'discount'
      }
    ],
    finalCost: 16000,
    advancePaidItem: {
      no: 6,
      title: 'Advance Already Paid',
      subtitle: '(Received from client)',
      amount: -6000
    },
    balanceDue: 10000,
    specialOffer: {
      enabled: true,
      title: 'SPECIAL OFFER — A TOKEN OF APPRECIATION',
      description: 'As a token of appreciation, we are providing you with a 3-Month SEO Support Plan (worth ₹3,000) completely free.'
    },
    deliverables: [
      'Original Quotation (₹12,000)',
      'Revised Development Architecture (₹15,000)',
      'Additional Custom Page (₹2,500)',
      'Special Appreciation Discount (-₹1,500)',
      '3-Month Free SEO Support Plan'
    ],
    specs: {
      resolution: 'Desktop & Mobile Viewports',
      format: 'Modern Web Stack',
      turnaround: 'Ready to launch'
    },
    financials: {
      currency: '₹',
      totalAmount: '16000',
      advancePaid: '6000',
      balanceDue: '10000',
      paymentStatus: 'Advance Received'
    },
    notes: 'Official invoice for Brownlights Media website development project.',
    qrPayload: 'https://ebenoracreations.com/'
  },
  {
    id: 'EC-WEB-001',
    category: 'web_development',
    title: 'Double Layer Photography Studio Experience',
    clientName: 'Double Layer Studio',
    clientCompany: 'Double Layer Media',
    dateCreated: '2026-08-10',
    deliveryDate: '2026-08-25',
    deliverables: [
      'Dark Luxury Photography Portfolio Website',
      'High-Speed Image Gallery with Lazy Loading',
      'Direct WhatsApp Booking Integration',
      'Mobile-First Responsive Layout'
    ],
    specs: {
      resolution: 'Desktop & Mobile Viewports',
      format: 'React / Tailwind / Production Build',
      turnaround: '15 Days'
    },
    financials: {
      currency: '₹',
      totalAmount: '45000',
      advancePaid: '45000',
      balanceDue: '0',
      paymentStatus: 'Paid'
    },
    notes: 'Official portfolio launch for Double Layer Studio. Full copyright transferred to client.',
    qrPayload: 'https://doublelayerphotography.com/'
  },
  {
    id: 'EC-WEB-002',
    category: 'web_development',
    title: 'Trendy Pearls Australia Luxury E-Commerce',
    clientName: 'Trendy Pearls Australia',
    clientCompany: 'Trendy Pearls Pty Ltd',
    dateCreated: '2026-08-15',
    deliveryDate: '2026-09-02',
    deliverables: [
      'High-End Jewelry Showcase & Catalog',
      'International Currency Support',
      'Luxury Gold Aesthetic Architecture',
      'Speed Optimization (Sub-1s Load Time)'
    ],
    specs: {
      resolution: 'Global Retina Displays',
      format: 'Modern E-Commerce Web Stack',
      turnaround: '18 Days'
    },
    financials: {
      currency: '$',
      totalAmount: '1200',
      advancePaid: '1200',
      balanceDue: '0',
      paymentStatus: 'Paid'
    },
    notes: 'International deployment for Australian luxury market.',
    qrPayload: 'https://trendypearls.au/'
  },
  {
    id: 'EC-INV-001',
    category: 'invitations',
    title: 'Ebin & Alana Digital Wedding Celebration',
    clientName: 'Ebin & Alana',
    clientCompany: 'Wedding Portal',
    dateCreated: '2026-08-20',
    deliveryDate: '2026-08-30',
    deliverables: [
      'Interactive Love Story Timeline',
      'RSVP Attendance & Guest Count System',
      'Google Maps Church & Reception Navigation',
      'Background Audio Score & Photo Vault'
    ],
    specs: {
      resolution: 'Optimized for Mobile Sharing (WhatsApp)',
      format: 'Bespoke Single Page Web Experience',
      turnaround: '10 Days'
    },
    financials: {
      currency: '₹',
      totalAmount: '20000',
      advancePaid: '20000',
      balanceDue: '0',
      paymentStatus: 'Paid'
    },
    notes: 'Celebrated digital invitation with custom countdown and audio sync.',
    qrPayload: 'https://rohaneldhose2008.github.io/ebin-alana/'
  },
  {
    id: 'EC-GD-001',
    category: 'graphic_design',
    title: 'Naomika Digital Brochure & Fashion Lookbook',
    clientName: 'Naomika Designs',
    clientCompany: 'Naomika Fashion Studio',
    dateCreated: '2026-08-28',
    deliveryDate: '2026-09-05',
    deliverables: [
      'Editorial Fashion Lookbook (16 Pages)',
      'Vector Print Ready Catalog (300 DPI CMYK)',
      'Digital Interactive Flipbook Assets',
      'Instagram Story Campaign Layouts'
    ],
    specs: {
      resolution: '300 DPI CMYK / 4K RGB',
      format: 'Vector PDF / Adobe Illustrator / PNG',
      turnaround: '8 Days'
    },
    financials: {
      currency: '₹',
      totalAmount: '28000',
      advancePaid: '28000',
      balanceDue: '0',
      paymentStatus: 'Paid'
    },
    notes: 'High-fashion autumn catalog design and digital distribution format.',
    qrPayload: 'https://rohaneldhose2008.github.io/naomikadesignstudio/'
  },
  {
    id: 'EC-VE-001',
    category: 'video_editing',
    title: 'Brown Lights Media Commercial Brand Reel',
    clientName: 'Brown Lights Media',
    clientCompany: 'Brown Lights Studio Kozhikode',
    dateCreated: '2026-09-02',
    deliveryDate: '2026-09-10',
    deliverables: [
      '60-Second 4K Commercial Brand Showcase',
      '3x 9:16 Vertical Instagram Reels with Captions',
      'Sound Design, Audio Mastering & Cinematic LUTs',
      'Custom Title Animations & Kinetic Typography'
    ],
    specs: {
      resolution: '3840x2160 UHD 60fps',
      format: 'ProRes 422 & H.264 MP4',
      turnaround: '7 Days'
    },
    financials: {
      currency: '₹',
      totalAmount: '35000',
      advancePaid: '25000',
      balanceDue: '10000',
      paymentStatus: 'Advance Received'
    },
    notes: 'Commercial promo reel edited with bespoke motion graphics.',
    qrPayload: 'https://ebenoracreations.com/'
  }
];

// Helper: Get all works from localStorage or fallback to initial seed
export function getStoredWorks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WORKS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed reading work database from localStorage:', err);
  }
  // If empty, save seed and return
  saveStoredWorks(INITIAL_SEED_WORKS);
  return INITIAL_SEED_WORKS;
}

// Helper: Save all works array to localStorage
export function saveStoredWorks(works) {
  try {
    localStorage.setItem(STORAGE_KEY_WORKS, JSON.stringify(works));
  } catch (err) {
    console.error('Failed persisting works to localStorage:', err);
  }
}

// Auto-Increment Work ID Calculation based on Category Prefix
export function getNextWorkId(categoryKey, worksList = null) {
  const category = WORK_CATEGORIES.find((c) => c.key === categoryKey) || WORK_CATEGORIES[0];
  const prefix = category.prefix; // e.g. "EC-GD"

  const works = worksList || getStoredWorks();
  const matchingPrefix = `${prefix}-`;

  let maxNum = 0;

  works.forEach((w) => {
    if (w && w.id && typeof w.id === 'string' && w.id.startsWith(matchingPrefix)) {
      const numPart = w.id.substring(matchingPrefix.length);
      const parsed = parseInt(numPart, 10);
      if (!isNaN(parsed) && parsed > maxNum) {
        maxNum = parsed;
      }
    }
  });

  const nextNum = maxNum + 1;
  const padded = String(nextNum).padStart(3, '0');
  return `${prefix}-${padded}`;
}

// Auto-Increment Official Invoice / Quotation Number (e.g. EC/WD/2026/016 or EC-QT/WD/2026/016)
export function getNextInvoiceNumber(categoryKey, docType = 'INVOICE', worksList = null) {
  const category = WORK_CATEGORIES.find((c) => c.key === categoryKey) || WORK_CATEGORIES[0];
  const code = category.code || 'WD';
  const year = new Date().getFullYear();
  const prefix = docType === 'QUOTATION' ? `EC-QT/${code}/${year}/` : `EC/${code}/${year}/`;
  const works = worksList || getStoredWorks();

  let maxNum = 15; // default benchmark based on sample EC/WD/2026/016

  works.forEach((w) => {
    const rawId = w.invoiceNo || w.id;
    if (rawId && typeof rawId === 'string') {
      const match = rawId.match(/EC(?:\-QT)?\/[A-Z]+\/\d{4}\/(\d+)/i);
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxNum) {
          maxNum = num;
        }
      }
    }
  });

  const nextNum = maxNum + 1;
  const padded = String(nextNum).padStart(3, '0');
  return `${prefix}${padded}`;
}

// Helper: Insert or Update single work record
export function saveWorkRecord(workRecord) {
  const works = getStoredWorks();
  const index = works.findIndex((w) => w.id === workRecord.id);

  let updated;
  if (index >= 0) {
    updated = [...works];
    updated[index] = { ...workRecord, lastModified: new Date().toISOString() };
  } else {
    updated = [
      { ...workRecord, dateCreated: workRecord.dateCreated || new Date().toISOString().split('T')[0] },
      ...works
    ];
  }

  saveStoredWorks(updated);
  return updated;
}

// Helper: Delete single work record
export function deleteWorkRecord(workId) {
  const works = getStoredWorks();
  const filtered = works.filter((w) => w.id !== workId);
  saveStoredWorks(filtered);
  return filtered;
}

// Helper: Get Work Summary Statistics
export function getWorkStatistics(worksList = null) {
  const works = worksList || getStoredWorks();
  const totalWorks = works.length;

  const categoryBreakdown = {};
  WORK_CATEGORIES.forEach((cat) => {
    categoryBreakdown[cat.key] = 0;
  });

  let totalRevenueINR = 0;
  let totalRevenueUSD = 0;

  works.forEach((w) => {
    if (w.category && categoryBreakdown[w.category] !== undefined) {
      categoryBreakdown[w.category] += 1;
    }
    const amt = parseFloat(w.financials?.totalAmount || '0') || 0;
    if (w.financials?.currency === '$') {
      totalRevenueUSD += amt;
    } else {
      totalRevenueINR += amt;
    }
  });

  return {
    totalWorks,
    categoryBreakdown,
    totalRevenueINR,
    totalRevenueUSD
  };
}

// Helper: Export backup as downloadable JSON
export function exportWorksToJSON(worksList = null) {
  const works = worksList || getStoredWorks();
  const exportData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    author: 'Ebenora Creations Studio Engine',
    totalRecords: works.length,
    works
  };

  const jsonStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(exportData, null, 2))}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonStr);
  downloadAnchor.setAttribute('download', `ebenora-works-database-${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Helper: Import backup from JSON string or object
export function importWorksFromJSON(imported) {
  try {
    let data = imported;
    if (typeof imported === 'string') {
      data = JSON.parse(imported);
    }
    if (data && Array.isArray(data.works)) {
      saveStoredWorks(data.works);
      return { success: true, count: data.works.length };
    }
    if (Array.isArray(data)) {
      saveStoredWorks(data);
      return { success: true, count: data.length };
    }
    return { success: false, error: 'Unrecognized JSON structure.' };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
