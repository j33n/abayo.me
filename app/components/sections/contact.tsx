import Link from "next/link";

import { RiMailSendFill, RiCalendarEventFill } from "react-icons/ri";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center mb-8 md:container md:mx-auto dark:bg-gray-900"
    >
      <div className="flex flex-row first:pr-4">
        <Link
          href="https://calendly.com/jeanabayo/15mins"
          className="flex items-center p-2 mr-4 text-gray-900 rounded bg-beige-300 w-fit"
        >
          <RiCalendarEventFill size={32} />
          <p className="ml-2">Calendly</p>
        </Link>
        <Link
          href="mailto:jeanabayo3@gmail.com"
          className="flex items-center p-2 text-gray-900 rounded bg-beige-300 w-fit"
        >
          <RiMailSendFill size={32} />
          <p className="ml-2">Mail</p>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
