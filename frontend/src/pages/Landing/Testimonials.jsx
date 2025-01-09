import React from 'react';

const testimonials = [
  {
    content: "TaskFlow has transformed how our team collaborates. It's intuitive, powerful, and has become an essential part of our daily workflow.",
    author: "Sarah Chen",
    role: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    content: "The best task management tool we've used. The real-time updates and collaboration features are game-changers for our remote team.",
    author: "Michael Rodriguez",
    role: "Engineering Lead at StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    content: "We've seen a 40% increase in team productivity since switching to TaskFlow. The automation features save us hours every week.",
    author: "Emily Thompson",
    role: "Operations Director at GrowthCo",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
  },
];

export const Testimonials= () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            See what industry leaders are saying about TaskFlow
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-8">
                <blockquote className="flex-1">
                  <p className="text-lg text-gray-600 dark:text-gray-300">{testimonial.content}</p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
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
