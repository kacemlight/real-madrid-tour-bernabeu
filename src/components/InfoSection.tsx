interface Props {
  openingHours: string; locationAddress: string; locationMapUrl: string; practicalInfo: string;
}
export default function InfoSection({ openingHours, locationAddress, locationMapUrl, practicalInfo }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Plan Your Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">🕐 Opening Hours</h3>
            <p className="text-gray-600 whitespace-pre-line">{openingHours}</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">📍 Location</h3>
            <p className="text-gray-600 mb-4">{locationAddress}</p>
            <a href={locationMapUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-semibold hover:underline">View on Google Maps →</a>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">ℹ️ Practical Info</h3>
            <p className="text-gray-600">{practicalInfo}</p>
          </div>
        </div>
      </div>
    </section>
  )
}