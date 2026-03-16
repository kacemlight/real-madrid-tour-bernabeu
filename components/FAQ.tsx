'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 py-16" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">Questions fréquentes</h2>
        <dl className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
                  aria-expanded={openIndex === idx}
                >
                  {item.question}
                  <span className="ml-4 text-xl" aria-hidden="true">{openIndex === idx ? '−' : '+'}</span>
                </button>
              </dt>
              {openIndex === idx && (
                <dd className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{item.answer}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
