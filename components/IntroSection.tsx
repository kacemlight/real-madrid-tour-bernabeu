import { IntroSectionProps } from '@/lib/types';

export function IntroSection({
  introductionText,
  tourHighlights
}: IntroSectionProps) {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-label="Introduction Section"
    >
      <div className="max-w-4xl mx-auto">
        {/* Introduction Text */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700">
            {introductionText}
          </p>
        </div>

        {/* Tour Highlights */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
            Tour Highlights
          </h2>
          <ul className="space-y-4">
            {tourHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white text-sm font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
