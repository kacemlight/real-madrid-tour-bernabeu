interface TourIntroProps {
  intro: {
    heading: string;
    description: string;
    imageUrl?: { _path: string };
    imageAlt: string;
  };
}

export default function TourIntro({ intro }: TourIntroProps) {
  return (
    <section id="tour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="intro-heading">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="intro-heading" className="text-3xl font-bold text-gray-900">{intro.heading}</h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg">{intro.description}</p>
        </div>
        {intro.imageUrl?._path && (
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={intro.imageUrl._path}
              alt={intro.imageAlt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
