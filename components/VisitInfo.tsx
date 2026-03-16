import { VisitInfoProps } from '@/lib/types';

export function VisitInfo({
  visitInfoTitle,
  openingHours,
  address,
  accessibilityInfo
}: VisitInfoProps) {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-label="Visit Information Section"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          {visitInfoTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opening Hours */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Opening Hours
            </h3>
            <p className="text-gray-700 leading-relaxed">{openingHours}</p>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>
            <p className="text-gray-700 leading-relaxed">{address}</p>
          </div>

          {/* Accessibility */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Accessibility
            </h3>
            <p className="text-gray-700 leading-relaxed">{accessibilityInfo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
