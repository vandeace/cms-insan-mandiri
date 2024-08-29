import { SVGProps } from "react";

export const CreateIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_248_706)" fill="currentColor">
        <path d="M7.998 16C3.593 15.994-.006 12.385 0 7.98.006 3.588 3.618-.007 8.017 0 12.406.007 16 3.61 15.996 8c-.004 4.4-3.61 8.006-7.998 8zM8 14.54c3.61-.003 6.524-2.92 6.534-6.54.01-3.603-2.92-6.538-6.531-6.541-3.612-.004-6.557 2.942-6.546 6.547.011 3.611 2.94 6.536 6.543 6.534z" />
        <path d="M8.73 7.272h2.154c.424.001.74.31.742.72a.722.722 0 01-.743.737c-.652.003-1.303.001-1.955.001H8.73v.2c0 .657.003 1.315-.002 1.972-.002.369-.277.68-.619.72-.39.046-.715-.166-.814-.535a.855.855 0 01-.022-.218c-.002-.646-.001-1.292-.001-1.938v-.2h-.537c-.56 0-1.122.002-1.682-.002-.383-.003-.682-.285-.727-.674-.038-.332.202-.67.548-.76a.944.944 0 01.235-.022c.702-.003 1.404-.002 2.107-.004.01 0 .021-.005.055-.013v-.174-1.971c.001-.434.31-.758.722-.76.41-.004.733.322.735.75.004.658.001 1.315.001 1.972l.001.2z" />
      </g>
      <defs>
        <clipPath id="clip0_248_706">
          <path fill="currentColor" d="M0 0H15.9959V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
