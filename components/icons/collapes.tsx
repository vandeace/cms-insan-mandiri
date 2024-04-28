import { SVGProps } from "react";

export const CollapseIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="17" cy="17" r="17" fill="white" />
      <path
        d="M20.1688 13.1212C20.2485 13.0386 20.3495 13 20.4504 13C20.5567 13 20.6577 13.0386 20.7321 13.1212L24.1701 16.6866C24.3242 16.8464 24.3242 17.1109 24.1701 17.2707L20.6895 20.8801C20.5354 21.04 20.2804 21.04 20.1263 20.8801C19.9722 20.7203 19.9722 20.4558 20.1263 20.296L22.9189 17.4L14.3856 17.4C14.1726 17.4 13.9999 17.2209 13.9999 17C13.9999 16.7791 14.1726 16.6 14.3856 16.6L22.9601 16.6L20.1688 13.7054C20.0147 13.5455 20.0147 13.281 20.1688 13.1212Z"
        fill="#2B2B2B"
      />
      <path d="M12 11V24" stroke="#2B2B2B" strokeLinecap="round" />
    </svg>
  );
};
