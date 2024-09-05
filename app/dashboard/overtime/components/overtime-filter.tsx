'use client';
import BranchFilter from '@/components/filter/branch';

export default function TableFilter() {
  return (
    <div className="grid grid-cols-3">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <BranchFilter />
      </div>
    </div>
  );
}
