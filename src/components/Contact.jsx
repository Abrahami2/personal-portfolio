import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    toast.promise(
      emailjs.sendForm("service_7447vgq", "template_y0gtrvw", form.current, {
        publicKey: "wh7Fka4c3S4gfm4Rv",
      }),
      {
        loading: "Sending your message...",
        success: () => {
          form.current.reset();
          setIsSubmitting(false);
          toast.success("I've received your message, Thanks!");
          return "Message Sent";
        },
        error: (err) => {
          setIsSubmitting(false);
          toast.error("Opps! Something is wrong");
          console.log(err);
          return "Failed to send your message. Please try again.";
        },
      }
    );
  };

  return (
    <section
      id="contact"
      className="max-w-[1140px] mx-auto py-10 xl:py-32 flex flex-col gap-3 items-center justify-center px-4"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <p className="flex items-center text-lg font-semibold tracking-wide text-center font-titleFont text-textBlue">
        04. What{"'"}s Next?
      </p>
      <h2 className="text-5xl font-semibold text-center font-titleFont">
        Get In Touch 📥
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        I{"'"}m currently looking for any new opportunities and my inbox is
        always open. Whether you have a question or just want to say hi, I{"'"}
        ll make sure to get back to you!
      </p>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-[700px] space-y-6 mt-12"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-textDark">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            className="w-full bg-[#112240] border-b-2 border-b-textBlue outline-textDark py-3 px-4 text-sm rounded-md"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-textDark">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="w-full bg-[#112240] border-b-2 border-b-textBlue outline-textDark py-3 px-4 text-sm rounded-md"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-textDark">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full bg-[#112240] border-b-2 border-b-textBlue outline-textDark py-3 px-4 text-sm rounded-md resize-none"
            placeholder="Your Message"
            rows={10}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textBlue font-titleFont text-textBlue ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-textDark"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
