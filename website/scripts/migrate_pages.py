import os
import re

MAPPING = [
    # Top-Level
    ("pages", "About.jsx", "page_about-us.md", "About Us"),
    ("pages", "Team.jsx", "page_meet-our-team.md", "Meet Our Team"),
    ("pages", "Contact.jsx", "page_contact.md", "Contact Us"),
    
    # Technology
    ("pages/divisions/technology", "Tender.jsx", "page_tender.md", "Tender"),
    ("pages/divisions/technology", "DigitalCurrencies.jsx", "page_digital-currency-and-21st-century-finance.md", "Digital Currencies"),
    ("pages/divisions/technology", "Plice.jsx", "page_plice.md", "Plice"),
    ("pages/divisions/technology", "Splendor.jsx", "page_splendor.md", "Splendor"),
    
    # Distribution
    ("pages/divisions/distribution", "Iltt.jsx", "page_iltt.md", "ILTT"),
    ("pages/divisions/distribution", "Fresh24.jsx", "page_fresh-24.md", "24 Fresh"),
    ("pages/divisions/distribution", "DutyFree.jsx", "page_duty-free.md", "Duty Free Division"),
    
    # Aviation
    ("pages/divisions/aviation", "AirCargo.jsx", "page_air-cargo.md", "Majestic Air Cargo"),
    ("pages/divisions/aviation", "FlightTraining.jsx", "page_aerospace-flight-training-and-mentoring.md", "Flight Training & Mentoring"),
    ("pages/divisions/aviation", "Atc.jsx", "page_air-traffic-controilers.md", "Air Traffic Controllers"),
    ("pages/divisions/aviation", "AvionicsMro.jsx", "page_avionics-air-frame-fabrication-and-power-plant.md", "Avionics & MRO"),
    
    # Infrastructure
    ("pages/divisions/infrastructure", "PortHotel.jsx", "page_port.md", "Port & Hotel Development"),
    ("pages/divisions/infrastructure", "MixedUse.jsx", "page_mixed-use-residential.md", "Mixed Use Residential"),
    ("pages/divisions/infrastructure", "Housing.jsx", "page_affordable-va-hud-housing.md", "Affordable VA/HUD Housing"),
    ("pages/divisions/infrastructure", "DeeLincoln.jsx", "page_dee-lincoln-prime.md", "Dee Lincoln Prime"),
    
    # Productions
    ("pages/divisions/productions", "Movies.jsx", "page_film-production.md", "Film Production"),
    ("pages/divisions/productions", "Documentaries.jsx", "page_documentaries.md", "Documentaries"),
    ("pages/divisions/productions", "Series.jsx", "page_series.md", "Series"),
    ("pages/divisions/productions", "Commercials.jsx", "page_commercial-and-campaigns.md", "Commercials & Campaigns"),
    
    # Education
    ("pages/divisions/education", "GlobalPassportAcademy.jsx", "page_global-passport-academy-gpa.md", "Global Passport Academy"),
    ("pages/divisions/education", "AviationSim.jsx", "page_aviation-simulator.md", "Aviation Simulator"),
    ("pages/divisions/education", "AiPrograms.jsx", "page_ai-2.md", "AI Programs"),
    ("pages/divisions/education", "Finance.jsx", "page_e281a0digital-currencys.md", "Digital Currency Education")
]

BASE_DIR = r"c:/AGY-Projects/B&L WorldWide"
DOCS_DIR = os.path.join(BASE_DIR, "docs/website_content")
SRC_DIR = os.path.join(BASE_DIR, "website/src")

COMPONENT_TEMPLATE = """import React from 'react';
import InnerPageHero from '{import_prefix}components/InnerPageHero/InnerPageHero';
import PageSection from '{import_prefix}components/PageSection/PageSection';

export default function {component_name}() {{
  return (
    <div className="flex flex-col w-full bg-white">
      <InnerPageHero title="{title}" />
      <PageSection>
        <div dangerouslySetInnerHTML={{{{ __html: `{html_content}` }}}} />
      </PageSection>
    </div>
  );
}}
"""

for target_dir, file_name, md_file, title in MAPPING:
    md_path = os.path.join(DOCS_DIR, md_file)
    content = ""
    if os.path.exists(md_path):
        with open(md_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Extremely basic markdown to HTML for this specific legacy format
            # Usually the file starts with '# TITLE\nType: page\n\n'
            # Let's just strip out the first few lines if they match that.
            lines = content.split('\n')
            clean_lines = []
            for line in lines:
                if line.startswith('Type: page') or line.startswith('# '):
                    continue
                clean_lines.append(line)
            content = '\n'.join(clean_lines).replace('`', '\\`').replace('$', '\\$')
    
    full_target_dir = os.path.join(SRC_DIR, target_dir)
    os.makedirs(full_target_dir, exist_ok=True)
    
    # Calculate import prefix
    # if pages -> '../'
    # if pages/divisions/x -> '../../../'
    import_prefix = "../" if target_dir == "pages" else "../../../"
    
    component_name = file_name.replace('.jsx', '')
    jsx_content = COMPONENT_TEMPLATE.format(
        import_prefix=import_prefix,
        component_name=component_name,
        title=title,
        html_content=content
    )
    
    with open(os.path.join(full_target_dir, file_name), 'w', encoding='utf-8') as f:
        f.write(jsx_content)

print("Generated pages successfully.")
