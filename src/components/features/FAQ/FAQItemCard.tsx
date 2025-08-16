'use client';

import { FAQ } from '../../../types/FAQ';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItemProps {
    faq: FAQ;
}

export const FAQItemCard = ({ faq }: FAQItemProps) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem
                value={`faq-${faq.id}`}
                className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg overflow-hidden"
            >
                <AccordionTrigger className="px-6 py-4 text-right hover:bg-muted/50 transition-colors [&[data-state=open]>svg]:rotate-180">
                    <span className="text-base md:text-lg font-medium text-card-foreground text-right">
                        {faq.question}
                    </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                    <div className="text-muted-foreground leading-7 text-sm md:text-base text-right">
                        {faq.answer}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
