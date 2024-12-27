import { SVGProps } from "react";

export const ArrowCollapseIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.056 21.18c.16 0 .319-.058.444-.184a.633.633 0 000-.89l-4.983-4.983 5.05-5.051a.633.633 0 000-.89.633.633 0 00-.889 0l-5.496 5.496a.633.633 0 000 .89l5.429 5.428a.595.595 0 00.445.185z"
        fill="currentColor"
      />
      <rect x={11} y={10} width={1} height={10} rx={0.5} fill="currentColor" />
    </svg>
  );
};
