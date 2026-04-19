import React from 'react';
import InnerPageHero from '../components/InnerPageHero/InnerPageHero';
import PageSection from '../components/PageSection/PageSection';

const teamMembers = [
  {
    name: "Captain Craig Baptiste",
    bio: "With over 23,000 flight hours across Boeing and Airbus fleets, Captain Craig Baptiste brings unmatched expertise in global air carrier operations. A graduate of Embry-Riddle Aeronautical University and attended the U.S. Air Force Academy, he is a proven leader in high-stakes aviation environments. As a key figure in the MAJESTICS P.L.T initiative, he ensures that all logistics and aeronautical components are executed with precision, safety, and global scalability."
  },
  {
    name: "Mr. Ralph Ledee",
    bio: "Ralph Ledee is a Caribbean business leader and aviation entrepreneur with a legacy rooted in distribution, real estate, and travel retail. As principal of ILTT and founder of rum jumbie, he transformed a family-run liquor store into a $60M regional powerhouse, representing world-class brands across the Caribbean. With holdings spanning spirits, food, fuel and hospitality, Ralph continues to drive dynamic ventures and philanthropic initiatives, building on a family legacy that dates back to 18th century St. Barthélemy."
  },
  {
    name: "Mr. George Hazy",
    bio: "George is a senior aviation executive with over 30 years of experience leading major commercial and regional operations. He served as SVP of customer service for American Eagle, overseeing 1,600 daily flights across 180 stations, and led American Airlines' largest international and cargo expansion in Miami. He directed multi-billion-dollar terminal projects in Miami and Los Angeles, and as President of Executive Airlines, doubled operations while achieving record profitability."
  },
  {
    name: "Lt. Col® Mauricio Zuleta",
    bio: "A seasoned aviator and R&D leader with over 7,300 flight hours and experience leading science and technology programs for the Colombian Air Force and Ministry of Defense. His expertise spans robotics, SW development, and intelligent system design. With deep insight into aeronautical operations and supply chain strategy, he brings the technical precision and visionary leadership that power Majestic P.L.T.'s global adaptability and founder-focused innovation."
  },
  {
    name: "Mr. Robert Asprilla",
    bio: "Robert is a seasoned strategist who has spent decades at the intersection of policy, advocacy, and community empowerment, bridging government, business, labor and grassroots movements to advance equity across the United States and the Americas. As CEO of Global Passport Academy and co-founder of the Afro Interamerican Forum on Climate Change (with MIT) he brings global reach to local impact, championing sustainability, education, and inclusive development."
  },
  {
    name: "Captain Jonathan Earl Baptiste",
    bio: "A second-generation aviation and business leader, Jonathan is an airline captain with American Airlines and holds degrees in aeronautics and communications. Fluent in English and Spanish, he blends global business experience with creative strategy, continuing the Baptiste legacy across aviation, real estate, and international markets."
  },
  {
    name: "Daniel Lohneiss",
    bio: "An airline pilot with American Airlines and former COO of a Google Partner technology company, Daniel Lohneiss brings a rare convergence of cockpit command and C-suite leadership to B&L Worldwide. His experience across service industry consulting, educational technology, and aviation instructor for both Part 141 and 135 programs, makes him uniquely qualified in teaching and leading across many verticals."
  },
  {
    name: "Mr. Todor Ivanov",
    bio: "Todor Ivanov is the Founder and CEO of Splendor Labs, leading the development of high-performance blockchain infrastructure for AI-native payments and machine commerce. With 20+ years in capital markets, he has driven innovations across fintech, blockchain, and AI. Todor also leads WhiteRock's venture capital investment strategy."
  },
  {
    name: "Mr. Noah Ledee",
    bio: "Noah is a commercial pilot and senior executive active in the family's Caribbean real estate and distribution business. A graduate of Embry-Riddle with a degree in economics, he leads development projects in St. Maarten and St. Barths, and has expanded into aviation charter services and a U.S. based organic food and beverage startup."
  },
  {
    name: "William L. Foley Jr. \"Bill\"",
    bio: "Graduate of Long Island University. General Manager / Executive Vice President/COO of Cheney Brother Inc. (1997-2020), overseeing direction and strong growth from a $75 million facility to $2.3 billion in sales. Guided the expansion of distribution centers throughout the southeast with the help of 3,000 employees."
  },
  {
    name: "Dr. Ngoie Joel Nshisso",
    bio: "Dr. Joel, a leading economist, professor, and author is in a senior position as an economic consultant with the Democratic Republic of the Congo and the African Union Mission in Washington DC, presently serving as a senior advisor to the Minister of trade and spearheading the strategic alliance with Splendor."
  },
  {
    name: "Ngoie Yedidia Nshisso",
    bio: "A Congolese-American leader known for disciplined execution and a deep commitment to service. He has held leadership roles across academia, ministry, and civic organizations. He also serves in the U.S. Army National Guard. As Vice President of FICE USA, he focuses on diaspora empowerment and strategic planning."
  },
  {
    name: "Marvin Bon",
    bio: "Marvin Bon is a veteran executive with extensive experience in government, aerospace, and commercial operations. A former U.S. Air Force officer, he managed financial planning for the $12.8 billion Space Shuttle Program. With expertise in logistics, financial management, and over 250 hours as a licensed private pilot, he brings disciplined leadership to B&L Worldwide."
  },
  {
    name: "Michael Ruley",
    bio: "Michael Ruley is an experienced CEO and board member with a strong record leading private equity–backed companies across technology, bioscience, and telecommunications. As CEO of Allied BioScience, he oversaw the development of antimicrobial coatings used worldwide. His expertise includes operational leadership, capital raising, and domestic and international expansion."
  },
  {
    name: "Julian Rodarte",
    bio: "Nationally recognized chef, restaurateur, and culinary strategist. Named one of Zagat's “30 Under 30 Most Innovative Chefs in America.” As Culinary Director of Dee Lincoln Concepts, Rodarte oversees menu strategy and operations for a portfolio that includes Dee Lincoln Prime, driving growth through elevated menu engineering and experiential dining programs."
  },
  {
    name: "Dee Lincoln",
    bio: "A trailblazing force in the luxury hospitality world, Dee Lincoln has spent over three decades redefining leadership and the dining scene. She co-founded Del Frisco’s Double Eagle Steakhouse and later launched Dee Lincoln Prime, merging modern sensibilities with timeless dining. Her impact broke barriers in the traditionally male-dominated steakhouse industry."
  },
  {
    name: "Steve Orozco",
    bio: "Currently Operations Director for Dee Lincoln Concepts overseeing restaurants at the Cowboys World Headquarters. Has served as Sommelier, Wine Director, and General Manager for premium establishments. Certified by the Court of Master Sommeliers with extensive background in international rare, vintage, and vertical depth wines."
  }
];

export default function Team() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="/images/shared_08.jpg" 
            alt="Leadership Team Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide uppercase mb-4">
            Meet Our Leadership
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            A diverse coalition of industry veterans, strategic visionaries, and operational specialists driving global excellence.
          </p>
        </div>
      </div>

      {/* Team Roster Section */}
      <PageSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
              >
                {/* Decorative top border */}
                <div className="h-1 w-full bg-slate-200 group-hover:bg-blue-600 transition-colors duration-300"></div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-slate-900 tracking-wide mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed text-sm flex-grow">
                    {member.bio}
                  </p>
                  
                  {/* Small decorative element at bottom */}
                  <div className="mt-8 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="h-px w-8 bg-blue-500"></span>
                    <span className="ml-2 text-xs font-semibold text-blue-600 tracking-wider uppercase">Executive Profile</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </PageSection>
    </div>
  );
}
