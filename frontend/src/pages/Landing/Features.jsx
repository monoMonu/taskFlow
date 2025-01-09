import React from 'react';
import { Calendar, Users, Bell, BarChart, Lock, Zap } from 'lucide-react';

const features = [
  {
    name: 'Task Planning',
    description: 'Plan and organize tasks with intuitive drag-and-drop interfaces and smart scheduling.',
    icon: Calendar,
  },
  {
    name: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates and team communication tools.',
    icon: Users,
  },
  {
    name: 'Smart Notifications',
    description: 'Stay informed with intelligent notifications about task updates and deadlines.',
    icon: Bell,
  },
  {
    name: 'Analytics & Insights',
    description: 'Track productivity and team performance with detailed analytics and reports.',
    icon: BarChart,
  },
  {
    name: 'Enterprise Security',
    description: 'Keep your data safe with enterprise-grade security and compliance features.',
    icon: Lock,
  },
  {
    name: 'Automation',
    description: 'Automate routine tasks and workflows to save time and reduce errors.',
    icon: Zap,
  },
];

export const Features= () => {
  return (
    <div id="features" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to manage tasks effectively
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            A comprehensive suite of features designed to help teams collaborate and achieve their goals.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 left-4">
                    <span className="inline-flex p-3 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                      <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </span>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
