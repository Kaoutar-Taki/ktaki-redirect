const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <p className="mt-4 text-gray-700 text-center">
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
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

