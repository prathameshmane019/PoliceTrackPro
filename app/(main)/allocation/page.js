"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const allocationData = [
  { id: '001', asset: 'Police Radio #123', assignedTo: 'Officer John Doe', unit: 'Unit A', date: '2023-07-01' },
  { id: '002', asset: 'Patrol Car #456', assignedTo: 'Sergeant Jane Smith', unit: 'Unit B', date: '2023-07-05' },
  { id: '003', asset: 'Bulletproof Vest #789', assignedTo: 'Officer Mike Johnson', unit: 'Unit C', date: '2023-07-10' },
]

export default function AllocationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resource Allocation</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Allocated Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Available Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">567</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Allocation Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">68.5%</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Recent Allocations</h2>
        <Button>New Allocation</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Asset</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allocationData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.asset}</TableCell>
              <TableCell>{item.assignedTo}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="outline" size="sm">Deallocate</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}