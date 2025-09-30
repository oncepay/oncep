import Layout from "@/components/layout/Layout";
import { Code, Globe, Webhook, FileText, Zap, Shield } from "lucide-react";

export default function WebsiteIntegration() {
  const features = [
    {
      icon: Code,
      title: 'Complete Payment API',
      description: 'Full-featured REST API supporting payments, refunds, subscriptions, and multi-party settlements'
    },
    {
      icon: Globe,
      title: 'Drop-in Components',
      description: 'Ready-to-use React, Vue, and JavaScript components for checkout, payment forms, and dashboards'
    },
    {
      icon: Webhook,
      title: 'Smart Webhooks',
      description: 'Real-time event notifications for payments, settlements, disputes, and WhatsApp interactions'
    },
    {
      icon: FileText,
      title: 'Developer Hub',
      description: 'Interactive API docs, code samples, testing tools, and integration tutorials'
    },
    {
      icon: Zap,
      title: 'Sandbox Environment',
      description: 'Complete testing environment with mock data, simulation tools, and debugging features'
    },
    {
      icon: Shield,
      title: 'Production Ready',
      description: 'Enterprise-grade security, 99.9% uptime SLA, and 24/7 monitoring and support'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Code className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">Website Integration</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Integrate OncePay's complete payment suite into your website or mobile app. Our developer-friendly APIs, SDKs, and pre-built components make payment integration effortless.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-blue-950">Powerful Integration Tools</h2>
              <p className="text-blue-700">Complete toolkit for seamless payment integration</p>
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

        {/* Code Example Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold mb-8 text-blue-950">Simple Integration</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Install OncePay SDK</h3>
                      <p className="text-blue-700">Add our payment SDK to your project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Setup Credentials</h3>
                      <p className="text-blue-700">Configure your OncePay API keys and merchant settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Start Accepting Payments</h3>
                      <p className="text-blue-700">Begin processing payments with just a few lines of code</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                  <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm ml-2">integration.js</span>
                    </div>
                    <div className="text-sm font-mono">
                      <div className="text-gray-500">// Install OncePay SDK</div>
                      <div className="text-green-400">npm install @oncepay/web-sdk</div>
                      <br />
                      <div className="text-gray-500">// Initialize with your keys</div>
                      <div><span className="text-blue-400">const</span> <span className="text-white">oncepay = </span><span className="text-yellow-400">new</span> <span className="text-blue-300">OncePay</span><span className="text-white">(&#123;</span></div>
                      <div className="ml-4"><span className="text-white">apiKey: </span><span className="text-orange-400">'pk_live_oncepay_...'</span><span className="text-white">,</span></div>
                      <div className="ml-4"><span className="text-white">webhookSecret: </span><span className="text-orange-400">'whsec_...'</span></div>
                      <div className="text-white">&#125;);</div>
                      <br />
                      <div className="text-gray-500">// Create split payment</div>
                      <div><span className="text-blue-400">const</span> <span className="text-white">payment = </span><span className="text-blue-400">await</span> <span className="text-white">oncepay.</span><span className="text-yellow-300">createSplitPayment</span><span className="text-white">(&#123;</span></div>
                      <div className="ml-4"><span className="text-white">amount: </span><span className="text-orange-400">5000</span><span className="text-white">,</span></div>
                      <div className="ml-4"><span className="text-white">currency: </span><span className="text-orange-400">'INR'</span><span className="text-white">,</span></div>
                      <div className="ml-4"><span className="text-white">splits: [&#123;vendor: </span><span className="text-orange-400">'75%'</span><span className="text-white">, platform: </span><span className="text-orange-400">'25%'</span><span className="text-white">&#125;],</span></div>
                      <div className="ml-4"><span className="text-white">whatsapp: </span><span className="text-orange-400">true</span></div>
                      <div className="text-white">&#125;);</div>
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
            <h2 className="text-3xl font-bold mb-6 text-blue-950">Build the Future of Payments</h2>
            <p className="text-blue-700 mb-8">Join 15,000+ developers building innovative payment experiences with OncePay</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300">
                View Docs
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}