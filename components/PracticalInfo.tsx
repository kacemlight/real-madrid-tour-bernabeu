interface PracticalInfoProps {
  info: {
    openingHours: string;
    address: string;
    transportInfo: string;
    importantNotes: string;
  };
}

export default function PracticalInfo({ info }: PracticalInfoProps) {
  const items = [
    { label: 'Horaires d’ouverture', value: info.openingHours, icon: '⏰' },
    { label: 'Adresse', value: info.address, icon: '📍' },
    { label: 'Transports', value: info.transportInfo, icon: '🚇' },
    { label: 'Informations importantes', value: info.importantNotes, icon: 'ℹ️' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="practical-heading">
      <h2 id="practical-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">Informations pratiques</h2>
      <dl className="grid sm:grid-cols-2 gap-8">
        {items.map((item) => (
          <div key={item.label} className="bg-gray-50 rounded-2xl p-6 flex gap-4 items-start">
            <span className="text-2xl" role="img" aria-label={item.label}>{item.icon}</span>
            <div>
              <dt className="font-semibold text-gray-900">{item.label}</dt>
              <dd className="mt-1 text-gray-600 text-sm">{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
