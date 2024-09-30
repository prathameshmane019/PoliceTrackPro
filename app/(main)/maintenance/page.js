import React from 'react'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const maintenanceData = [
  { id: '001', asset: 'Patrol Car #123', type: 'Routine Service', date: '2023-07-15', status: 'Scheduled' },
  { id: '002', asset: 'Police Radio #456', type: 'Battery Replacement', date: '2023-07-18', status: 'In Progress' },
  { id: '003', asset: 'CCTV System', type: 'Software Update', date: '2023-07-20', status: 'Pending' },
  { id: '004', asset: 'Firearm #789', type: 'Cleaning', date: '2023-07-22', status: 'Scheduled' },
  { id: '005', asset: 'Bulletproof Vest #101', type: 'Inspection', date: '2023-07-25', status: 'Scheduled' },
]

export default function MaintenancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance Schedule</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Upcoming Maintenance</h2>
        <Button>Schedule Maintenance</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Asset</TableHead>
            <TableHead>Maintenance Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {maintenanceData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.asset}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Update</Button>
                <Button variant="outline" size="sm">Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}