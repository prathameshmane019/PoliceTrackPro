"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart, Clipboard, Home, Package, Hammer, ChevronLeft, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Maintenance', href: '/maintenance', icon: Hammer },
  { name: 'Allocation', href: '/allocation', icon: Clipboard },
  { name: 'Reports', href: '/reports', icon: BarChart },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside 
      className={`bg-[#1e293b] text-white ${isExpanded ? 'w-64' : 'w-20'} min-h-screen p-4 transition-all duration-300 ease-in-out relative`}
    >
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="absolute -right-3 top-4 bg-[#1e293b] p-1 rounded-full"
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
      <nav className="space-y-2 mt-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center ${isExpanded ? 'justify-start space-x-2' : 'justify-center'} p-2 rounded-lg hover:bg-[#2c3e50] transition-colors ${
              pathname === item.href ? 'bg-[#2c3e50]' : ''
            }`}
          >
            <item.icon className="w-5 h-5" />
            {isExpanded && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}