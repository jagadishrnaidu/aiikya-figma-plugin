// Aiikya Channel Partner Page Builder
// This plugin creates a new page and auto-builds the main layout frame.

async function main() {
  // Load a font so we can create text safely
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  // Create / select page
  const page = figma.createPage();
  page.name = "Aiikya CP – Channel Partner";
  figma.currentPage = page;

  // Helper to create text
  function createText(text, fontSize = 14, opts = {}) {
    const node = figma.createText();
    node.characters = text;
    node.fontSize = fontSize;
    if (opts.color) {
      node.fills = [{
        type: "SOLID",
        color: opts.color
      }];
    }
    if (opts.opacity !== undefined) {
      node.opacity = opts.opacity;
    }
    return node;
  }

  // Helper to create vertical frame
  function vFrame(name, padding = 24, spacing = 16) {
    const frame = figma.createFrame();
    frame.name = name;
    frame.layoutMode = "VERTICAL";
    frame.counterAxisSizingMode = "FIXED";
    frame.primaryAxisSizingMode = "AUTO";
    frame.paddingLeft = padding;
    frame.paddingRight = padding;
    frame.paddingTop = padding;
    frame.paddingBottom = padding;
    frame.itemSpacing = spacing;
    frame.clipsContent = false;
    return frame;
  }

  // Helper to create horizontal frame
  function hFrame(name, padding = 0, spacing = 16) {
    const frame = figma.createFrame();
    frame.name = name;
    frame.layoutMode = "HORIZONTAL";
    frame.counterAxisSizingMode = "FIXED";
    frame.primaryAxisSizingMode = "AUTO";
    frame.paddingLeft = padding;
    frame.paddingRight = padding;
    frame.paddingTop = padding;
    frame.paddingBottom = padding;
    frame.itemSpacing = spacing;
    frame.clipsContent = false;
    return frame;
  }

  // MAIN PAGE FRAME
  const main = vFrame("Aiikya CP – Desktop", 80, 80);
  main.resizeWithoutConstraints(1440, 4000);
  main.primaryAxisSizingMode = "AUTO";
  main.counterAxisSizingMode = "FIXED";
  main.counterAxisAlignItems = "CENTER";

  // Light background
  main.fills = [{
    type: "SOLID",
    color: { r: 0.98, g: 0.98, b: 0.98 }
  }];

  page.appendChild(main);

  // ========= HEADER =========
  const header = hFrame("Header", 24, 24);
  header.resizeWithoutConstraints(1280, 72);
  header.counterAxisAlignItems = "CENTER";

  // Logo
  const logo = createText("Aiikya", 20);
  header.appendChild(logo);

  // Right nav container
  const nav = hFrame("Nav", 0, 24);
  nav.layoutGrow = 1;
  nav.counterAxisAlignItems = "CENTER";
  nav.primaryAxisAlignItems = "MAX";

  function navItem(label) {
    const t = createText(label, 14, { opacity: 0.9 });
    return t;
  }

  nav.appendChild(navItem("Projects"));
  nav.appendChild(navItem("Locations"));
  nav.appendChild(navItem("Channel Partners"));
  nav.appendChild(navItem("Contact"));

  // CTA button
  const btn = hFrame("Button – Register as CP", 16, 8);
  btn.paddingTop = 8;
  btn.paddingBottom = 8;
  btn.cornerRadius = 999;
  btn.counterAxisAlignItems = "CENTER";
  btn.primaryAxisAlignItems = "CENTER";
  btn.fills = [{
    type: "SOLID",
    color: { r: 0.07, g: 0.35, b: 0.20 }
  }];

  const btnLabel = createText("Register as CP", 13, {
    color: { r: 1, g: 1, b: 1 }
  });
  btn.appendChild(btnLabel);

  nav.appendChild(btn);
  header.appendChild(nav);
  main.appendChild(header);

  // ========= HERO =========
  const hero = hFrame("Hero", 0, 48);
  hero.resizeWithoutConstraints(1280, 640);
  hero.counterAxisAlignItems = "MIN";

  // Hero left
  const heroLeft = vFrame("Hero – Left", 0, 24);
  heroLeft.resizeWithoutConstraints(640, 640);

  const eyebrow = createText("CHANNEL PARTNER PROGRAM", 12, { opacity: 0.7 });
  heroLeft.appendChild(eyebrow);

  const h1 = createText(
    "Sell 4-way convertible homes across Sarjapur Road, E-City Extension & Hennur",
    32
  );
  heroLeft.appendChild(h1);

  const heroBody = createText(
    "AIIKYA brings smart 4-way convertible homes with fully delivered custom interiors—studios, apartments, duplexes and penthouses with private terraces, starting from ₹27.99L to ₹5Cr.",
    14,
    { opacity: 0.9 }
  );
  heroLeft.appendChild(heroBody);

  // Stats row
  const statsRow = hFrame("Hero stats", 0, 16);
  statsRow.counterAxisAlignItems = "STRETCH";

  function statCard(title, body) {
    const f = vFrame("Stat", 16, 8);
    f.cornerRadius = 12;
    f.strokes = [{
      type: "SOLID",
      color: { r: 0.92, g: 0.92, b: 0.92 }
    }];
    f.strokeWeight = 1;
    const tTitle = createText(title, 13);
    const tBody = createText(body, 12, { opacity: 0.9 });
    f.appendChild(tTitle);
    f.appendChild(tBody);
    f.resizeWithoutConstraints(0, 0);
    return f;
  }

  statsRow.appendChild(
    statCard(
      "4-way convertible homes",
      "Sleep • Study/Work • Relax • Entertain in the same space with transformable interiors."
    )
  );
  statsRow.appendChild(
    statCard(
      "3 high-growth corridors",
      "Projects across Sarjapur Road, Electronic City Extension & Hennur."
    )
  );
  statsRow.appendChild(
    statCard(
      "₹27.99L–₹5Cr ticket sizes",
      "From first-time buyers to HNIs, cover every budget segment."
    )
  );

  heroLeft.appendChild(statsRow);

  // Highlight pill
  const pill = hFrame("Hero highlight pill", 16, 0);
  pill.paddingTop = 8;
  pill.paddingBottom = 8;
  pill.cornerRadius = 999;
  pill.counterAxisAlignItems = "CENTER";
  pill.primaryAxisAlignItems = "CENTER";
  pill.fills = [{
    type: "SOLID",
    color: { r: 0.9, g: 0.96, b: 0.9 }
  }];

  pill.appendChild(
    createText(
      "Earn 2%–7.5% brokerage with payouts within 7 days of confirmed sale.*",
      12
    )
  );
  heroLeft.appendChild(pill);

  const heroFootnote = createText(
    "*Final slabs and payout timelines as per empanelment terms.",
    10,
    { opacity: 0.7 }
  );
  heroLeft.appendChild(heroFootnote);

  // Hero right – form card shell
  const heroRight = vFrame("Hero – Form card", 24, 16);
  heroRight.resizeWithoutConstraints(480, 580);
  heroRight.cornerRadius = 16;
  heroRight.fills = [{
    type: "SOLID",
    color: { r: 1, g: 1, b: 1 }
  }];
  heroRight.strokes = [{
    type: "SOLID",
    color: { r: 0.92, g: 0.92, b: 0.92 }
  }];
  heroRight.strokeWeight = 1;

  heroRight.appendChild(
    createText("Register as an Aiikya Channel Partner", 18)
  );
  heroRight.appendChild(
    createText(
      "Share your details to get empanelled and access project inventory, marketing support and exclusive CP programs with the Times of India.",
      12,
      { opacity: 0.9 }
    )
  );

  const formPlaceholder = vFrame("Form fields (placeholder)", 12, 8);
  formPlaceholder.cornerRadius = 8;
  formPlaceholder.strokes = [{
    type: "DASHED",
    dashPattern: [4, 4],
    color: { r: 0.86, g: 0.86, b: 0.86 },
    type: "SOLID"
  }];
  formPlaceholder.strokeWeight = 1;

  formPlaceholder.appendChild(
    createText(
      "Form fields go here:\n• Type of Partner\n• Contact Person Name\n• Company / Firm Name\n• Email ID\n• Mobile Number (+91)\n• City / Micro-market\n• RERA Registration Number (optional)\n• Experience in Real Estate\n• Interested in (Aiikya Village / Forestscape / Hennur)\n• Ticket sizes\n• Upload documents\n• Consent checkbox\n• Submit button",
      11,
      { opacity: 0.8 }
    )
  );

  heroRight.appendChild(formPlaceholder);

  const submitBtn = hFrame("Button – Submit", 16, 0);
  submitBtn.paddingTop = 10;
  submitBtn.paddingBottom = 10;
  submitBtn.cornerRadius = 999;
  submitBtn.counterAxisAlignItems = "CENTER";
  submitBtn.primaryAxisAlignItems = "CENTER";
  submitBtn.fills = [{
    type: "SOLID",
    color: { r: 0.07, g: 0.35, b: 0.20 }
  }];
  submitBtn.appendChild(
    createText("Submit & Get Empanelled", 13, {
      color: { r: 1, g: 1, b: 1 }
    })
  );

  heroRight.appendChild(submitBtn);

  hero.appendChild(heroLeft);
  hero.appendChild(heroRight);

  main.appendChild(hero);

  // ========= SECTION HELPERS =========
  function createSection(name, titleText, description) {
    const section = vFrame(name, 32, 24);
    section.resizeWithoutConstraints(1280, 200);
    section.fills = [{
      type: "SOLID",
      color: { r: 1, g: 1, b: 1 }
    }];
    const title = createText(titleText, 24);
    section.appendChild(title);
    if (description) {
      section.appendChild(createText(description, 13, { opacity: 0.9 }));
    }
    main.appendChild(section);
    return section;
  }

  // ========= OTHER SECTIONS (titles + placeholders) =========

  // Why Aiikya
  createSection(
    "Section – Why Aiikya",
    "Why Aiikya homes are easier to close",
    "Use this section to show USPs: 4-way convertible homes, 80% bigger duplex living, farm-to-home lifestyle, WFH-ready amenities, low-maintenance design."
  );

  // CP Benefits
  createSection(
    "Section – Channel Partner benefits",
    "Channel Partner benefits with Aiikya",
    "Highlight commission slabs (2%–7.5%), fast payouts, dedicated CP desk, marketing support, on-ground sales help and training."
  );

  // Times of India band
  createSection(
    "Section – Times of India CP programs",
    "Exclusive CP support programs with the Times of India",
    "As an empanelled Aiikya Channel Partner, you get access to curated programs with the Times of India network—knowledge sessions, city-level campaigns and buyer events."
  );

  // Onboarding journey
  createSection(
    "Section – Onboarding journey",
    "Your onboarding journey",
    "Outline the 5 steps: Submit details, CP Desk connects, Empanelment & documentation, Training & access, Start closing & earning."
  );

  // Who can become CP
  createSection(
    "Section – Who can become a Channel Partner?",
    "Who should register?",
    "Independent brokers & agents, CP firms, wealth managers, NRI / HNI consultants, and qualified prop-tech partners. RERA registration preferred."
  );

  // FAQs
  createSection(
    "Section – FAQs",
    "Frequently asked questions",
    "Add FAQs about commissions, payout timelines, RERA, marketing guidelines and active projects."
  );

  // Footer
  createSection(
    "Section – Footer",
    "Footer",
    "Include CP Desk contact details, project locations (Aiikya Village – Sarjapur, Aiikya Forestscape – Jigani, upcoming Hennur) and RERA / legal text."
  );

  figma.closePlugin("Aiikya CP page created ✅");
}

main().catch(err => {
  console.error(err);
  figma.closePlugin("Something went wrong – check console for details.");
});
