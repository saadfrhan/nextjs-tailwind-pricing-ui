import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title: string
  contactText: string
  contactLinkText: string
  showMoreText: string
  items: FaqItem[]
}

export function FaqSection({ title, contactText, contactLinkText, showMoreText, items }: FaqSectionProps) {
  return (
    <div className="max-w-4xl w-full mt-16 px-4 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>
      <p className="text-center text-gray-600 mb-8">
        {contactText}{" "}
        <a href="#" className="text-[#7046c0]">
          {contactLinkText}
        </a>
        .
      </p>

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg mb-4 px-4">
            <AccordionTrigger className="text-left py-4">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="bg-[#7046c0] text-white hover:bg-[#5d3ba3] border-none">
          {showMoreText}
        </Button>
      </div>
    </div>
  )
}

