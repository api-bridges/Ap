export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using the Live31 platform, website, or any associated services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, you may not use our services. These terms apply to all users, including brand sponsors, visitors, and any other individuals accessing the platform.

We reserve the right to update these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.`,
    },
    {
      title: '2. Use of Service',
      content: `Live31 grants you a limited, non-exclusive, non-transferable license to access and use our platform for its intended purpose — connecting brands with wilderness adventure content and audiences.

You agree not to:
• Use the platform for any unlawful purpose or in violation of any regulations.
• Attempt to gain unauthorized access to any portion of the platform.
• Transmit viruses, malware, or any code of a destructive nature.
• Reproduce, duplicate, copy, sell, or resell any portion of the service without written permission.
• Engage in any conduct that restricts or inhibits any other user's enjoyment of the platform.`,
    },
    {
      title: '3. Sponsorship Agreements',
      content: `When a brand enters into a sponsorship agreement with Live31, the following conditions apply:

• Sponsorship packages are as described on our pricing page at the time of purchase.
• Brand assets (logos, taglines, product images) must be provided in the formats and specifications requested by Live31.
• Live31 retains creative control over all content production. Brand integration will be authentic and aligned with our wilderness content ethos.
• Sponsors may not dictate specific scripted content or require Live31 to make false or misleading claims about products.
• All brand placements are subject to FTC disclosure guidelines and Live31's commitment to authentic content.`,
    },
    {
      title: '4. Payment Terms',
      content: `All sponsorship fees are charged monthly, in advance, unless otherwise specified in a custom agreement.

• Payments are due at the start of each billing cycle.
• Accepted payment methods include major credit cards and bank transfers for annual contracts.
• Late payments may result in temporary suspension of sponsorship benefits.
• All fees are in USD unless otherwise agreed in writing.
• Price changes will be communicated at least 30 days in advance.`,
    },
    {
      title: '5. Intellectual Property',
      content: `All content produced by Live31, including videos, photographs, graphics, logos, and written content, is the intellectual property of Live31 unless otherwise specified.

• Sponsor brands retain ownership of their own logos, trademarks, and brand assets provided to Live31.
• Live31 grants sponsors a limited license to use expedition content featuring their brand for marketing purposes, subject to proper attribution.
• Sponsors may not modify, sublicense, or commercially exploit Live31 content without written permission.
• Live31 may use brand logos and names in marketing materials to identify active sponsorships.`,
    },
    {
      title: '6. Limitation of Liability',
      content: `To the maximum extent permitted by applicable law, Live31 shall not be liable for:

• Any indirect, incidental, special, consequential, or punitive damages.
• Loss of profits, data, or business opportunities.
• Damages resulting from delays, interruptions, or failures in service delivery due to circumstances beyond our reasonable control, including natural disasters, technical failures, or force majeure events.

Our total liability to any sponsor shall not exceed the amount paid by that sponsor in the 3 months preceding the claim.`,
    },
    {
      title: '7. Termination',
      content: `Either party may terminate a sponsorship agreement with 30 days written notice. Live31 reserves the right to immediately terminate agreements in cases of:

• Breach of these Terms & Conditions.
• Engagement in fraudulent or illegal activity.
• Conduct that damages the reputation or interests of Live31.

Upon termination, all outstanding payments become due immediately. Refunds, if applicable, are governed by our Refund Policy.`,
    },
    {
      title: '8. Governing Law',
      content: `These Terms & Conditions are governed by the laws of the State of Washington, United States, without regard to its conflict of law provisions.

Any disputes arising from these terms or your use of our platform shall be resolved through binding arbitration in Seattle, Washington, unless both parties agree otherwise in writing.`,
    },
    {
      title: '9. Changes to Terms',
      content: `We reserve the right to modify these Terms & Conditions at any time. When we make material changes, we will notify active sponsors via email at least 14 days before the changes take effect.

Your continued use of Live31 after the effective date of revised terms constitutes your acceptance of those terms. If you do not agree to the new terms, you must discontinue use of our services.

For questions about these terms, contact us at hello@live31.com.`,
    },
  ]

  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-gray-400">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-10">
            <p className="text-gray-400 text-sm leading-relaxed">
              Please read these Terms &amp; Conditions carefully before using the Live31 platform. These terms govern your use of our services and your sponsorship relationship with Live31. By accessing or using our platform, you agree to be bound by these terms.
            </p>
          </div>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black text-white mb-4">{section.title}</h2>
                <div className="text-gray-400 text-sm leading-relaxed">
                  {section.content.split('\n').map((line, i) => {
                    if (line.startsWith('• ')) {
                      return <p key={i} className="mb-2 pl-4">{line}</p>
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
