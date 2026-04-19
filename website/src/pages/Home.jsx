import React from 'react'
import HeroVideo from '../components/HeroVideo/HeroVideo'
import Missions from '../components/Missions/Missions'
import StatsBar from '../components/StatsBar/StatsBar'
import DivisionsGrid from '../components/Divisions/DivisionsGrid'
import CompanyStory from '../components/CompanyStory/CompanyStory'
import TrackRecord from '../components/TrackRecord/TrackRecord'
import LeadershipTeaser from '../components/LeadershipTeaser/LeadershipTeaser'
import NewsSection from '../components/NewsSection/NewsSection'
import PartnersSection from '../components/PartnersSection/PartnersSection'

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroVideo />
      <Missions />
      <StatsBar />
      <DivisionsGrid />
      <CompanyStory />
      <TrackRecord />
      <LeadershipTeaser />
      <NewsSection />
      <PartnersSection />
    </div>
  )
}
