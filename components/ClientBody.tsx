'use client';

import { ReactNode } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function ClientBody({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      {children}
    </>
  );
}
