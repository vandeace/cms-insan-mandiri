'use client';

import EmployeeForm from './employee-form';
import { useGetDetailEmployee } from '@/hooks/api/use-get-detail-employee';
import SkeletonForm from '@/components/skeleton-state/skeleton-form';

interface TEmployeeWrapper {
  slug: string | undefined;
}

const EmployeeWrapper: React.FC<TEmployeeWrapper> = ({ slug }) => {
  const userId = slug !== 'add' ? (slug as string) : undefined;
  const { data: dataEmployee, isFetching } = useGetDetailEmployee(userId);

  if (isFetching) {
    return <SkeletonForm />;
  }

  return <EmployeeForm dataEmployee={dataEmployee?.data} />;
};

export default EmployeeWrapper;
