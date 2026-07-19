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
- **Contact**: `to="/contact"` (Navbar buttons, Hero inner pages)
- **Home**: `to="/"` (Navbar Logo)
- **Divisions**: `to="/technology"`, `"/distribution"`, `"/aviation"`, `"/infrastructure"`, `"/productions"`, `"/education"` (DivisionsGrid cards, Missions Slider, Footer)
- **Team/Leadership**: `to="/team"` (Hero button, Footer)
- **About**: `to="/about"` (HeroVideo button, Footer)
- **Corporate Structure**: `to="/corporate-structure"` (DivisionsGrid button)
- **Dynamic Routing**: `to={div.path}`, `to={sub.href}`, `to={link.path}` (Navbar drop-downs)
- **In-page Anchors**: `#divisions` (Hero), `#trackrecord` (Navbar, Footer)

**Direct Contact Links**
- **Email**: `mailto:info@b-lworldwide.company`
- **Phone**: `tel:+15614000465`

**Form Actions (PreventDefault Added - Endpoints Pending)**
- **Footer Subscribe**: Prevented default, alert added.
- **Contact Page Inquiry**: Prevented default, alert added.

---

## Needs Links or Wire-up (Placeholders & Buttons)

The following components currently use placeholder links (`href="#"`) that still need destination URLs:

**Placeholder Anchor Links (`<a>`)**
- **Plice.jsx**: `href="#" onClick={(e) => e.preventDefault()}`
- **NewsSection.jsx**: `href="#"` (Used for "View all press releases" buttons)
- **LeadershipTeaser.jsx**: `href="#"` (Used for "View full team" button - optionally could go to `/team`)
- **Footer.jsx**: 
  - Social media icon placeholders (`href="#"` for LinkedIn, Twitter, YouTube)
  - Legal links (`Privacy Policy`, `Terms of Service`, `Disclosures` all point to `#`)
  - Investors, Careers, Newsroom links point to `#`

---

## External Websites & Destinations Reference List (To Be Supplied)

Please provide the proper URLs or routing destinations for the following missing references so they can be integrated into the site:

- [ ] **Plice**: Website URL
- [ ] **News Section**: Destination URL/Route for "View all press releases" (e.g., `/news` or external blog)
- [ ] **Leadership**: Should the "View full team" teaser link directly to the `/team` page?
- [ ] **Social Media**: URLs for the footer social icons (LinkedIn, Twitter, YouTube)
- [ ] **Company Links**: Destination routes/URLs for Investors, Careers, and Newsroom in the Footer.
- [ ] **Legal Documents**:
  - Privacy Policy URL
  - Terms of Service URL
  - Disclosures URL
- [ ] **Form Actions**: Endpoints/Services to handle the "Subscribe" (Footer) and "Submit Inquiry" (Contact page) forms
