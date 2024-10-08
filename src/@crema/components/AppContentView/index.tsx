import React from 'react';
import AppSuspense from '../AppSuspense';
import AppErrorBoundary from '../AppErrorBoundary';
import { StyledMainContentView } from './index.styled';

type AppContentViewProps = {
  children: React.ReactNode;
};

const AppContentView: React.FC<AppContentViewProps> = ({ children }) => {
  return (
    <StyledMainContentView>
      <AppSuspense>
        <div > 
        <AppErrorBoundary>
          {children}
        </AppErrorBoundary></div>
      </AppSuspense>
    </StyledMainContentView>
  );
};

export default AppContentView;
