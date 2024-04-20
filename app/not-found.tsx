"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="flex h-screen items-center justify-center w-full flex-col">
      <Image
        alt="not-found"
        src={"/images/not-found.svg"}
        width={300}
        height={300}
      />
      <Button
        className="w-[200px] mt-3"
        onClick={() => router.push("/dashboard")}
      >
        Back To Dashboard
      </Button>
    </div>
  );
}
