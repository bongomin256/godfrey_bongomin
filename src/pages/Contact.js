//  import ContactHome from "../component/contact/ContactHome";
import PageSection from "../component/constants/PageSection";
import ContactForm from "../component/contact/ContactForm";

//* Framer Motion Aninamtion
import { motion } from "framer-motion";

const Contact = () => {
  return (
    // <div>Contact</div>
    <PageSection>
      <motion.div
        className="mb-20 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-white text-xl text-center mb-14 capitalize">
          <span className="text-pink-main">/</span>contact
        </h2>
      </motion.div>

      <ContactForm />
    </PageSection>
  );
};

export default Contact;
