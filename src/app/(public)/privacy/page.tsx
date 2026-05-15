export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, including when you register a brand account, submit a sponsorship inquiry, or contact us. This includes:

• **Account Information**: Brand name, contact name, email address, password, and website URL.
• **Sponsorship Information**: Package selections, payment information, campaign preferences, and brand assets.
• **Communication Data**: Messages sent through our contact form or email correspondence.
• **Usage Data**: Information about how you interact with our platform, including pages visited, features used, and time spent.
• **Device Information**: IP address, browser type, operating system, and device identifiers.`,
    },
    {
      title: '2. How We Use Information',
      content: `We use the information we collect to:

• Provide, maintain, and improve our sponsorship platform and services.
• Process sponsorship agreements and manage brand partnerships.
• Send transactional emails, campaign reports, and service updates.
• Respond to inquiries and provide customer support.
• Analyze usage patterns to enhance user experience and platform performance.
• Comply with legal obligations and enforce our Terms of Service.
• Detect and prevent fraud, abuse, or security incidents.`,
    },
    {
      title: '3. Information Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:

• **Service Providers**: With trusted third-party vendors who assist in operating our platform (payment processors, email services, analytics providers). These parties are bound by confidentiality obligations.
• **Legal Requirements**: When required by law, subpoena, or government request, or to protect the rights and safety of Live31 and our users.
• **Business Transfers**: In connection with a merger, acquisition, or sale of assets, where user data may be transferred as part of that transaction.
• **With Your Consent**: In any other circumstances with your explicit permission.`,
    },
    {
      title: '4. Data Security',
      content: `We implement industry-standard security measures to protect your information, including:

• Encryption of data in transit using TLS/SSL protocols.
• Secure password hashing and storage.
• Regular security audits and vulnerability assessments.
• Access controls limiting employee access to personal data.

While we take these precautions seriously, no security system is impenetrable. We encourage you to use a strong, unique password for your Live31 account.`,
    },
    {
      title: '5. Cookies',
      content: `We use cookies and similar tracking technologies to enhance your experience. Types of cookies we use:

• **Essential Cookies**: Required for basic platform functionality and security.
• **Analytics Cookies**: Help us understand how users interact with our platform (e.g., Google Analytics).
• **Preference Cookies**: Remember your settings and preferences.

You may control cookie settings through your browser. Note that disabling some cookies may affect platform functionality.`,
    },
    {
      title: '6. Your Rights',
      content: `Depending on your location, you may have the following rights regarding your personal data:

• **Access**: Request a copy of the personal information we hold about you.
• **Correction**: Request correction of inaccurate or incomplete data.
• **Deletion**: Request deletion of your personal data ("right to be forgotten").
• **Portability**: Request your data in a portable, machine-readable format.
• **Opt-Out**: Unsubscribe from marketing communications at any time.

To exercise any of these rights, please contact us at hello@live31.com.`,
    },
    {
      title: '7. Contact Us',
      content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:

**Live31**
Email: hello@live31.com
Phone: +1 (555) 31-LIVE
Location: Pacific Northwest, USA

We aim to respond to all privacy-related inquiries within 5 business days.`,
    },
  ]

  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-10">
            <p className="text-gray-400 text-sm leading-relaxed">
              Live31 (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share information about you when you use our website and sponsorship platform. By using Live31, you agree to the practices described in this policy.
            </p>
          </div>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black text-white mb-4">{section.title}</h2>
                <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                  {section.content.split('\n').map((line, i) => {
                    if (line.startsWith('• **') && line.includes('**:')) {
                      const [bold, ...rest] = line.replace('• **', '').split('**:')
                      return (
                        <p key={i} className="mb-2 pl-4">
                          <span className="text-gray-200 font-semibold">• {bold}:</span>
                          {rest.join('')}
                        </p>
                      )
                    }
                    if (line.startsWith('• ')) {
                      return <p key={i} className="mb-2 pl-4">{line}</p>
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="text-gray-200 font-semibold mb-1">{line.replace(/\*\*/g, '')}</p>
                    }
                    return line ? <p key={i} className="mb-3">{line}</p> : null
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
