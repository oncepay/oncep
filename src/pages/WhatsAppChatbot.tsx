import Layout from '@/components/layout/Layout';
import { Bot, MessageCircle, Clock, Users, TrendingUp, Shield, Zap } from 'lucide-react';

export default function WhatsAppChatbot() {
  const features = [
    {
      icon: Bot,
      title: 'Smart Payment Assistant',
      description: 'AI chatbot that handles payment inquiries, generates payment links, and processes transactions automatically'
    },
    {
      icon: Clock,
      title: 'Instant Order Support',
      description: 'Automated order status updates, tracking information, and delivery notifications via WhatsApp'
    },
    {
      icon: Users,
      title: 'Payment Processing',
      description: 'Complete payment workflows including link generation, status tracking, and confirmation messages'
    },
    {
      icon: TrendingUp,
      title: 'Customer Analytics',
      description: 'Track payment conversations, success rates, and customer interaction patterns'
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      description: 'AI-powered fraud detection and secure payment verification through WhatsApp'
    },
    {
      icon: Zap,
      title: 'OncePay Integration',
      description: 'Seamlessly connects with OncePay payment gateway and merchant dashboard'
    }
  ];



  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Bot className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">WhatsApp AI Chatbot</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Deploy OncePay's AI-powered WhatsApp chatbot to automate customer service, process payments, handle order inquiries, and provide instant support 24/7 through WhatsApp Business API.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-blue-950">Powerful AI Features</h2>
              <p className="text-blue-700">Everything you need to automate customer interactions</p>
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
                <h2 className="text-3xl font-bold mb-8 text-blue-950">See It In Action</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Instant Responses</h3>
                      <p className="text-blue-700">AI responds to customer queries within seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">24/7 Availability</h3>
                      <p className="text-blue-700">Never miss a customer inquiry, day or night</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Smart Analytics</h3>
                      <p className="text-blue-700">Track performance and improve over time</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">AI Assistant</p>
                        <p className="text-sm text-gray-500">Always Online</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">I want to pay for my order #ORD12345</p>
                      </div>
                      <div className="bg-blue-800 text-white rounded-lg p-3 ml-8">
                        <p className="text-sm">Order found! Amount: ₹1,250. Here's your payment link: pay.oncepay.com/ord12345 💳</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">Payment done!</p>
                      </div>
                      <div className="bg-blue-800 text-white rounded-lg p-3 ml-8">
                        <p className="text-sm">Payment confirmed! ✅ Your order will be shipped within 24 hours. Track: TRK789</p>
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
            <h2 className="text-3xl font-bold mb-6 text-blue-950">Deploy OncePay AI Chatbot</h2>
            <p className="text-blue-700 mb-8">Automate 80% of payment inquiries and boost customer satisfaction with AI-powered WhatsApp support</p>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}