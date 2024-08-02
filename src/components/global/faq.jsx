const policies = [
  {
    name: 'Free delivery all year long',
    description:
      'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description:
      'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description:
      "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description:
      "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
  },
]

export default function FAQ() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
    {/* Details section */}
    <section aria-labelledby="details-heading">
      <div className="flex flex-col items-center text-center">
        <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-[#c19434]  sm:text-4xl">
        Exquisite Handmade Arts
        </h2>
        <p className="mt-3 max-w-5xl text-lg text-gray-600">
        Discover the beauty and craftsmanship of my handmade arts collection. 
        Each piece is meticulously crafted with heart and soul, offering you stunning additions to your home that blend tradition, creativity, and exceptional quality.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
        <div>
          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
              alt="Drawstring top with elastic loop closure and textured interior padding."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h2 id="faq1" className="text-center pt-5 font-bold text-3xl tracking-tight text-[#c19434] sm:text-2xl">
            The Fine Details
          </h2>
          <p className="mt-2 text-base text-gray-500">
          My handmade arts are not just products; they are stories woven with care and dedication. 
          From intricate brushstrokes to vibrant color palettes, each painting reflects my passion and expertise.
          </p>
        </div>
        <div>
          <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
              alt="Front zipper pouch with included key ring."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h2 id="faq2" className="text-center font-bold text-3xl pt-5 tracking-tight text-[#c19434] sm:text-2xl">
            Quality and Craftsmanship
          </h2>
          <p className="mt-2 text-base text-gray-500">
          I use only the finest materials to ensure that each painting is as durable as it is beautiful. 
          By employing traditional techniques and a keen artistic eye, I ensure that every piece is a true work of art.
          </p>
        </div>
      </div>
    </section>

    {/* Policies section */}
    <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24">
      <h2 id="policy-heading" className="sr-only">
        Our policies
      </h2>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {policies.map((policy) => (
          <div key={policy.name}>
            <img src={policy.imageSrc} alt="" className="h-24 w-auto" />
            <h3 className="mt-6 text-base font-medium text-[#c19434]">{policy.name}</h3>
            <p className="mt-3 text-base text-gray-500">{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>

  )
}






//[#c19434] - gold