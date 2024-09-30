"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Hammer, Users, ShieldCheck } from 'lucide-react'

const overviewItems = [
  { title: 'Total Assets', value: '10,245', icon: Package, change: '+20.1%' },
  { title: 'Maintenance Due', value: '345', icon: Hammer, change: '+180.1%' },
  { title: 'Resources Allocated', value: '8,234', icon: Users, change: '+19%' },
  { title: 'Compliance Rate', value: '98.5%', icon: ShieldCheck, change: '+7%' },
]

export default function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {overviewItems.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">
              {item.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}