/**
 * VisitorInfo Component
 * Displays opening hours, address, and optional map embed
 */

interface VisitorInfoProps {
  openingHoursTitle: string;
  openingHoursBody: string;
  locationAddress: string;
  mapEmbedUrl: string;
}

export default function VisitorInfo({
  openingHoursTitle,
  openingHoursBody,
  locationAddress,
  mapEmbedUrl,
}: VisitorInfoProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Visit Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Info */}
          <div>
            {/* Opening Hours */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                {openingHoursTitle}
              </h3>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {openingHoursBody}
              </p>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Location</h3>
              <p className="text-gray-700 leading-relaxed">
                {locationAddress}
              </p>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              src={mapEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
