import React from 'react'
import InventoryTable from '@/components/inventory/inventory-table'

export default function InventoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <InventoryTable />
    </div>
  )
}