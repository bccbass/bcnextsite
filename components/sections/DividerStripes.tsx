import React from "react";

const DividerStripes = ({ color = "secondary" }: { color?: string }) => {
  const fillColor = `var(--color-${color})`;

  return (
    <div className="w-screen z-30 h-12 overflow-hidden -mb-2">
      <div className="h-8 bg-primary w-full z-50 -mb-20 mt-2"></div>
      <div className="z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <path
            d="M0 0h10v100H0zM20 0h10v100H20zM40 0h10v100H40zM60 0h10v100H60zM80 0h10v100H80zM100 0h10v100h-10zM120 0h10v100h-10zM140 0h10v100h-10zM160 0h10v100h-10zM180 0h10v100h-10zM200 0h10v100h-10zM220 0h10v100h-10zM240 0h10v100h-10zM260 0h10v100h-10zM280 0h10v100h-10zM300 0h10v100h-10zM320 0h10v100h-10zM340 0h10v100h-10zM360 0h10v100h-10zM380 0h10v100h-10zM400 0h10v100h-10zM420 0h10v100h-10zM440 0h10v100h-10zM460 0h10v100h-10zM480 0h10v100h-10zM500 0h10v100h-10zM520 0h10v100h-10zM540 0h10v100h-10zM560 0h10v100h-10zM580 0h10v100h-10zM600 0h10v100h-10zM620 0h10v100h-10zM640 0h10v100h-10zM660 0h10v100h-10zM680 0h10v100h-10zM700 0h10v100h-10zM720 0h10v100h-10zM740 0h10v100h-10zM760 0h10v100h-10zM780 0h10v100h-10zM800 0h10v100h-10zM820 0h10v100h-10zM840 0h10v100h-10zM860 0h10v100h-10zM880 0h10v100h-10zM900 0h10v100h-10zM920 0h10v100h-10zM940 0h10v100h-10zM960 0h10v100h-10zM980 0h10v100h-10z"
            fill={fillColor}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default DividerStripes;
