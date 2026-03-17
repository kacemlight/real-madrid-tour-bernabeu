/**
 * FaqAccordion Component
 * Expandable FAQ items
 */

'use client';

import { useState } from 'react';
import { FaqItem } from '@/types';

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-black">
                  {item.question}
                </span>
                <span
                  className={`text-2xl text-rm-gold transition-transform duration-300 ${
                    expanded === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {expanded === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
