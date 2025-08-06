import React from 'react';
import { Clock, Shield, Globe, Zap, Users, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Instant Transactions',
      description: 'Send and receive money in seconds, not days. Digital payments eliminate waiting times.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced encryption and fraud protection keep your money safer than cash.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Send money anywhere in the world without traditional banking restrictions.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Lower Fees',
      description: 'Reduced transaction costs compared to traditional banking and wire transfers.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Financial Inclusion',
      description: 'Provides banking services to the unbanked population worldwide.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Economic Growth',
      description: 'Boosts economic activity by making transactions easier and more efficient.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Digital Payments?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital payments offer numerous advantages over traditional cash and check transactions. 
            Here's how they're transforming the financial landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Go Digital?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join millions of people worldwide who have already made the switch to digital payments. 
              It's easier than you think!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Your Digital Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;