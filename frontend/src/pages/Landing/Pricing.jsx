import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for individuals and small teams',
    features: [
      'Up to 5 team members',
      'Basic task management',
      'Real-time collaboration',
      '5GB storage',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$4',
    description: 'Best for growing teams and organizations',
    features: [
      'Unlimited team members',
      'Advanced task management',
      'Custom workflows',
      '50GB storage',
      'Priority support',
      'Advanced analytics',
      'API access',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'Unlimited storage',
      'SLA guarantee',
      'Advanced security',
      'Custom training',
    ],
  },
];

export const Pricing= () => {
  return (
    <div id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl ${
                plan.featured
                  ? 'bg-white dark:bg-gray-900 ring-2 ring-indigo-600 shadow-xl'
                  : 'bg-white dark:bg-gray-900 shadow-sm'
              } p-8`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500 dark:text-gray-400">/month</span>}
                </p>
              </div>

              <ul className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-semibold ${
                  plan.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact sales' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
