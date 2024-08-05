const Catalogue = () => {
  return (
    <section id="catalogue" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Catalogue</h2>
        <div className="mt-8 flex justify-center">
          {/* <!-- Categories --> */}
          <div className="w-1/4 p-4">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="text-left">
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Scented Candles
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Decorative Candles
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Soy Candles
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Vegetable Wax Candles
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Products --> */}
          <div className="w-3/4 p-4 flex flex-wrap justify-center">
            {/* <!-- Product Card --> */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-full"
                src="your-product-image-url.jpg"
                alt="Vanilla Candle"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Vanilla Candle</div>
                <p className="text-gray-700 text-base">
                  A vanilla-scented candle for a relaxing moment.
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  $25.00
                </span>
                <button className="bg-black text-white px-3 py-1 rounded">
                  Buy
                </button>
              </div>
            </div>
            {/* <!-- More Product Cards --> */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-full"
                src="your-product-image-url.jpg"
                alt="Lavender Candle"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Lavender Candle</div>
                <p className="text-gray-700 text-base">
                  A lavender-scented candle for a calming ambiance.
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  $20.00
                </span>
                <button className="bg-black text-white px-3 py-1 rounded">
                  Buy
                </button>
              </div>
            </div>
            {/* <!-- Repeat similar product cards for other products --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;

