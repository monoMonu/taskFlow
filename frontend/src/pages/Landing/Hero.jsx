import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero= () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 lg:overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <span className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                <span className="px-3 py-0.5 text-white dark:text-gray-900 text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-600 dark:bg-indigo-400 rounded-full">
                  New
                </span>
                <span className="ml-4">Just launched our mobile app</span>
              </span>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:mt-5 sm:text-6xl lg:mt-6">
                <span className="block">A better way to</span>
                <span className="block text-indigo-600 dark:text-indigo-400">manage tasks</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Streamline your workflow, collaborate seamlessly, and achieve more with our intuitive task management platform.
              </p>
              <div className="mt-8 sm:mt-12">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link
                    to="/signup"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 sm:px-8"
                  >
                    Get started
                  </Link>
                  <Link
                    to="#demo"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 sm:px-8"
                  >
                    Live demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <ul className="mt-8 space-y-2">
                  {['Real-time collaboration', 'Smart task automation', 'Advanced analytics'].map((feature) => (
                    <li key={feature} className="flex items-center text-gray-500 dark:text-gray-400">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
                alt="Dashboard preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
