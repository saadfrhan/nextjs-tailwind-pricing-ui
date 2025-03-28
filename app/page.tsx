import { BenefitItem } from "@/components/benefit-item"
import { FaqSection } from "@/components/faq-section"
import { PricingCard } from "@/components/pricing-card"
import { pricingData } from "@/lib/pricing-data"

export default function PricingPage() {
  const { hero, pricing, features, benefits, faq } = pricingData

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full bg-[#7046c0] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{hero.title}</h1>
        <p className="text-xl">{hero.subtitle}</p>
      </div>

      <div className="max-w-4xl w-full -mt-8 px-4">
        <PricingCard
          title={pricing.title}
          price={pricing.price}
          billingPeriod={pricing.billingPeriod}
          ctaText={pricing.ctaText}
          featuresIntro={pricing.featuresIntro}
          features={features}
        />
      </div>

      <div className="max-w-4xl w-full mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} icon={benefit.icon} title={benefit.title} subtitle={benefit.subtitle} />
        ))}
      </div>

      <FaqSection
        title={faq.title}
        contactText={faq.contactText}
        contactLinkText={faq.contactLinkText}
        showMoreText={faq.showMoreText}
        items={faq.items}
      />
    </div>
  )
}
