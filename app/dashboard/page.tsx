"use client";
import { Button } from "@/components/button";
import React from "react";
import { disconnect } from "@/app/api/lib/action";

export default function page() {
  return (
    <div>
      page
      <Button
        onClick={() => {
          disconnect();
        }}
      >
        logout
      </Button>
    </div>
  );
}
