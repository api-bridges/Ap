import Link from 'next/link'

export default function RefundPage() {
  const sections = [
    {
      title: '1. Overview',
      content: `Live31 is committed to fair and transparent billing practices. This Refund Policy outlines the conditions under which refunds may be issued for sponsorship packages and related services.

We understand that business needs change, and we aim to handle all refund requests with fairness and respect. Please read this policy carefully before purchasing a sponsorship package.`,
    },
    {
      title: '2. Eligibility',
      content: `Refunds may be issued under the following conditions:

• **New Subscribers**: Brand sponsors who cancel within 7 days of their first payment and have not yet had any brand assets integrated into live content are eligible for a full refund.
• **Service Failure**: If Live31 fails to deliver the core services outlined in your selected package for more than 5 consecutive days due to reasons within our control, you may be eligible for a prorated refund for the affected period.
• **Billing Errors**: If you were charged incorrectly due to a system error, we will issue a full refund of the overcharged amount within 5 business days of verification.
• **Annual Prepayments**: Brands on annual plans who cancel after the first 30 days may receive a prorated refund for unused complete months remaining, minus a 10% processing fee.`,
    },
    {
      title: '3. Refund Process',
      content: `To request a refund, please follow these steps:

1. Contact us at hello@live31.com with the subject line "Refund Request."
2. Include your brand name, account email, the package purchased, and the reason for your request.
3. Our team will review your request and respond within 3 business days.
4. If approved, we will process the refund to your original payment method.

Refund requests submitted more than 30 days after the relevant billing date will not be considered unless the request relates to a billing error.`,
    },
    {
      title: '4. Refund Timeline',
      content: `Once a refund is approved:

• **Credit/Debit Card Payments**: Refunds typically appear within 5–10 business days, depending on your card issuer.
• **Bank Transfer Payments**: Refunds are processed within 7–14 business days.
• **You will receive an email confirmation** when the refund has been initiated from our end.

Live31 is not responsible for delays caused by banks or payment processors after we have initiated the refund.`,
    },
    {
      title: '5. Non-Refundable Items',
      content: `The following are not eligible for refunds:

• Monthly sponsorship fees for completed service periods.
• Custom content production fees (brand videos, custom overlays, documentary segments) once production has begun.
• Setup fees for custom integrations or dedicated account management.
• Sponsorship packages where content featuring your brand has already been broadcast live.
• Partial-month periods for mid-cycle cancellations (you retain access until the end of the current billing period).`,
    },
    {
      title: '6. Contact Us',
      content: `If you have questions about our refund policy or wish to initiate a request, please reach out:

**Email**: hello@live31.com
**Phone**: +1 (555) 31-LIVE
**Response Time**: Within 3 business days

We are committed to resolving all refund requests fairly and efficiently. Our goal is for every Live31 sponsor to feel confident in their investment.`,
    },
  ]

  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Refund Policy</h1>
          <p className="text-gray-400">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-10">
            <p className="text-gray-400 text-sm leading-relaxed">
              At Live31, we stand behind the value of our sponsorship platform. This Refund Policy is designed to be fair, clear, and easy to understand. If you have any questions not covered here, please don&apos;t hesitate to <Link href="/contact" className="text-orange-400 hover:text-orange-300">contact us</Link>.
            </p>
          </div>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black text-white mb-4">{section.title}</h2>
                <div className="text-gray-400 text-sm leading-relaxed">
                  {section.content.split('\n').map((line, i) => {
                    if (line.match(/^\d+\./)) {
                      return <p key={i} className="mb-2 pl-4 text-gray-300">{line}</p>
                    }
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
                    if (line.startsWith('**') && line.includes('**:')) {
                      const [bold, ...rest] = line.split('**:')
                      return (
                        <p key={i} className="mb-1">
                          <span className="text-gray-200 font-semibold">{bold.replace(/\*\*/g, '')}:</span>
                          {rest.join('')}
                        </p>
                      )
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
