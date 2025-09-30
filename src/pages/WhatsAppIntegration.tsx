import Layout from "@/components/layout/Layout";
import { MessageCircle, Zap, Shield, Globe } from "lucide-react";

export default function WhatsAppIntegration() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">WhatsApp Integration</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Transform your business with OncePay's WhatsApp Business API integration. Send payment links, receive instant confirmations, and manage customer transactions directly through WhatsApp messaging.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold mb-8 text-blue-950">Seamless Payment Integration</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Instant Payment Links</h3>
                      <p className="text-blue-700">Generate and send secure payment links directly through WhatsApp Business API</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Transaction Notifications</h3>
                      <p className="text-blue-700">Real-time payment confirmations and status updates via WhatsApp messages</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Globe className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Customer Support</h3>
                      <p className="text-blue-700">Handle payment queries and support requests directly through WhatsApp chat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp Business</p>
                        <p className="text-sm text-gray-500">Online</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">Hi! I need to make a payment for Order #12345</p>
                      </div>
                      <div className="bg-blue-800 text-white rounded-lg p-3 ml-8">
                        <p className="text-sm">Here's your secure payment link: pay.oncepay.com/xyz123 💳</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">Payment completed! ✅</p>
                      </div>
                      <div className="bg-blue-800 text-white rounded-lg p-3 ml-8">
                        <p className="text-sm">Payment of ₹2,500 received successfully! Order confirmed. 🎉</p>
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
            <h2 className="text-3xl font-bold mb-6 text-blue-950">Start WhatsApp Payments Today</h2>
            <p className="text-blue-700 mb-8">Join 10,000+ businesses using OncePay's WhatsApp integration for seamless payments</p>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105">
              Start Integration
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}