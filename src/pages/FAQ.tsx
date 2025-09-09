import Layout from "@/components/layout/Layout";
import { HelpCircle, ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is OncePay?",
      answer: "OncePay is a comprehensive payment platform that enables businesses to accept payments, integrate with WhatsApp, manage split settlements, and automate customer interactions through AI-powered chatbots."
    },
    {
      question: "How does WhatsApp integration work?",
      answer: "Our WhatsApp Business API integration allows you to send payment links, receive real-time notifications, process transactions, and provide customer support directly through WhatsApp messaging."
    },
    {
      question: "What are split settlements?",
      answer: "Split settlements automatically distribute payments between multiple parties based on predefined rules. Perfect for marketplaces, partnerships, and revenue sharing with real-time processing."
    },
    {
      question: "Is OncePay secure?",
      answer: "Yes, OncePay is PCI DSS compliant with bank-grade security, end-to-end encryption, advanced fraud protection, and secure API endpoints to protect all transactions."
    },
    {
      question: "How quickly can I integrate OncePay?",
      answer: "You can start accepting payments in minutes using our simple REST API, pre-built UI components, and comprehensive documentation with code examples."
    },
    {
      question: "What currencies does OncePay support?",
      answer: "OncePay supports multiple currencies including INR, USD, EUR, and more. Check our documentation for the complete list of supported currencies."
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes, we offer 24/7 customer support through multiple channels including email, phone, and WhatsApp. Enterprise customers get dedicated account managers."
    },
    {
      question: "What are the pricing plans?",
      answer: "We offer flexible pricing plans starting from basic packages for small businesses to enterprise solutions. Contact our sales team for custom pricing based on your needs."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <HelpCircle className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-white/90">Find answers to common questions about OncePay's payment solutions</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="animate-fade-in-up bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-blue-200 overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-100/50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <h3 className="text-xl font-semibold text-blue-900">{faq.question}</h3>
                    <ChevronDown className={`w-6 h-6 text-blue-700 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-blue-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-blue-950">Still Have Questions?</h2>
              <p className="text-blue-700 mb-8">Our support team is here to help you get started with OncePay</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                <MessageCircle className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Live Chat</h3>
                <p className="text-blue-700 text-sm mb-4">Chat with our support team</p>
                <Link to="/contact" className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-900 transition-colors inline-block text-center">
                  Start Chat
                </Link>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                <Phone className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Phone Support</h3>
                <p className="text-blue-700 text-sm mb-4">Call us for immediate help</p>
                <a href="tel:+919876543210" className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-900 transition-colors inline-block text-center">
                  +91 98765 43210
                </a>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                <Mail className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Email Support</h3>
                <p className="text-blue-700 text-sm mb-4">Send us your questions</p>
                <a href="mailto:support@oncepay.com" className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-900 transition-colors inline-block text-center">
                  support@oncepay.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}