const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-gray-700">
          For any questions or special orders, please feel free to contact us.
        </p>
        <form className="mt-8 max-w-md mx-auto">
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Message"
              rows={4}
            ></textarea>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

