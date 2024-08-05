const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: 'url("../src/assets/heroSection.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Discover the Art of Artisan Candles
        </h1>
        <p className="text-xl md:text-2xl text-white mt-4">
          Handmade candles with love and passion
        </p>
        <a
          href="#catalogue"
          className="mt-8 px-8 py-4 bg-black text-white font-semibold rounded"
        >
          Explore Our Collections
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

