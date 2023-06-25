import ContactForm from "./ContactForm";

const ContactHome = () => {
  return (
    <section className="h-[70vh] px-5 md:px-12 lg:px-32">
      <h2 className=" text-center mb-8 text-xl before:content-[''] before:h-[2px] before:block before:bg-gray-main after:content-[''] after:h-[2px] after:block after:bg-gray-main grid grid-cols-3 items-center gap-2 md:gap-0">
        <span>
          <span className="text-pink-main">#</span>
          Contact
        </span>
      </h2>
      <div>
        <h4 className="text-center mb-5 md:mb-10 lg:mb-16">Get in Touch</h4>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactHome;
