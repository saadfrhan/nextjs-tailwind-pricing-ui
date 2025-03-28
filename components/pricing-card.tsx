import { Button } from "@/components/ui/button"
import { FeatureItem } from "./feature-item"

interface PricingCardProps {
  title: string
  price: string
  billingPeriod: string
  ctaText: string
  featuresIntro: string
  features: string[]
}

export function PricingCard({ title, price, billingPeriod, ctaText, featuresIntro, features }: PricingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Left side - pricing */}
      <div className="bg-[#f5f0ff] p-8 text-center md:w-2/5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="text-6xl font-bold text-gray-900 mb-2">{price}</div>
        <p className="text-gray-600 mb-6">{billingPeriod}</p>
        <Button className="w-full py-6 bg-[#7046c0] hover:bg-[#5d3ba3]">{ctaText}</Button>
      </div>

      {/* Right side - features */}
      <div className="p-8 md:w-3/5">
        <p className="text-gray-700 mb-6">{featuresIntro}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </ul>
      </div>
    </div>
  )
}

