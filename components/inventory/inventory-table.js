"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { AddInventoryItemModal } from './add-inventory-item'

const inventoryData = [
  { id: '001', name: 'Police Radio', category: 'Communication', status: 'In Use', location: 'Unit A' },
  { id: '002', name: 'Bulletproof Vest', category: 'Protection', status: 'In Stock', location: 'Central Storage' },
  { id: '003', name: 'Patrol Car', category: 'Vehicle', status: 'Maintenance', location: 'Garage' },
  { id: '004', name: 'Handcuffs', category: 'Restraints', status: 'In Use', location: 'Unit B' },
  { id: '005', name: 'Taser', category: 'Weapon', status: 'In Stock', location: 'Armory' },
]

export default function InventoryTable() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Inventory List</h2>
        <Button onClick={() => setIsAddModalOpen(true)}>Add New Item</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventoryData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>
                <Link href={`/inventory/${item.id}`} passHref>
                  <Button variant="outline" size="sm" className="mr-2">View</Button>
                </Link>
                <Button variant="outline" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddInventoryItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  )
}