import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'lucide-react';
import { ThemeToggle } from '../../components/ThemeToggle';

export const LandingHeader= () => {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Layout className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">TaskFlow</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Features
            </Link>
            <Link to="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Pricing
            </Link>
            <ThemeToggle />
            <Link
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
