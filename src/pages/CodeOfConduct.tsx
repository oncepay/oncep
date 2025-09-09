import Layout from "@/components/layout/Layout";
import { Users, Heart, Shield, AlertCircle, CheckCircle, XCircle, Flag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CodeOfConduct() {
  const principles = [
    {
      icon: Heart,
      title: "Respect & Kindness",
      description: "Treat all community members with respect, empathy, and professional courtesy"
    },
    {
      icon: Users,
      title: "Inclusive Environment",
      description: "Welcome people of all backgrounds, identities, and experience levels"
    },
    {
      icon: Shield,
      title: "Safe Space",
      description: "Maintain a harassment-free environment for everyone to collaborate"
    }
  ];

  const expectedBehaviors = [
    "Use welcoming and inclusive language",
    "Respect differing viewpoints and experiences", 
    "Provide constructive feedback gracefully",
    "Focus on what's best for the community",
    "Show empathy towards other members",
    "Help newcomers feel welcome"
  ];

  const unacceptableBehaviors = [
    "Harassment or discrimination of any kind",
    "Offensive, derogatory, or inappropriate comments",
    "Personal attacks or trolling behavior",
    "Sharing private information without consent",
    "Spam, fraud, or malicious activities",
    "Violation of platform terms or laws"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Users className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <h1 className="text-5xl font-bold mb-6">Code of Conduct</h1>
              <p className="text-xl text-white/90">Building a respectful and inclusive community</p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Core Principles</h2>
              <p className="text-blue-700">The foundation of our community values</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {principles.map((principle, index) => (
                <div key={index} className="animate-fade-in-up bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 text-center">
                  <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{principle.title}</h3>
                  <p className="text-blue-700">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behaviors Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Expected Behaviors */}
              <div className="animate-fade-in-left">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-semibold text-green-900">Expected Behavior</h3>
                  </div>
                  <div className="space-y-4">
                    {expectedBehaviors.map((behavior, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-green-800">{behavior}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Unacceptable Behaviors */}
              <div className="animate-fade-in-right">
                <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-2xl p-8 border border-red-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <XCircle className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-semibold text-red-900">Unacceptable Behavior</h3>
                  </div>
                  <div className="space-y-4">
                    {unacceptableBehaviors.map((behavior, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-red-800">{behavior}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 animate-fade-in-up">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-blue-800 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Enforcement & Reporting</h3>
                  <p className="text-blue-700 mb-6">
                    Community leaders and OncePay staff are responsible for enforcing standards of acceptable behavior. 
                    Violations may result in temporary or permanent bans from community spaces and services.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">How to Report</h4>
                      <p className="text-blue-700 text-sm">Report violations to conduct@oncepay.com with details and evidence</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Response Time</h4>
                      <p className="text-blue-700 text-sm">All reports are reviewed within 24 hours and handled confidentially</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-2xl p-8 border border-orange-200">
              <Flag className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-orange-900">Report a Violation</h2>
              <p className="text-orange-800 mb-6">
                If you experience or witness unacceptable behavior, please report it immediately. 
                All reports are handled confidentially and investigated promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:conduct@oncepay.com" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center">
                  conduct@oncepay.com
                </a>
                <Link to="/contact" className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors text-center">
                  Anonymous Report
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}