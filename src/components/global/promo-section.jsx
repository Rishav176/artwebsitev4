import Image from "next/image"

const collections = [
    {
      name: "Women's",
      href: '#',
      imageSrc: '/promo1.jpg',
      imageAlt: 'Woman wearing an off-white cotton t-shirt.',
    },
    {
      name: "Abstract Art",
      href: '#',
      imageSrc: '/promo2.webp',
      imageAlt: 'Man wearing a charcoal gray cotton t-shirt.',
    },
    {
      name: 'Sectional Art',
      href: '#',
      imageSrc: '/promo3.webp',
      imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
    },
  ]
  
  export default function PromoSection() {
    return (
      <div className="relative bg-white pb-5">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/room_test.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
        </div>
  
        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          {/* Background image and overlap */}
          <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/room_test.png"
                  alt=""
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-48 w-full bg-white" />
          </div>
          <div className="relative py-32">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-4xl">Hand-pick from our range of Different Collections</h1>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-[#c19434] px-8 py-3 font-medium text-white hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
  
        <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
              >
                <div>
                  <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75 ">
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="h-full w-full object-cover object-center "
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 flex items-end rounded-lg p-6">
                    <div>
                      <p aria-hidden="true" className="text-sm text-slate-300">
                        Shop the collection
                      </p>
                      <h3 className="mt-1 font-semibold text-[#c19434]">
                        <a href={collection.href}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }