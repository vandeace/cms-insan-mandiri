'use client';
import FilterSearch from '@/components/filter/search';
import React from 'react';

export default function TableFilter() {
  return (
    <div className="grid grid-cols-3">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <FilterSearch label="Kantor" name="search" placeholder="Cari Kantor" />
      </div>
    </div>
  );
}
