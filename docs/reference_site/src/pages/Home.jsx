import HeroVideo from '../components/HeroVideo';
import Missions from '../components/Missions';
import StatsBar from '../components/StatsBar';
import DivisionsGrid from '../components/DivisionsGrid';
import TrackRecord from '../components/TrackRecord';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroVideo />
      <Missions />
      <StatsBar />
      <DivisionsGrid />
      <TrackRecord />
    </div>
  );
}