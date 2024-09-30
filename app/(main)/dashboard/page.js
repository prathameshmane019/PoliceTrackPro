import React from 'react'
import OverviewCards from '@/components/layout/dashboard/overview-card'
import AssetAllocationChart from '@/components/layout/dashboard/asset-allocation-chart'
import RecentActivities from '@/components/layout/dashboard/recent-activities'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <OverviewCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <AssetAllocationChart />
        </div>
        <div>
          <RecentActivities />
        </div>
      </div>
    </div>
  )
}