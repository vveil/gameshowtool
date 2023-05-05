import React from "react";
import PointBox from "./PointBox";

function PointsOverview() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <PointBox points={1} />
        <PointBox points={2} />
        <PointBox points={3} />
        <PointBox points={4} />
        <PointBox points={5} />
      </div>
      <div className="flex gap-2">
        <PointBox points={6} />
        <PointBox points={7} />
        <PointBox points={8} />
        <PointBox points={9} />
        <PointBox points={10} />
      </div>
      <div className="flex gap-2">
        <PointBox points={11} />
        <PointBox points={12} />
        <PointBox points={13} />
        <PointBox points={14} />
        <PointBox points={15} />
      </div>
    </div>
  );
}

export default PointsOverview;
