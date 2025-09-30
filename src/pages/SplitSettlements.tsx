import Layout from "@/components/layout/Layout";
import { DollarSign, Users, BarChart3, Clock, Shield, Zap } from "lucide-react";

export default function SplitSettlements() {
  const features = [
    {
      icon: DollarSign,
      title: 'Smart Split Rules',
      description: 'Configure complex split rules based on percentage, fixed amounts, or dynamic conditions'
    },
    {
      icon: Users,
      title: 'Marketplace Ready',
      description: 'Built for e-commerce platforms with vendor commissions, platform fees, and tax handling'
    },
    {
      icon: Clock,
      title: 'Instant Settlements',
      description: 'Real-time fund distribution to multiple bank accounts within seconds of payment'
    },
    {
      icon: BarChart3,
      title: 'Settlement Reports',
      description: 'Detailed analytics for each party including transaction history and earnings dashboard'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Automated tax calculations, GST handling, and regulatory compliance for all settlements'
    },
    {
      icon: Zap,
      title: 'Escrow Protection',
      description: 'Optional escrow services with dispute resolution and buyer protection mechanisms'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <DollarSign className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">Split Settlements</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">OncePay's intelligent split settlement engine automatically distributes payments between merchants, partners, and platforms. Perfect for e-commerce marketplaces, delivery platforms, and multi-vendor businesses.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-blue-950">Smart Revenue Distribution</h2>
              <p className="text-blue-700">Powerful features to automate your settlement process</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="animate-fade-in-up bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-blue-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold mb-8 text-blue-950">How It Works</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Configure Split Rules</h3>
                      <p className="text-blue-700">Set up percentage or fixed amount distributions for each party</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Payment Received</h3>
                      <p className="text-blue-700">Customer makes payment through your platform</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Automatic Distribution</h3>
                      <p className="text-blue-700">Funds are instantly split and settled to all parties</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold text-blue-900 mb-4">Settlement Dashboard</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-800 font-medium">Total Payment</span>
                        <span className="text-blue-900 font-bold">₹1,000.00</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-gray-700">Vendor (75%)</span>
                          <span className="text-green-600 font-semibold">₹750.00</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-gray-700">Delivery Partner (15%)</span>
                          <span className="text-green-600 font-semibold">₹150.00</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-gray-700">Platform Fee (8%)</span>
                          <span className="text-green-600 font-semibold">₹80.00</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-gray-700">GST (2%)</span>
                          <span className="text-orange-600 font-semibold">₹20.00</span>
                        </div>
                      </div>
                      <div className="text-center text-sm text-blue-600 mt-4">
                        ✅ Settled in 2.3 seconds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-blue-950">Launch Your Marketplace Today</h2>
            <p className="text-blue-700 mb-8">Power your multi-vendor platform with OncePay's automated split settlement technology</p>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}