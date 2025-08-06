import React from 'react';
import { Lock, Eye, UserCheck, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Your payment data is encrypted from the moment you send it until it reaches its destination.',
      level: 'Essential'
    },
    {
      icon: UserCheck,
      title: 'Multi-Factor Authentication',
      description: 'Additional layers of security ensure only you can access your accounts.',
      level: 'Advanced'
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: 'AI-powered systems monitor transactions 24/7 to detect suspicious activity.',
      level: 'Professional'
    },
    {
      icon: RefreshCw,
      title: 'Automatic Updates',
      description: 'Security protocols are continuously updated to stay ahead of threats.',
      level: 'Essential'
    }
  ];

  const tips = [
    'Always use strong, unique passwords for your payment accounts',
    'Enable two-factor authentication whenever possible',
    'Only make payments on secure, trusted websites',
    'Monitor your accounts regularly for unauthorized transactions',
    'Keep your payment apps and devices updated',
    'Never share your payment credentials with anyone'
  ];

  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital payments use advanced security measures to protect your money and personal information. 
            Learn how these systems keep you safe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Digital Security"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Advanced Security Features
            </h3>
            
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {feature.level}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Stay Safe Online
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                While digital payments are secure, following best practices helps ensure your safety. 
                Here are essential tips to protect yourself.
              </p>
            </div>

            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Protected by Industry Standards
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Digital payment systems comply with international security standards including 
              PCI DSS, ISO 27001, and banking regulations to ensure your money stays safe.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More About Security
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;