import type { LucideIcon } from "lucide-react"
import { Shield, Tag, Clock } from "lucide-react"

interface BenefitItemProps {
  icon: string
  title: string
  subtitle: string
}

export function BenefitItem({ icon, title, subtitle }: BenefitItemProps) {
  const IconComponent = getIconComponent(icon)

  return (
    <div className="flex items-center">
      <div className="mr-4 bg-[#f5f0ff] p-2 rounded-full">
        <IconComponent className="h-6 w-6 text-[#7046c0]" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  )
}

function getIconComponent(iconName: string): LucideIcon {
  switch (iconName) {
    case "Shield":
      return Shield
    case "Tag":
      return Tag
    case "Clock":
      return Clock
    default:
      return Shield
  }
}

