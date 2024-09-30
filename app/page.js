import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Users, Wrench, FileText } from 'lucide-react';

const HomePage = () => {
  const features = [
    { title: 'Inventory Management', icon: BarChart, description: 'Track and manage all hardware assets efficiently.' },
    { title: 'Resource Allocation', icon: Users, description: 'Optimize hardware distribution across departments.' },
    { title: 'Maintenance Scheduling', icon: Wrench, description: 'Plan and track regular maintenance activities.' },
    { title: 'Comprehensive Reporting', icon: FileText, description: 'Generate detailed reports for better decision-making.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to PoliceTrack Pro</h1>
        <p className="text-xl text-gray-600">
          Streamline your police department&apos;s hardware inventory management
        </p>
      </header>

      <main>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <feature.icon className="mr-2 h-6 w-6" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <Link href="/dashboard">
            <Button size="lg">
              Go to Dashboard
            </Button>
          </Link>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2024 UnityTech Providers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;