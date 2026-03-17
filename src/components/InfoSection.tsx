interface InfoContent {
  heading: string;
  content: string;
}

interface InfoSectionProps {
  sections: InfoContent[];
}

export default function InfoSection({ sections }: InfoSectionProps) {
  return (
    <section className="py-16 px-4 bg-rm-white">
      <div className="max-w-4xl mx-auto">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-bold text-rm-black mb-4">
              {section.heading}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}