import React from 'react';

import FullPageLayout from './FullPageLayout';
import Loader from './Loader';

export function FullPageLoader() {
  return (
    <FullPageLayout>
      <Loader />
    </FullPageLayout>
  );
}

export default FullPageLoader;
