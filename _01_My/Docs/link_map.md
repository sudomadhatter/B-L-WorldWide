# Site Link Map

## Correctly Linked (Internal & Working External)

**External Partners & Organizations**
- **Splendor**: `https://splendor.org/` (Used in Tender, Splendor, DigitalCurrencies)
- **DeeLincoln Prime**: `https://deelincolnprime.com/` (Used in DeeLincoln)
- **Global Passport Academy**: `https://www.globalpassportacademy.org/` (Used in GlobalPassportAcademy)
- **Princess Promenade**: `https://www.instagram.com/princesspromenadesxm/` (Used in DutyFree)
- **Majestic PLT**: `https://www.majestic-plt.com/about` (Used in AirCargo)

**PDF Documents (Hosted on B-L WorldWide)**
- **PortHotel**: `https://b-lworldwide.company/wp-content/uploads/2025/11/pas-bl-TRIDENT_PRESENTATION.pdf`
- **MixedUse / Housing**: `https://b-lworldwide.company/wp-content/uploads/2025/11/Black-Horse-Gettysburg-PA-Veterans-Housing-and-Counseling-Center-Project-Overview-June-12-2024v1.pdf`
- **ILTT**: `https://b-lworldwide.company/wp-content/uploads/2025/11/Liqour-and-Tobacco-Trading-Company.pdf`
- **Fresh24**: `https://b-lworldwide.company/wp-content/uploads/2025/11/Majestic-PLT-PDF-Slides_organized-1.pdf`

**News Articles**
- `https://www.thedailyherald.sx/islands/government-approves-development-plan-for-hotel-and-waterpark-adjacent-to-port`
- `https://hotel.hardrock.com/`
- `https://www.royalcaribbean.com/`

**App Routing (React Router `Link` & Anchors)**
- **Contact**: `to="/contact"` (Used in all Productions and Education inner pages)
- **Home**: `to="/"` (Navbar Logo)
- **Divisions**: `to="/technology"`, `"/distribution"`, `"/aviation"`, `"/infrastructure"`, `"/productions"`, `"/education"` (DivisionsGrid cards)
- **Dynamic Routing**: `to={div.path}`, `to={sub.href}`, `to={link.path}` (Navbar drop-downs)
- **In-page Anchors**: `#divisions`, `#about`, `#team`, `#trackrecord`

**Direct Contact Links**
- **Email**: `mailto:info@b-lworldwide.company`
- **Phone**: `tel:+15614000465`

---

## Needs Links or Wire-up (Placeholders & Buttons)

The following components currently use placeholder links (`href="#"`) or buttons that have no action tied to them yet:

**Placeholder Anchor Links (`<a>`)**
- **Plice.jsx**: `href="#" onClick={(e) => e.preventDefault()}`
- **NewsSection.jsx**: `href="#"` (Used for "View All" or "Read More" buttons)
- **LeadershipTeaser.jsx**: `href="#"` (Used for reading more about leadership)
- **Footer.jsx**: 
  - Social media icon placeholders (`href="#"`)
  - Dynamic navigation links (`href="#"`)
  - Legal links (`Privacy Policy`, `Terms of Service`, `Disclosures` all point to `#`)

**Actionable Buttons (`<button>`)**
- **Hero.jsx**: 
  - `Explore Our Divisions` (Needs `onClick` or wrap in `Link` or anchor)
  - `Meet Our Team` (Needs `onClick` or wrap in `Link` or anchor)
- **Navbar.jsx**: 
  - `Contact Us` (Both desktop and mobile buttons lack `onClick` or `Link` wrapper)
- **DivisionsGrid.jsx**: 
  - `View full corporate structure` (Needs `onClick` or wrap in `Link`)
- **Footer.jsx**: 
  - `Subscribe` (Needs form submission handler/wire-up)
- **Contact.jsx**: 
  - `Submit Inquiry` (Currently `<button type="button">`, needs a form submit handler)

*(Note: State-toggling buttons like mobile menu toggles and carousel next/prev buttons were audited and are correctly wired up to component state.)*

---

## External Websites & Destinations Reference List (To Be Supplied)

Please provide the proper URLs or routing destinations for the following missing references so they can be integrated into the site:

- [ ] **Plice**: Website URL
- [ ] **News Section**: Destination URL for "View All" news
- [ ] **Leadership**: Destination URL for the leadership teaser (e.g., full bio or LinkedIn)
- [ ] **Social Media**: URLs for the footer social icons (LinkedIn, Twitter, YouTube)
- [ ] **Legal Documents**:
  - Privacy Policy URL
  - Terms of Service URL
  - Disclosures URL
- [ ] **Corporate Structure**: Destination URL/Route for the "View full corporate structure" button
- [ ] **Hero Actions**: Confirm if "Explore Our Divisions" and "Meet Our Team" should anchor down the page or go to dedicated routes
- [ ] **Contact Us Buttons**: Confirm if Navbar "Contact Us" buttons should link to `/contact`
- [ ] **Form Actions**: Endpoints/Services to handle the "Subscribe" (Footer) and "Submit Inquiry" (Contact page) forms
