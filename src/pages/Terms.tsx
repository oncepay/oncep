import Layout from "@/components/layout/Layout";
import { FileText, CheckCircle, Scale, CreditCard, Code } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  const terms = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: "By accessing and using OncePay services, including payment processing, WhatsApp integration, and API services, you accept and agree to be bound by these terms and conditions.",
      highlight: "Agreement Required"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      content: "OncePay provides payment processing services subject to applicable fees, transaction limits, and compliance requirements. All transactions must comply with relevant financial regulations.",
      highlight: "Financial Services"
    },
    {
      icon: Code,
      title: "API Usage",
      content: "API access is provided for integration purposes with rate limits and usage restrictions. Misuse of APIs or attempts to compromise system security may result in service suspension.",
      highlight: "Developer Terms"
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: "OncePay's liability is limited to the extent permitted by law. We provide services \"as is\" and make no warranties regarding uninterrupted service or error-free operation.",
      highlight: "Legal Protection"
    }
  ];

  const keyPoints = [
    "Lawful use of services only",
    "Secure account credentials",
    "Compliance with financial regulations", 
    "Respect API rate limits",
    "Report security issues promptly",
    "Follow acceptable use policies"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <FileText className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">Terms and Conditions</h1>
              <p className="text-xl text-white/90">Terms governing the use of OncePay services</p>
              <div className="mt-8 inline-flex items-center bg-white/10 rounded-full px-6 py-3">
                <span className="text-sm">Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-blue-950">Key Requirements</h2>
              <p className="text-blue-700">Essential points for using OncePay services</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {keyPoints.map((point, index) => (
                <div key={index} className="animate-fade-in-up bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p className="text-blue-900 font-medium">{point}</p>
                </div>
              ))}
            </div>

            {/* Detailed Terms */}
            <div className="grid md:grid-cols-2 gap-8">
              {terms.map((term, index) => (
                <div key={index} className="animate-fade-in-up bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <term.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-semibold text-blue-900">{term.title}</h3>
                        <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">{term.highlight}</span>
                      </div>
                      <p className="text-blue-700 leading-relaxed">{term.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold mb-4 text-blue-950">Questions About Terms?</h2>
              <p className="text-blue-700 mb-6">Contact our legal team for any questions about these terms and conditions</p>
              <a href="mailto:legal@oncepay.com" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-block">
                legal@oncepay.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}