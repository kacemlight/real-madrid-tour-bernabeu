interface InfoSectionProps {
  duration: string;
  groupSize: string;
  description: string;
}

export default function InfoSection({ duration, groupSize, description }: InfoSectionProps) {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Tour Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Duration</h3>
            <p className="text-gray-700">{duration}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Group Size</h3>
            <p className="text-gray-700">{groupSize}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Language</h3>
            <p className="text-gray-700">English, Spanish, Catalan</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">About This Tour</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
