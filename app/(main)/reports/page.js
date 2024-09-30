import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const reports = [
  { title: 'Asset Utilization Report', description: 'Overview of asset usage across departments' },
  { title: 'Maintenance Cost Report', description: 'Breakdown of maintenance expenses' },
  { title: 'Compliance Audit Report', description: 'Compliance status of all assets' },
  { title: 'Resource Allocation Report', description: 'Distribution of resources across units' },
]

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{report.description}</p>
              <Button>Generate Report</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}