import Layout from "@/components/layout/Layout";
import { Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: "We collect information you provide when using OncePay services, including payment processing, WhatsApp integration, and account management. This includes transaction data, contact information, and usage analytics to improve our services."
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "We use collected information to process payments, provide customer support, prevent fraud, comply with legal requirements, and enhance our payment platform. Your data helps us deliver secure and reliable payment solutions."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "OncePay employs bank-grade security measures including PCI DSS compliance, end-to-end encryption, secure data centers, and regular security audits to protect your sensitive information."
    },
    {
      icon: Users,
      title: "Data Sharing",
      content: "We do not sell your personal information. We may share data with trusted partners for payment processing, compliance with legal obligations, and service improvements, always with appropriate safeguards."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Shield className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-white/90">Your privacy and data security are our top priorities</p>
              <div className="mt-8 inline-flex items-center bg-white/10 rounded-full px-6 py-3">
                <span className="text-sm">Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {sections.map((section, index) => (
                <div key={index} className="animate-fade-in-up bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 text-blue-900">{section.title}</h2>
                      <p className="text-blue-700 leading-relaxed">{section.content}</p>
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
              <Mail className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-blue-950">Privacy Questions?</h2>
              <p className="text-blue-700 mb-6">For privacy concerns or questions about this policy, contact our privacy team</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:privacy@oncepay.com" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors text-center">
                  privacy@oncepay.com
                </a>
                <Link to="/contact" className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors text-center">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}