import React from "react";
import emptyImage from "@/public/images/no-data.png";
import Image from "next/image";

const DataNotFound = ({ message }: { message?: string }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center h-96">
      <Image src={emptyImage} alt="empty data" width={300} height={300} />
      <p className="text-sm font-bold">{message}</p>
    </div>
  );
};

export default DataNotFound;
