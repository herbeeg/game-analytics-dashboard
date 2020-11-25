import React from 'react';
import DashboardOverview from '../components/DashboardOverview';
import { MenuTopBar } from '../components/MenuTopBar';

export default function DashboardHome() {
  return (
    <div>
      <MenuTopBar />
      <DashboardOverview />
    </div>
  );
}
