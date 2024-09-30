"use client"
import React from 'react'
import { Bell, Search, Settings } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">PoliceTrack Pro</h1>
          <div className="flex items-center">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full sm:w-64 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Button variant="ghost" size="icon" className="ml-2">
              <Bell size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="ml-2">
              <Settings size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}