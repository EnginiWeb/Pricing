const vendorGroups = {
  SAP: ["SAP S/4HANA", "SAP Business One", "SAP SuccessFactors"],
  Sage: ["Sage", "Sage HR", "Sage 200", "Sage Intacct"],
  Microsoft: ["Microsoft Dataverse", "MS SQL", "Azure Active Directory"],
  Oracle: ["Oracle", "Oracle Human Capital Management (HCM)"],
  Jira: ["Jira Service Management Cloud", "Jira Cloud platform"],
  Salesforce: ["Salesforce"],
  "monday.com": ["monday.com"],
  NetSuite: ["Netsuite"],
  Expensify: ["Expensify"],
  HubSpot: ["Hubspot CRM"],
  MySQL: ["MySQL"],
  Postgres: ["Postgres"],
  "IBM DB2": ["IBM DB2"],
  Okta: ["Okta"],
  Zendesk: ["Zendesk – Including SCIM"],
  Comeet: ["Comeet"],
  "Zip HQ": ["Zip HQ"],
  hiBob: ["hibob"],
  BambooHR: ["BambooHR"],
  Infor: ["Infor"],
  Workday: ["Workday"],
  Priority: ["Priority"]
};

const premiumConnectors = [
  "Jira Service Management Cloud", "Jira Cloud platform", "Zoho CRM", "SAP S/4HANA", "Infor", "Workday",
  "ServiceNow", "Sage HR", "Oracle Human Capital Management (HCM)", "SAP SuccessFactors", "Sage 200", "Sage",
  "Sage Intacct", "Priority", "Salesforce", "monday.com", "Netsuite", "Expensify", "Hubspot CRM",
  "Azure Active Directory", "Microsoft Dataverse", "MS SQL", "MySQL", "Oracle", "Postgres", "IBM DB2",
  "Comeet", "Okta", "Zendesk – Including SCIM", "SAP Business One", "Zip HQ", "hibob", "BambooHR"
];

const allConnectors = [
  { name: "Amazon SQS", category: "Messaging/Queue" },
  { name: "box", category: "Storage/Files" },
  { name: "Comeet", category: "HR/Recruiting" },
  { name: "Expensify", category: "Finance/Expense" },
  { name: "Fireberry", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "bill-com", category: "Finance/Payments" },
  { name: "Jumpcloud", category: "HR/Identity" },
  { name: "Okta", category: "HR/Identity" },
  { name: "Anthropic", category: "AI/LLM" },
  { name: "PayPal", category: "Finance/Payments" },
  { name: "Perplexity", category: "AI/LLM" },
  { name: "Gmail", category: "Communication/Email" },
  { name: "G Workspace", category: "Communication/Collaboration" },
  { name: "HERP", category: "HR/ERP" },
  { name: "HFD", category: "Finance/Data" },
  { name: "IBM DB2", category: "Database" },
  { name: "Jira", category: "Project Management" },
  { name: "Gemini", category: "AI/LLM" },
  { name: "OneDrive", category: "Storage/Files" },
  { name: "ServiceNow", category: "ITSM/Service" },
  { name: "Snowflake", category: "Database/Data Warehouse" },
  { name: "Marketo", category: "Marketing Automation" },
  { name: "LinkedIn", category: "Sales/Marketing" },
  { name: "ManyChat", category: "Communication/Chatbot" },
  { name: "Meshulam", category: "Finance/Payments" },
  { name: "Dynamics 365", category: "ERP/CRM" },
  { name: "MS SQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "NetSuite", category: "ERP" },
  { name: "Microsoft", category: "Platform/General" },
  { name: "Wiz", category: "Security" },
  { name: "Tiipati", category: "Finance/Payments" },
  { name: "Coupa", category: "Procurement/Finance" },
  { name: "Microsoft Teams", category: "Communication/Chat" },
  { name: "Gusto", category: "HR/Payroll" },
  { name: "Open AI", category: "AI/LLM" },
  { name: "Oracle", category: "ERP" },
  { name: "PayPlus", category: "Finance/Payments" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Priority", category: "ERP" },
  { name: "Quickbooks", category: "Finance/Accounting" },
  { name: "Dealfront", category: "Sales/Marketing" },
  { name: "ADP", category: "HR/Payroll" },
  { name: "Business One", category: "ERP" },
  { name: "Monday CRM", category: "CRM/Project Management" },
  { name: "BASE44", category: "Custom/Platform" },
  { name: "Loveable", category: "Marketing/Loyalty" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Zendesk", category: "ITSM/Service" },
  { name: "Zip Archive", category: "Utility/Files" },
  { name: "Zuora", category: "Finance/Subscription" },
  { name: "Acumatica", category: "ERP" },
  { name: "Payme", category: "Finance/Payments" },
  { name: "PowerPoint", category: "Communication/Presentation" },
  { name: "MS Planner", category: "Project Management" },
  { name: "MS OneNote", category: "Communication/Notes" },
  { name: "SharePoint", category: "Storage/Collaboration" },
  { name: "MS Forms", category: "Data Collection" },
  { name: "G Calendar", category: "Communication/Scheduling" },
  { name: "Active Directory", category: "HR/Identity" },
  { name: "Xero", category: "Finance/Accounting" },
  { name: "Infor ERP", category: "ERP" },
  { name: "Sage", category: "Finance/Accounting" },
  { name: "Asana", category: "Project Management" },
  { name: "Google Chat", category: "Communication/Chat" },
  { name: "Google Docs", category: "Communication/Collaboration" },
  { name: "Google Forms", category: "Data Collection" },
  { name: "Google Keep", category: "Communication/Notes" },
  { name: "Google Meet", category: "Communication/Video" },
  { name: "Google Sheets", category: "Database/Spreadsheet" },
  { name: "Monday.com", category: "Project Management/CRM" },
  { name: "Airtable", category: "Database/Spreadsheet" },
  { name: "Clay", category: "Data Enrichment/AI" },
  { name: "ClickUp", category: "Project Management" },
  { name: "UPS", category: "Shipping" },
  { name: "FedEx", category: "Shipping" },
  { name: "Google Slides", category: "Communication/Presentation" },
  { name: "Google Tasks", category: "Project Management/Personal" },
  { name: "Confluence", category: "Communication/Collaboration" },
  { name: "DocuSign", category: "Legal/Signature" },
  { name: "Slack", category: "Communication/Chat" },
  { name: "Azure", category: "Cloud Platform" },
  { name: "Google Cloud", category: "Cloud Platform" },
  { name: "AWS", category: "Cloud Platform" },
  { name: "Pipedrive", category: "CRM" },
  { name: "Zoho", category: "CRM/Platform" },
  { name: "HubSpot", category: "CRM/Marketing Automation" }
];

const vendorLogoMap = {
  SAP: "logos/sap.png",
  Sage: "logos/sage.png",
  Microsoft: "logos/dynamics-365.png",
  Oracle: "logos/oracle.png",
  Jira: "logos/jira.png",
  Salesforce: "logos/salesforce.png",
  "monday.com": "logos/monday-com.png",
  "Monday CRM": "logos/monday-crm.png",
  NetSuite: "logos/netsuite.png",
  Expensify: "logos/Expensify.png",
  HubSpot: "logos/hubspot.png",
  MySQL: "logos/mysql.png",
  Postgres: "logos/PostgreSQL.png",
  "IBM DB2": "logos/IBM-DB2.png",
  Okta: "logos/Okta.png",
  Zendesk: "logos/zendesk.png",
  Comeet: "logos/comeet.png",
  "Zip HQ": "logos/ziphq.png",
  hiBob: "logos/hibob.png",
  BambooHR: "logos/bamboohr.png",
  Infor: "logos/infor-erp.png",
  Workday: "logos/workday.png",
  Priority: "logos/priority.png",
  "Amazon SQS": "logos/Amazon-sqs.png",
  "Business One": "logos/business-one.png",
  "G Workspace": "logos/G-Workspace.png",
  Gmail: "logos/Gmail.png",
  "MS SQL": "logos/ms-sql.png",
  OneDrive: "logos/onedrive.png",
  "Google Chat": "logos/google-chat.png",
  "Google Meet": "logos/google-meet.png",
  "Google Sheets": "logos/google-sheets.png",
  "Google Docs": "logos/google-docs.png",
  "Google Slides": "logos/google-slides.png",
  "Google Forms": "logos/google-forms.png",
  "Google Keep": "logos/google-keep.png",
  "Google Tasks": "logos/google-tasks.png",
  "Google Calendar": "logos/g-calendar.png",
  "Microsoft Teams": "logos/microsoft-teams.png",
  "MS Planner": "logos/ms-planner.png",
  "MS OneNote": "logos/ms-onenote.png",
  "MS Forms": "logos/ms-forms.png",
  ADP: "logos/adp.png",
  Xero: "logos/xero.png",
  Quickbooks: "logos/quickbooks.png",
  Zuora: "logos/zuora.png",
  "Active Directory": "logos/active-directory.png",
  AWS: "logos/aws.png",
  Azure: "logos/azure.png",
  "Google Cloud": "logos/google-cloud.png",
  Box: "logos/box.png",
  Slack: "logos/slack.png",
  Asana: "logos/asana.png",
  ClickUp: "logos/clickup.png",
  Airtable: "logos/airtable.png",
  Pipedrive: "logos/pipedrive.png",
  Zoho: "logos/zoho.png",
  DocuSign: "logos/docusign.png",
  ServiceNow: "logos/servicenow.png",
  Snowflake: "logos/snowflake.png",
  LinkedIn: "logos/linkedin.png",
  PayPal: "logos/paypal.png",
  PayPlus: "logos/payplus.png",
  Payme: "logos/payme.png",
  Coupa: "logos/coupa.png",
  Dealfront: "logos/Dealfront.png",
  Meshulam: "logos/meshulam.png",
  FedEx: "logos/fedex.png",
  UPS: "logos/ups.png",
  WooCommerce: "logos/woocommerce.png",
  OpenAI: "logos/openai.png",
  Anthropic: "logos/Anthropic.png",
  Fireberry: "logos/Fireberry.png",
  Tiipati: "logos/Tiipati.png",
  HFD: "logos/HFD.png",
  HERP: "logos/HERP.png",
  Gusto: "logos/Gusto.png"
};

const getVendorLogo = (vendorName) => {
  return vendorLogoMap[vendorName] || "logos/default.png";
};

const getVendorLogo = v => vendorLogoMap[v] || `logos/${v.toLowerCase().replace(/ /g, '-')}.png` || "logos/default.png";

const selectedConnectors = new Set(); 
let selectedHours = 0;
let connectorCount = 0; 

const plans = {
  standard: {
    key: "standard", name: "Standard", price: 361, tasks: 10000, workflows: 10, premiumConnections: 2,
    features: [
      "10,000 Monthly tasks", "10 Active workflows", "30 Minutes maximum workflow execution time",
      "15 Minutes minimum scheduled interval", "Webhooks", "2 Seats", "2 Premium connections",
      "14 Days log storage retention", "14 Days workflow versions retention"
    ]
  },
  pro: {
    key: "pro", name: "Pro", price: 736, tasks: 25000, workflows: Number.POSITIVE_INFINITY, premiumConnections: 4,
    features: [
      "25,000 Monthly tasks", "Unlimited Workflows", "Unlimited Apps", "Unlimited Tables",
      "45 Minutes maximum workflow execution time", "10 Minutes minimum scheduled interval",
      "Webhooks", "5 Seats", "4 Premium connections", "Dynamic connections", "1 On-Premise Agent",
      "Two-Factor Authentication", "30 Days log storage retention", "30 Days workflow versions retention"
    ]
  },
  enterprise: {
    key: "enterprise", name: "Enterprise", price: 1361, tasks: 100000, workflows: Number.POSITIVE_INFINITY, premiumConnections: 8,
    features: [
      "100,000 Monthly tasks", "Unlimited Workflows", "Unlimited Apps", "Unlimited Tables",
      "120 Minutes maximum workflow execution time", "1 Minute minimum scheduled interval", "Webhooks",
      "5 Seats", "8 Premium connections", "Dynamic connections", "2 On-Premise Agents", "Two-Factor Authentication",
      "30 Days log storage retention", "30 Days workflow versions retention", "IP Restrictions",
      "Session Timeout", "Service-Level Agreement (SLA)", "24/7 support", "Dedicated Customer Success Manager"
    ]
  }
};

const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));
const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function addWorkflow() {
  const container = qs("#workflows-container");
  const count = qsa(".workflow-item").length + 1;
  const wrap = document.createElement("div");
  wrap.className = "workflow-item";
  wrap.innerHTML = `
    <div class="workflow-controls">
      <div class="input-group">
        <label for="wf-desc-${count}">
          <i class="icon-desc">📋</i>
          Workflow Description
        </label>
        <input id="wf-desc-${count}" type="text" placeholder="e.g., Order to Invoice Processing" class="workflow-description"/>
      </div>
      <div class="input-group">
        <label for="wf-vol-${count}">
          <i class="icon-volume">📊</i>
          Monthly Volume
        </label>
        <input id="wf-vol-${count}" type="number" placeholder="100" class="workflow-volume" min="1"/>
      </div>
      <div class="input-group">
        <label for="wf-tpw-${count}">
          <i class="icon-tasks">⚙️</i>
          Tasks per Workflow
        </label>
        <input id="wf-tpw-${count}" type="number" value="25" class="workflow-tasks" min="1"/>
      </div>
    </div>
    <div class="wf-inline-total">
      <span class="total-label">Monthly Total:</span>
      <span class="total-value">0</span> tasks
    </div>
    <button class="btn btn-danger remove-workflow" type="button" aria-label="Remove workflow">
      <i class="icon-remove">🗑️</i>
      Remove Workflow
    </button>
  `;
  container.appendChild(wrap);
  updateCalculations();
}

function removeWorkflow(btn) {
  btn.closest(".workflow-item")?.remove();
  updateCalculations();
}

function getTotals() {
  const rows = qsa(".workflow-item");
  let totalTasks = 0;
  rows.forEach(row => {
    const vol = parseInt(qs(".workflow-volume", row)?.value || "0", 10);
    const tpw = parseInt(qs(".workflow-tasks", row)?.value || "1", 10);
    const wfTasks = Math.max(0, vol) * Math.max(1, tpw);
    totalTasks += wfTasks;
    const span = qs(".wf-inline-total .total-value", row);
    if (span) span.textContent = wfTasks.toLocaleString();
  });
  return { totalTasks, totalWorkflows: rows.length };
}

function renderConnectorGrid(filter = "") {
  const grid = qs("#connectors-container");
  grid.className = "connector-catalog square3";
  const countEl = qs("#connector-count");
  grid.innerHTML = "";

  const filteredConnectors = allConnectors
    .filter(c => {
      if (!filter) return true;
      const t = filter.toLowerCase();
      return c.name.toLowerCase().includes(t) || c.category.toLowerCase().includes(t);
    })
    .sort((a, b) => {
      const isAPremium = premiumConnectors.includes(a.name);
      const isBPremium = premiumConnectors.includes(b.name);
      if (isAPremium && !isBPremium) return -1;
      if (!isAPremium && isBPremium) return 1;
      return a.name.localeCompare(b.name);
    });

  if (filteredConnectors.length === 0) {
    grid.innerHTML = `<p class="muted" style="margin:6px 4px">No connectors match your search.</p>`;
  }

  filteredConnectors.forEach(connector => {
    const isPremium = premiumConnectors.includes(connector.name);
    const isSelected = selectedConnectors.has(connector.name);

    const card = document.createElement("div");
    card.className = `connector-card square ${isPremium ? 'premium' : ''} ${isSelected ? 'selected' : ''}`;
    card.setAttribute("data-connector", connector.name);
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${connector.name} - ${connector.category}`);
    card.setAttribute("tabindex", "0");

    const logo = document.createElement("img");
    logo.src = getVendorLogo(connector.name);
    logo.alt = `${connector.name} logo`;
    logo.className = "connector-logo";
    logo.onerror = () => logo.src = "logos/default.png";

    const name = document.createElement("div");
    name.className = "connector-name";
    name.textContent = connector.name;

    const sub = document.createElement("div");
    sub.className = "connector-sub";
    sub.textContent = connector.category;

    if (isPremium) {
      const badge = document.createElement("span");
      badge.className = "premium-badge";
      badge.textContent = "Premium";
      card.appendChild(badge);
    }

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(sub);
    grid.appendChild(card);
  });

  connectorCount = Array.from(selectedConnectors).filter(name => premiumConnectors.includes(name)).length;
  countEl.textContent = String(connectorCount);
}

function firstFittingPlan({ totalTasks, totalWorkflows }) {
  const order = [plans.standard, plans.pro, plans.enterprise];
  for (const p of order) {
    if (totalTasks <= p.tasks &&
      totalWorkflows <= p.workflows &&
      connectorCount <= p.premiumConnections) return p;
  }
  return plans.enterprise;
}

function renderPlans({ totalTasks, totalWorkflows }) {
  const box = qs("#pricing-plans");
  box.innerHTML = "";
  const recommended = firstFittingPlan({ totalTasks, totalWorkflows });

  [plans.standard, plans.pro, plans.enterprise].forEach(plan => {
    const okTasks = totalTasks <= plan.tasks;
    const okFlows = totalWorkflows <= plan.workflows;
    const okConn = connectorCount <= plan.premiumConnections;
    const fit = okTasks && okFlows && okConn;
    const rec = fit && plan.key === recommended.key;

    const card = document.createElement("div");
    card.className = "pricing-card";
    if (rec) card.classList.add("recommended");
    if (!fit) card.classList.add("not-suitable");

    const status = rec ? `<div class="recommendation">✨ Recommended for your needs</div>` :
      !fit ? `<div class="warning">⚠️ Insufficient for your requirements</div>` : "";

    const features = plan.features.map(f => {
      let cls = "";
      if (f.includes("Monthly tasks") && !okTasks) cls = "insufficient";
      if (f.toLowerCase().includes("workflows") && !okFlows) cls = "insufficient";
      if (f.includes("Premium connections") && !okConn) cls = "insufficient";
      return `<li class="${cls}">${f}</li>`;
    }).join("");

    card.innerHTML = `
      ${status}
      <div class="plan-name">${plan.name}</div>
      <div class="plan-price">${money(plan.price)}</div>
      <div class="plan-billing">per month billed annually</div>
      <ul class="plan-features">${features}</ul>
    `;
    box.appendChild(card);
  });
  renderTotals(recommended);
}

function renderTotals(recommended) {
  const wrap = qs("#total-cost");
  const monthly = qs("#monthly-amount");
  const implWrap = qs("#implementation-cost");
  const implAmt = qs("#implementation-amount");
  const summary = qs("#total-summary");

  const impl = selectedHours > 0 ? Math.max(20, selectedHours) * 189 : 0;

  if (!recommended && impl === 0) {
    wrap.style.display = "none";
    return;
  }

  wrap.style.display = "block";
  monthly.textContent = recommended ? money(recommended.price) : "$0";

  if (impl > 0) {
    implWrap.style.display = "block";
    implAmt.textContent = money(impl);
  } else {
    implWrap.style.display = "none";
  }

  let text = "";
  if (recommended && impl > 0) {
    const firstYear = recommended.price * 12 + impl;
    text = `First year total ${money(firstYear)} - Ongoing ${money(recommended.price)}/mo`;
  } else if (recommended) {
    text = `Annual cost ${money(recommended.price * 12)} (paid annually)`;
  } else {
    text = `Implementation only ${money(impl)}`;
  }
  summary.textContent = text;
}

function updateMetrics() {
  const { totalTasks, totalWorkflows } = getTotals();
  qs("#m-workflows").textContent = totalWorkflows;
  qs("#m-tasks").textContent = totalTasks.toLocaleString();
  qs("#m-vendors").textContent = connectorCount;
}

function updateCalculations() {
  const totals = getTotals();
  updateMetrics();
  renderPlans(totals);
}

function generateProposalContent() {
  const { totalTasks, totalWorkflows } = getTotals();
  const recommended = firstFittingPlan({ totalTasks, totalWorkflows });
  const impl = selectedHours > 0 ? Math.max(20, selectedHours) * 189 : 0;

  const selectedPremiumConnectors = Array.from(selectedConnectors).filter(name => premiumConnectors.includes(name));
  const selectedStandardConnectors = Array.from(selectedConnectors).filter(name => !premiumConnectors.includes(name));

  const workflows = qsa(".workflow-item").map((item, index) => {
    const desc = qs(".workflow-description", item)?.value || `Workflow ${index + 1}`;
    const vol = parseInt(qs(".workflow-volume", item)?.value || "0", 10);
    const tpw = parseInt(qs(".workflow-tasks", item)?.value || "1", 10);
    const total = vol * tpw;
    return { desc, vol, tpw, total };
  });

  return {
    date: new Date().toLocaleDateString(),
    metrics: { totalTasks, totalWorkflows, connectorCount },
    workflows,
    selectedPremiumConnectors,
    selectedStandardConnectors,
    recommended,
    implementation: { hours: selectedHours, cost: impl },
    costs: {
      monthly: recommended ? recommended.price : 0,
      annual: recommended ? recommended.price * 12 : 0,
      implementation: impl,
      firstYear: recommended ? recommended.price * 12 + impl : impl,
      ongoing: recommended ? recommended.price : 0
    }
  };
}

document.addEventListener("click", (e) => {
  if (e.target.id === "add-workflow-btn") {
    addWorkflow();
  }

  if (e.target.classList.contains("remove-workflow")) {
    removeWorkflow(e.target);
  }

  if (e.target.classList.contains("hour-option")) {
    qsa(".hour-option").forEach(b => b.classList.remove("selected"));
    e.target.classList.add("selected");
    selectedHours = parseInt(e.target.dataset.hours, 10) || 0;
    renderTotals(firstFittingPlan(getTotals()));
  }

  const card = e.target.closest(".connector-card.square");
  if (card) {
    const connectorName = card.getAttribute("data-connector");
    if (selectedConnectors.has(connectorName)) {
      selectedConnectors.delete(connectorName);
    } else {
      selectedConnectors.add(connectorName);
    }

    connectorCount = Array.from(selectedConnectors).filter(name => premiumConnectors.includes(name)).length;
    qs("#connector-count").textContent = String(connectorCount);
    updateMetrics();
    updateCalculations();
    renderConnectorGrid(qs("#connectorSearch").value); 
  }
});

document.addEventListener("input", (e) => {
  if (
    e.target.classList.contains("workflow-volume") ||
    e.target.classList.contains("workflow-tasks") ||
    e.target.classList.contains("workflow-description")
  ) {
    updateCalculations();
  }

  if (e.target.id === "connectorSearch") {
    renderConnectorGrid(e.target.value);
  }
});

document.getElementById('download-proposal')?.addEventListener('click', async () => {
  const proposalData = generateProposalContent();

  const proposalWindow = window.open('', '_blank');

const proposalHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Engini Integration Proposal</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            max-width: 900px;
            margin: 0 auto;
            padding: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            background: white;
            margin: 20px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
            color: white;
            padding: 60px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        .logo {
            font-size: 3.5em;
            font-weight: 700;
            margin-bottom: 10px;
            position: relative;
            z-index: 2;
            text-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .subtitle {
            font-size: 1.3em;
            font-weight: 300;
            opacity: 0.9;
            position: relative;
            z-index: 2;
        }
        
        .content {
            padding: 40px;
        }
        
        .disclaimer-banner {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            color: #92400e;
            padding: 20px;
            margin: -40px -40px 30px -40px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            text-align: center;
            font-weight: 600;
            position: relative;
        }
        
        .disclaimer-banner::before {
            content: "⚠️";
            font-size: 1.2em;
            margin-right: 10px;
        }
        
        .date {
            text-align: right;
            color: #6b7280;
            margin-bottom: 30px;
            font-size: 0.95em;
            font-weight: 500;
        }
        
        .section {
            margin-bottom: 40px;
            padding: 30px;
            border-radius: 16px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 1px solid #e2e8f0;
            position: relative;
            overflow: hidden;
        }
        
        .section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
        }
        
        .section h2 {
            color: #1e293b;
            font-size: 1.5em;
            font-weight: 600;
            margin: 0 0 20px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }
        
        .metric {
            background: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 25px rgba(0,0,0,0.08);
            border: 1px solid #f1f5f9;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .metric:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 40px rgba(0,0,0,0.12);
        }
        
        .metric-value {
            font-size: 2.2em;
            font-weight: 700;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 5px;
        }
        
        .metric-label {
            color: #64748b;
            font-size: 0.9em;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .workflow-table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 25px rgba(0,0,0,0.08);
        }
        
        .workflow-table th {
            background: linear-gradient(135deg, #1e293b, #334155);
            color: white;
            padding: 16px;
            text-align: left;
            font-weight: 600;
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .workflow-table td {
            padding: 16px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .workflow-table tr:nth-child(even) {
            background: #f8fafc;
        }
        
        .workflow-table tr:hover {
            background: #f1f5f9;
        }
        
        .connector-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }
        
        .connector-category {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 25px rgba(0,0,0,0.08);
            border: 1px solid #f1f5f9;
            transition: transform 0.3s ease;
        }
        
        .connector-category:hover {
            transform: translateY(-2px);
        }
        
        .connector-category h4 {
            color: #1e293b;
            margin: 0 0 15px 0;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .connector-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .connector-list li {
            padding: 10px 0;
            border-bottom: 1px solid #f1f5f9;
            color: #475569;
            font-weight: 500;
        }
        
        .connector-list li:last-child {
            border-bottom: none;
        }
        
        .premium-badge {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: white;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.75em;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 10px rgba(245, 158, 11, 0.3);
        }
        
        .plan-highlight {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
            color: white;
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            margin: 25px 0;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
        }
        
        .plan-highlight::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 8s ease-in-out infinite;
        }
        
        .plan-highlight h3 {
            margin: 0 0 15px 0;
            font-size: 1.8em;
            font-weight: 700;
            position: relative;
            z-index: 2;
        }
        
        .plan-highlight .price {
            font-size: 2.5em;
            font-weight: 700;
            margin: 25px 0;
            position: relative;
            z-index: 2;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        
        .plan-highlight p {
            position: relative;
            z-index: 2;
            opacity: 0.9;
        }
        
        .cost-summary {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            padding: 30px;
            border-radius: 16px;
            border-left: 6px solid #3b82f6;
            box-shadow: 0 4px 25px rgba(59, 130, 246, 0.1);
        }
        
        .cost-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid rgba(59, 130, 246, 0.2);
            font-weight: 500;
        }
        
        .cost-item:last-child {
            border-bottom: none;
            font-weight: 700;
            font-size: 1.2em;
            color: #1e40af;
            padding-top: 15px;
            margin-top: 10px;
            border-top: 2px solid #3b82f6;
        }
        
        .pricing-disclaimer {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            padding: 20px;
            border-radius: 12px;
            margin: 25px 0;
            text-align: center;
            font-weight: 600;
            color: #92400e;
        }
        
        .pricing-disclaimer::before {
            content: "📋";
            font-size: 1.5em;
            display: block;
            margin-bottom: 10px;
        }
        
        .footer {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            padding: 40px;
            text-align: center;
            margin: 40px -40px -40px -40px;
        }
        
        .footer p {
            margin: 10px 0;
        }
        
        .next-steps ol {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
        }
        
        .next-steps li {
            counter-increment: step-counter;
            margin: 15px 0;
            padding: 15px 20px 15px 60px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.05);
            position: relative;
            border-left: 4px solid #6366f1;
        }
        
        .next-steps li::before {
            content: counter(step-counter);
            position: absolute;
            left: 20px;
            top: 15px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.9em;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .features-grid li {
            background: rgba(255,255,255,0.2);
            padding: 12px 16px;
            border-radius: 8px;
            font-weight: 500;
            backdrop-filter: blur(10px);
        }
        
        @media (max-width: 768px) {
            .container {
                margin: 10px;
                border-radius: 15px;
            }
            
            .header {
                padding: 40px 20px;
            }
            
            .content {
                padding: 20px;
            }
            
            .disclaimer-banner {
                margin: -20px -20px 20px -20px;
            }
            
            .section {
                padding: 20px;
            }
            
            .logo {
                font-size: 2.5em;
            }
            
            .metrics-grid {
                grid-template-columns: 1fr;
            }
            
            .connector-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">ENGINI</div>
            <div class="subtitle">Integration & Automation Platform Proposal</div>
        </div>

        <div class="content">
            <div class="disclaimer-banner">
                This proposal is a pricing reference only and does not constitute an approved quote or binding agreement
            </div>

            <div class="date">Prepared on: ${proposalData.date}</div>

            <div class="section">
                <h2>📊 Project Overview</h2>
                <div class="metrics-grid">
                    <div class="metric">
                        <div class="metric-value">${proposalData.metrics.totalWorkflows}</div>
                        <div class="metric-label">Workflows</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${proposalData.metrics.totalTasks.toLocaleString()}</div>
                        <div class="metric-label">Monthly Tasks</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${proposalData.metrics.connectorCount}</div>
                        <div class="metric-label">Premium Connectors</div>
                    </div>
                </div>
            </div>

            ${proposalData.workflows.length > 0 ? `
            <div class="section">
                <h2>⚙️ Workflow Requirements</h2>
                <table class="workflow-table">
                    <thead>
                        <tr>
                            <th>Workflow Description</th>
                            <th>Monthly Volume</th>
                            <th>Tasks per Workflow</th>
                            <th>Total Monthly Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${proposalData.workflows.map(wf => `
                            <tr>
                                <td>${wf.desc}</td>
                                <td>${wf.vol.toLocaleString()}</td>
                                <td>${wf.tpw}</td>
                                <td><strong>${wf.total.toLocaleString()}</strong></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            ` : ''}

            ${proposalData.selectedPremiumConnectors.length > 0 || proposalData.selectedStandardConnectors.length > 0 ? `
            <div class="section">
                <h2>🔗 Integration Requirements</h2>
                <div class="connector-grid">
                    ${proposalData.selectedPremiumConnectors.length > 0 ? `
                    <div class="connector-category">
                        <h4>Premium Connectors <span class="premium-badge">Premium</span></h4>
                        <ul class="connector-list">
                            ${proposalData.selectedPremiumConnectors.map(conn => `<li>✨ ${conn}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    ${proposalData.selectedStandardConnectors.length > 0 ? `
                    <div class="connector-category">
                        <h4>Standard Connectors</h4>
                        <ul class="connector-list">
                            ${proposalData.selectedStandardConnectors.map(conn => `<li>🔧 ${conn}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}

            ${proposalData.recommended ? `
            <div class="section">
                <h2>💎 Recommended Solution</h2>
                <div class="plan-highlight">
                    <h3>${proposalData.recommended.name} Plan</h3>
                    <p>Perfect fit for your ${proposalData.metrics.totalTasks.toLocaleString()} monthly tasks across ${proposalData.metrics.totalWorkflows} workflows</p>
                    <div class="price">
                        ${money(proposalData.recommended.price)}/month
                    </div>
                    <div style="opacity: 0.9; font-weight: 500;">Billed annually</div>
                </div>

                <h4>Plan Features:</h4>
                <ul class="features-grid">
                    ${proposalData.recommended.features.map(feature => `<li>✅ ${feature}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${proposalData.implementation.cost > 0 ? `
            <div class="section">
                <h2>🚀 Implementation Services</h2>
                <p><strong>Professional Implementation Hours:</strong> ${proposalData.implementation.hours} hours</p>
                <p><strong>Implementation Cost:</strong> ${money(proposalData.implementation.cost)}</p>
                <p>Our expert team will handle the complete setup, configuration, and testing of your workflows and integrations to ensure a smooth launch.</p>
            </div>
            ` : ''}

            <div class="section">
                <h2>💰 Investment Summary</h2>
                <div class="cost-summary">
                    ${proposalData.recommended ? `
                    <div class="cost-item">
                        <span>Monthly Subscription (${proposalData.recommended.name} Plan):</span>
                        <span>${money(proposalData.costs.monthly)}</span>
                    </div>
                    <div class="cost-item">
                        <span>Annual Subscription Cost:</span>
                        <span>${money(proposalData.costs.annual)}</span>
                    </div>
                    ` : ''}
                    ${proposalData.costs.implementation > 0 ? `
                    <div class="cost-item">
                        <span>One-time Implementation:</span>
                        <span>${money(proposalData.costs.implementation)}</span>
                    </div>
                    ` : ''}
                    <div class="cost-item">
                        <span>First Year Total Investment:</span>
                        <span>${money(proposalData.costs.firstYear)}</span>
                    </div>
                    ${proposalData.recommended ? `
                    <div class="cost-item">
                        <span>Ongoing Monthly Cost:</span>
                        <span>${money(proposalData.costs.ongoing)}</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="pricing-disclaimer">
                    <strong>Important Notice:</strong> This proposal serves as a pricing reference and preliminary estimate only. It does not constitute an approved quote, binding agreement, or final pricing commitment. Actual pricing may vary based on specific requirements and final negotiations.
                </div>
            </div>

            <div class="section next-steps">
                <h2>🎯 Next Steps</h2>
                <ol>
                    <li><strong>Review & Feedback:</strong> Review this proposal reference and provide feedback on requirements and pricing structure</li>
                    <li><strong>Formal Quote:</strong> Request an official quote based on finalized requirements and specifications</li>
                    <li><strong>Contract & Setup:</strong> Sign the service agreement and begin account provisioning process</li>
                    <li><strong>Implementation:</strong> Our expert team will configure your workflows and integrations</li>
                    <li><strong>Training & Launch:</strong> Comprehensive user training and go-live support with ongoing assistance</li>
                </ol>
            </div>
        </div>

        <div class="footer">
            <p><strong>Thank you for considering Engini!</strong></p>
            <p>Questions about this pricing reference? Contact our sales team for detailed discussions and official quotes.</p>
            <p style="font-size: 0.9em; margin-top: 20px; opacity: 0.8;">This pricing reference is valid for 14 days from the date above and is subject to change based on final requirements.</p>
        </div>
    </div>
</body>
</html>`;
  proposalWindow.document.write(proposalHTML);
  proposalWindow.document.close();

 
    proposalWindow();

});

document.addEventListener("DOMContentLoaded", () => {
  renderConnectorGrid();
  updateCalculations();
});

