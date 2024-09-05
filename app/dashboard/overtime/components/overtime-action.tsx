import { Button } from '@/components/ui/button';
import { TOvertime } from '@/types/overtime';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { FiEdit2, FiEye } from 'react-icons/fi';
import { OvertimeModalAction } from './overtime-modal';
import { TUserData } from '@/types/auth';

interface OvertimeActionProps {
  tipe: 'approve' | 'detail';
  overtimeData: TOvertime;
}

export const OvertimeAction = (props: OvertimeActionProps) => {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(true);
  };

  const session = useSession();
  const user = session.data?.user as unknown as TUserData;

  return (
    <>
      {modal && (
        <OvertimeModalAction
          closeModal={() => setModal(!modal)}
          modalIsOpen={modal}
          overtimeData={props.overtimeData}
        />
      )}

      <Button onClick={() => onClick()} variant="default">
        {props.tipe === 'approve' && user.role === 'SUPER_ADMIN' ? (
          <>
            <FiEdit2 className="mr-2" /> <span>Approve</span>
          </>
        ) : (
          <>
            <FiEye className="mr-2" />
            <span>Detail</span>
          </>
        )}
      </Button>
    </>
  );
};
