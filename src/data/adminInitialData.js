// Initial Seed Data for Ebenora Creations Admin Dashboard
export const INITIAL_ADMIN_DATA = {
  stats: {
    callsDone: 28,
    leadsCreated: 14,
    totalRevenueTracked: '₹4,85,000',
    pendingPaymentsTracked: '₹95,000'
  },
  projects: [
    {
      id: 'p6',
      num: '01',
      name: 'Brown Lights Media',
      client: 'Brown Lights Media Kozhikode',
      url: 'https://rohaneldhose2008.github.io/v2kozikode/',
      localhostUrl: 'http://localhost:5174',
      activeUrlType: 'live',
      category: 'Creative Production & Studio',
      isInvitation: false,
      status: 'under_creation',
      statusNote: 'Hero 3D animations and client gallery under active development',
      progress: 65,
      seoStatus: 'pending',
      seoChecklist: {
        metaTags: true,
        sitemapSubmitted: false,
        googleSearchConsole: false,
        speedOptimization: true,
        backlinks: false
      },
      payment: {
        status: 'advance_received',
        totalAmount: '45000',
        advanceAmount: '25000',
        balanceAmount: '20000',
        currency: '₹',
        lastUpdated: '2026-09-12'
      }
    },
    {
      id: 'p7',
      num: '02',
      name: 'Naomika Designs Studio',
      client: 'Naomika Designs',
      url: 'https://rohaneldhose2008.github.io/naomika_designs_studio/index.html',
      localhostUrl: 'http://localhost:5175',
      activeUrlType: 'live',
      category: 'Fashion & Boutique Experience',
      isInvitation: false,
      status: 'under_creation',
      statusNote: 'Product catalog grids and checkout preview being built',
      progress: 55,
      seoStatus: 'in_progress',
      seoChecklist: {
        metaTags: true,
        sitemapSubmitted: false,
        googleSearchConsole: false,
        speedOptimization: false,
        backlinks: false
      },
      payment: {
        status: 'advance_received',
        totalAmount: '50000',
        advanceAmount: '30000',
        balanceAmount: '20000',
        currency: '₹',
        lastUpdated: '2026-09-10'
      }
    },
    {
      id: 'p1',
      num: '03',
      name: 'Double Layer Photography',
      client: 'Tony & DLP Team',
      url: 'https://doublelayerphotography.com/',
      localhostUrl: '',
      activeUrlType: 'live',
      category: 'Studio & Photography Portfolio',
      isInvitation: false,
      status: 'completed',
      statusNote: 'Live on custom domain. Ongoing maintenance.',
      progress: 100,
      seoStatus: 'in_progress',
      seoChecklist: {
        metaTags: true,
        sitemapSubmitted: true,
        googleSearchConsole: true,
        speedOptimization: true,
        backlinks: true
      },
      payment: {
        status: 'fully_paid',
        totalAmount: '65000',
        advanceAmount: '65000',
        balanceAmount: '0',
        currency: '₹',
        lastUpdated: '2026-08-25'
      }
    },
    {
      id: 'p2',
      num: '04',
      name: 'Trendy Pearls Australia',
      client: 'Trendy Pearls AU',
      url: 'https://trendypearls.au/',
      localhostUrl: '',
      activeUrlType: 'live',
      category: 'Luxury Jewellery E-Commerce',
      isInvitation: false,
      status: 'completed',
      statusNote: 'Live international e-commerce. High conversion rates.',
      progress: 100,
      seoStatus: 'completed',
      seoChecklist: {
        metaTags: true,
        sitemapSubmitted: true,
        googleSearchConsole: true,
        speedOptimization: true,
        backlinks: true
      },
      payment: {
        status: 'fully_paid',
        totalAmount: '95000',
        advanceAmount: '95000',
        balanceAmount: '0',
        currency: '₹',
        lastUpdated: '2026-08-15'
      }
    },
    {
      id: 'p5',
      num: '05',
      name: 'Pictura Australia',
      client: 'Pictura Australia Studio',
      url: 'https://pictura.au/',
      localhostUrl: '',
      activeUrlType: 'live',
      category: 'Creative Photography Web',
      isInvitation: false,
      status: 'completed',
      statusNote: 'Live visual experience website running smooth.',
      progress: 100,
      seoStatus: 'completed',
      seoChecklist: {
        metaTags: true,
        sitemapSubmitted: true,
        googleSearchConsole: true,
        speedOptimization: true,
        backlinks: false
      },
      payment: {
        status: 'fully_paid',
        totalAmount: '70000',
        advanceAmount: '70000',
        balanceAmount: '0',
        currency: '₹',
        lastUpdated: '2026-09-02'
      }
    },
    {
      id: 'p4',
      num: '06',
      name: 'Naomika Design Studio Browser',
      client: 'Naomika Studio',
      url: 'https://rohaneldhose2008.github.io/naomikadesignstudio/',
      localhostUrl: '',
      activeUrlType: 'live',
      category: 'Digital Brochure',
      isInvitation: false,
      status: 'completed',
      statusNote: 'Interactive digital brochure live for showroom clients.',
      progress: 100,
      seoStatus: 'completed',
      seoChecklist: {
        metaTags: true,
        sitemapSubmitted: true,
        googleSearchConsole: false,
        speedOptimization: true,
        backlinks: false
      },
      payment: {
        status: 'fully_paid',
        totalAmount: '35000',
        advanceAmount: '35000',
        balanceAmount: '0',
        currency: '₹',
        lastUpdated: '2026-08-20'
      }
    },
    {
      id: 'p3',
      num: '07',
      name: 'Ebin & Alana Wedding Experience',
      client: 'Ebin & Alana',
      url: 'https://rohaneldhose2008.github.io/ebin-alana/',
      localhostUrl: '',
      activeUrlType: 'live',
      category: 'Digital Wedding Invitation',
      isInvitation: true,
      status: 'completed',
      statusNote: 'Delivered luxury digital invitation with RSVP functionality.',
      progress: 100,
      seoStatus: 'na',
      seoChecklist: {},
      payment: {
        status: 'fully_paid',
        totalAmount: '25000',
        advanceAmount: '25000',
        balanceAmount: '0',
        currency: '₹',
        lastUpdated: '2026-07-28'
      }
    },
    {
      id: 'p8',
      num: '08',
      name: 'Baptism of David Mathuis',
      client: 'Mathuis Family',
      url: 'https://baptismofdavidmathuis.netlify.app/',
      localhostUrl: '',
      activeUrlType: 'live',
      category: 'Digital Web Invitation',
      isInvitation: true,
      status: 'completed',
      statusNote: 'Live event celebration portal delivered.',
      progress: 100,
      seoStatus: 'na',
      seoChecklist: {},
      payment: {
        status: 'fully_paid',
        totalAmount: '20000',
        advanceAmount: '20000',
        balanceAmount: '0',
        currency: '₹',
        lastUpdated: '2026-08-10'
      }
    },
    {
      id: 'p9',
      num: '09',
      name: 'Franklin & Sarah Celebration',
      client: 'Franklin & Sarah',
      url: 'https://nexoracreation.github.io/Franklin-Sarah/',
      localhostUrl: '',
      activeUrlType: 'live',
      category: 'Digital Web Invitation',
      isInvitation: true,
      status: 'completed',
      statusNote: 'Celebration web invitation live for guest list.',
      progress: 100,
      seoStatus: 'na',
      seoChecklist: {},
      payment: {
        status: 'fully_paid',
        totalAmount: '22000',
        advanceAmount: '22000',
        balanceAmount: '0',
        currency: '₹',
        lastUpdated: '2026-08-05'
      }
    }
  ],
  graphicTasks: [
    {
      id: 'g1',
      title: 'Full Vector Brand Identity & Logo Suite',
      client: 'Brown Lights Media',
      priority: 'high',
      deadline: '2026-09-20',
      price: '18000',
      status: 'pending',
      description: 'Design dark-aesthetic neon vector logo, typography rules, social badges, and watermark stamps.'
    },
    {
      id: 'g2',
      title: 'Instagram Carousel Ads & Launch Banners',
      client: 'Trendy Pearls Australia',
      priority: 'medium',
      deadline: '2026-09-22',
      price: '12000',
      status: 'pending',
      description: 'Set of 6 luxury pearl collection carousel slides for Australian spring campaign.'
    },
    {
      id: 'g3',
      title: 'Fashion Lookbook Editorial Layouts',
      client: 'Naomika Designs Studio',
      priority: 'high',
      deadline: '2026-09-25',
      price: '22000',
      status: 'in_progress',
      description: 'High-res magazine-style printable & digital lookbook for upcoming festival drop.'
    },
    {
      id: 'g4',
      title: '3D Metallic Hero Badge & Studio Watermark',
      client: 'Double Layer Photography',
      priority: 'low',
      deadline: '2026-09-30',
      price: '9000',
      status: 'completed',
      description: 'Gold & chrome 3D watermark asset for client photo export workflows.'
    }
  ],
  callLogs: [
    {
      id: 'c1',
      clientName: 'Rahul (Studio 9 Media)',
      phone: '+91 98471 23456',
      date: '2026-09-14',
      notes: 'Discussed dynamic video portfolio website. Client wants dark theme similar to Brown Lights Media.',
      outcome: 'Interested',
      nextFollowUp: '2026-09-17'
    },
    {
      id: 'c2',
      clientName: 'Dr. Anita George',
      phone: '+91 94460 78910',
      date: '2026-09-13',
      notes: 'Clinic website inquiry with appointment booking button. Quoted standard web development package.',
      outcome: 'Proposal Sent',
      nextFollowUp: '2026-09-16'
    },
    {
      id: 'c3',
      clientName: 'Alex Melbourne',
      phone: '+61 412 345 678',
      date: '2026-09-12',
      notes: 'Inquiry for luxury ecommerce redesign. Sent Trendy Pearls link as case study.',
      outcome: 'Follow-up Needed',
      nextFollowUp: '2026-09-18'
    }
  ],
  leads: [
    {
      id: 'l1',
      name: 'Studio 9 Media (Rahul)',
      phone: '+91 98471 23456',
      serviceRequested: '3D Web Development',
      status: 'hot',
      date: '2026-09-14',
      estimatedBudget: '40000'
    },
    {
      id: 'l2',
      name: 'Apex Fitness Club',
      phone: '+91 80891 22334',
      serviceRequested: 'Branding & Website',
      status: 'proposal_sent',
      date: '2026-09-11',
      estimatedBudget: '55000'
    },
    {
      id: 'l3',
      name: 'Serena Jewellers',
      phone: '+91 97441 55667',
      serviceRequested: 'E-commerce Catalog',
      status: 'contacted',
      date: '2026-09-08',
      estimatedBudget: '75000'
    }
  ]
};
