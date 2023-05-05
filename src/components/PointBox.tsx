interface PointsOverviewProps {
  points: number;
}

const PointsOverview = ({ points }: PointsOverviewProps) => {
  return (
    <div className="flex justify-center items-center border-l-fuchsia-800 bg-gray-300 w-8 h-8 text-gray-900">{points}</div>
  );
};

export default PointsOverview;
