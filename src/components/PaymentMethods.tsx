import React from 'react';
import { Smartphone, CreditCard, Wallet, QrCode, Banknote, Coins } from 'lucide-react';

const PaymentMethods = () => {
  const methods = [
    {
      icon: Smartphone,
      title: 'Mobile Payments',
      description: 'Pay with your smartphone using NFC technology or mobile apps.',
      image: 'https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      popular: true
    },
    {
      icon: CreditCard,
      title: 'Contactless Cards',
      description: 'Tap your card or device for quick and secure payments.',
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      popular: false
    },
    {
      icon: Wallet,
      title: 'Digital Wallets',
      description: 'Store multiple payment methods in one secure digital wallet.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      popular: true
    },
    {
      icon: QrCode,
      title: 'QR Code Payments',
      description: 'Scan QR codes to make instant payments without physical contact.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      popular: false
    },
    {
      icon: Banknote,
      title: 'Online Banking',
      description: 'Transfer money directly from your bank account online.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      popular: false
    },
    {
      icon: Coins,
      title: 'Cryptocurrency',
      description: 'Use digital currencies for decentralized payments.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      popular: false
    }
  ];

  return (
    <section id="methods" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Payment Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the various digital payment methods available today. 
            Each offers unique benefits for different use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {method.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <method.icon className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">?</span>
            </div>
            <span className="text-gray-700 font-medium">
              Not sure which method is right for you?
            </span>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
              Get Help Choosing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;