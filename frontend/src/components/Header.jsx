import React from 'react';
import { Layout, LogOut} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const logout= () =>{
    window.localStorage.removeItem("token")
    window.location.href = '/login'
  }
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href='/'>
            <Layout className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </a>
            <h1 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Task Manager</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button onClick={(e) => logout()} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
              <LogOut className="h-4 w-4 mr-2" />
            Logout 
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
