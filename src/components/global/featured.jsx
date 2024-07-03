const features = [
    {
      name: 'Renowned Craftsmanship',
      description:
        'RituHandmadeArts is celebrated for its superior quality and unique artistic expression, distinguishing itself from mass-produced artwork.',
    },
    { name: 'Dedicated Expertise', description: 'Each piece is meticulously crafted, reflecting the passion and dedication of the artist, ensuring authenticity and originality.' },
    {
      name: 'Customer Satisfaction',
      description:
        'Known for providing exceptional customer service, RituHandmadeArts prioritizes customer satisfaction, ensuring every interaction is personal and meaningful.',
    },
    { name: 'Reliability', description: "With a commitment to excellence, RituHandmadeArts guarantees reliable and timely delivery, maintaining the highest standards of professionalism." },
    { name: 'Artistic Integrity', description: "Every creation is designed with precision and care, ensuring that each artwork embodies the essence of RituHandmadeArts' dedication to artistry and integrity." },
  ]
  
  export default function Featured() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="border-b border-gray-200 pb-10">
                <h2 className="font-medium text-black">RituHandmadeArts</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-[#c19434] sm:text-4xl">Trusted Excellence</p>
              </div>
  
              <dl className="mt-10 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 shadow-[0px_0px_25px_2px_rgba(0,0,0,0.2)] ">
                <img
                  src="/nycherald.jpg"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8 ">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 shadow-[0px_0px_25px_2px_rgba(0,0,0,0.2)]">
                  <img
                    src="/dallas2.jpg"                       
                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 shadow-[0px_0px_25px_2px_rgba(0,0,0,0.2)]">
                  <img
                    src="/whowho.jpg"
                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }