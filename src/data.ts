// Organization Data
export type timestamp = {
  _seconds: number;
  _nanoseconds: number;
};

type Organization = {
  id: string;
  owner_uid: string;
  created_at: timestamp;
  updated_at: timestamp;
  slug: string;
  is_active: boolean;
  name: string;
  role: string;
};

export const organizations: Organization[] = [
  {
    id: "Sb9JUEJHd7ZjmhYLYBrh",
    owner_uid: "uybOXAPhh1NFtuUSExurEaZxBh92",
    created_at: {
      _seconds: 1773291944,
      _nanoseconds: 967000000,
    },
    updated_at: {
      _seconds: 1773291944,
      _nanoseconds: 967000000,
    },
    slug: "acme-corp",
    is_active: true,
    name: "Test Corp",
    role: "owner",
  },
  {
    id: "ZqxylZwSJdq4u08LwZbV",
    name: "GrowEasy AI",
    slug: "groweasy-ai-ZqxylZwSJdq4u08LwZbV",
    owner_uid: "uybOXAPhh1NFtuUSExurEaZxBh92",
    is_active: true,
    created_at: {
      _seconds: 1775192080,
      _nanoseconds: 291000000,
    },
    updated_at: {
      _seconds: 1775192080,
      _nanoseconds: 291000000,
    },
    role: "owner",
  },
  {
    id: "mUvc2OtNbJ9bo1K2hyVu",
    slug: "designeasy-ai-mUvc2OtNbJ9bo1K2hyVu",
    owner_uid: "uybOXAPhh1NFtuUSExurEaZxBh92",
    is_active: true,
    created_at: {
      _seconds: 1773649278,
      _nanoseconds: 678000000,
    },
    updated_at: {
      _seconds: 1773649278,
      _nanoseconds: 678000000,
    },
    name: "VK Test",
    role: "owner",
  },
  {
    id: "nkOUqTl7Cwrq7mJnkMSg",
    name: "Sales AI",
    slug: "sales-ai-nkOUqTl7Cwrq7mJnkMSg",
    owner_uid: "uybOXAPhh1NFtuUSExurEaZxBh92",
    is_active: true,
    created_at: {
      _seconds: 1778567765,
      _nanoseconds: 339000000,
    },
    updated_at: {
      _seconds: 1778567765,
      _nanoseconds: 339000000,
    },
    role: "owner",
  },
];

// Leads data

export type Source = {
  type: string;
};

export type Location = Record<string, unknown>;

export type CustomFields = Record<string, unknown>;

export type CRM = {
  status: string | null;
  last_call_done_at?: timestamp;
  last_contacted_at?: timestamp;
};

export type Lead = {
  org_id: string;
  source: Source;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  country_code?: string;
  mobile_without_country_code?: string;
  company: string;
  location: Location;
  custom_fields: CustomFields;
  created_at: timestamp;
  updated_at: timestamp;
  id: string;
  owner_uid: string;
  crm: CRM;
};

export const leads: Lead[] = [
  {
    org_id: "ZqxylZwSJdq4u08LwZbV",
    source: {
      type: "WEBSITE",
    },
    name: "Ayan Shah",
    first_name: "Ayan",
    last_name: "Shah",
    email: "ayanshah10@gmail.com",
    mobile: "+917071077777",
    country_code: "+91",
    mobile_without_country_code: "7071077777",
    company: "Cartoon md",
    location: {},
    custom_fields: {
      acquisition_source: "web",
    },
    created_at: {
      _seconds: 1779139073,
      _nanoseconds: 350000000,
    },
    updated_at: {
      _seconds: 1779139073,
      _nanoseconds: 350000000,
    },
    id: "Uq4PkdHh5d5NjLhxyvS5",
    owner_uid: "HZnjtnP2t7OtBOorXx2gLyTzLBy2",
    crm: {
      status: "DONE",
      last_contacted_at: {
        _seconds: 1779139075,
        _nanoseconds: 415000000,
      },
    },
  },
  {
    org_id: "ZqxylZwSJdq4u08LwZbV",
    source: {
      type: "WEBSITE",
    },
    name: "Mohd Zaid",
    first_name: "Mohd",
    last_name: "Zaid",
    email: "mohdzaid70118@gmail.com",
    mobile: "+917011888888",
    country_code: "+91",
    mobile_without_country_code: "7011888888",
    company: "Video ",
    location: {},
    custom_fields: {
      acquisition_source: "web",
    },
    created_at: {
      _seconds: 1779130933,
      _nanoseconds: 451000000,
    },
    updated_at: {
      _seconds: 1779130933,
      _nanoseconds: 451000000,
    },
    id: "sORaB0SUbUJIBjZxndDa",
    owner_uid: "WabJSip2olfBLRcWYOgVaFeaMeo1",
    crm: {
      status: null,
      last_contacted_at: {
        _seconds: 1779130935,
        _nanoseconds: 197000000,
      },
    },
  },
  {
    org_id: "ZqxylZwSJdq4u08LwZbV",
    source: {
      type: "WEBHOOK",
    },
    name: "arushi 22013",
    first_name: "arushi",
    last_name: "22mba013",
    email: "arushi22013@ncuindia.edu",
    mobile: "+9100",
    company: "Nazztec",
    location: {},
    custom_fields: {
      acquisition_source: "web",
    },
    created_at: {
      _seconds: 1779118654,
      _nanoseconds: 980000000,
    },
    updated_at: {
      _seconds: 1779118654,
      _nanoseconds: 980000000,
    },
    crm: {
      status: null,
    },
    id: "pbDpswyMvawh4CDqwxZC",
    owner_uid: "HZnjtnP2t7OtBOorXx2gLyTzLBy2",
  },
];

// Single Lead Data

type ActivityType = "PHONE_CALL" | "CUSTOM" | "WA_MESSAGE" | "NEW_LEAD";

type ActivityDirection = "OUTBOUND" | "INBOUND";

type ActivityMetadata = {
  campaign_id?: string;
  call_id?: string;
  content?: string;
};

export type SingleLead = {
  lead: Lead;
  activities: {
    type: ActivityType;
    org_id: string;
    lead_id: string;
    title: string;
    description: string;
    direction?: ActivityDirection;
    metadata?: ActivityMetadata;
    id: string;
    created_by_uid?: string | null;
    created_by_type?: string;
    created_at: timestamp;
    updated_at: timestamp;
  }[];
};

export const singleLead: SingleLead = {
  lead: {
    org_id: "ZqxylZwSJdq4u08LwZbV",
    source: {
      type: "WEBSITE",
    },
    name: "Mohd Zaid",
    first_name: "Mohd",
    last_name: "Zaid",
    email: "mohdzaid735@gmail.com",
    mobile: "+917011877777",
    country_code: "+91",
    mobile_without_country_code: "7011877777",
    company: "Video ",
    location: {},
    custom_fields: {
      acquisition_source: "web",
    },
    created_at: {
      _seconds: 1779130933,
      _nanoseconds: 451000000,
    },
    id: "sORaB0SUbUJIBjZxndDa",
    owner_uid: "WabJSip2olfBLRcWYOgVaFeaMeo1",
    updated_at: {
      _seconds: 1779168264,
      _nanoseconds: 686000000,
    },
    crm: {
      status: null,
      last_call_done_at: {
        _seconds: 1779168264,
        _nanoseconds: 669000000,
      },
      last_contacted_at: {
        _seconds: 1779168264,
        _nanoseconds: 740000000,
      },
    },
  },
  activities: [
    {
      type: "PHONE_CALL",
      org_id: "ZqxylZwSJdq4u08LwZbV",
      lead_id: "sORaB0SUbUJIBjZxndDa",
      title: "Outbound Call Made",
      description:
        "Outbound call initiated by Aiman Shakeel using did 919484958203",
      direction: "OUTBOUND",
      metadata: {
        call_id: "call_331f0807e51d40f2",
      },
      id: "wFpPW8ck6uTGypMsNwVp",
      created_by_uid: null,
      created_by_type: "SYSTEM",
      created_at: {
        _seconds: 1779168264,
        _nanoseconds: 740000000,
      },
      updated_at: {
        _seconds: 1779168264,
        _nanoseconds: 740000000,
      },
    },
    {
      type: "CUSTOM",
      title: "Campaign Created",
      description: 'New "Web Development and Design" campaign created in draft',
      metadata: {
        campaign_id: "x41JaT1y9YV7iFcaV61UxNe6X6m2_1779131074269",
        content:
          "Web Development and Design focuses on building visually appealing, responsive, and user-friendly websites that deliver excellent performance and seamless digital experiences.”",
      },
      id: "7vC45r3UnY6NY6xcnx4d",
      org_id: "ZqxylZwSJdq4u08LwZbV",
      lead_id: "sORaB0SUbUJIBjZxndDa",
      created_by_uid: null,
      created_by_type: "SYSTEM",
      created_at: {
        _seconds: 1779131074,
        _nanoseconds: 505000000,
      },
      updated_at: {
        _seconds: 1779131074,
        _nanoseconds: 505000000,
      },
    },
    {
      type: "WA_MESSAGE",
      direction: "OUTBOUND",
      title: "WhatsApp Message Sent",
      description: "Initial greeting and introduction sent",
      metadata: {
        content:
          "Hi Mohd Zaid,\nWelcome to GrowEasy!\n\nWe help businesses like yours get leads effortlessly. Can we share a quick demo on how to launch your first campaign?",
      },
      id: "gkDTxmLpdGBV6ONkT5Lg",
      org_id: "ZqxylZwSJdq4u08LwZbV",
      lead_id: "sORaB0SUbUJIBjZxndDa",
      created_by_uid: null,
      created_by_type: "SYSTEM",
      created_at: {
        _seconds: 1779130935,
        _nanoseconds: 197000000,
      },
      updated_at: {
        _seconds: 1779130935,
        _nanoseconds: 197000000,
      },
    },
    {
      id: "kcmjxmgxjZalYJ4Sh70X",
      org_id: "ZqxylZwSJdq4u08LwZbV",
      lead_id: "sORaB0SUbUJIBjZxndDa",
      type: "NEW_LEAD",
      title: "Lead Generated",
      description: "New lead captured from website",
      created_by_type: "SYSTEM",
      created_at: {
        _seconds: 1779130933,
        _nanoseconds: 585000000,
      },
      updated_at: {
        _seconds: 1779130933,
        _nanoseconds: 585000000,
      },
    },
  ],
};
