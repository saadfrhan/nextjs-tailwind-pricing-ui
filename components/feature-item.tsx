import { Check } from "lucide-react"

interface FeatureItemProps {
  text: string
}

export function FeatureItem({ text }: FeatureItemProps) {
  return (
    <li className="flex items-start">
      <Check className="h-5 w-5 text-[#7046c0] mr-3 mt-0.5" />
      <span>{text}</span>
    </li>
  )
}

