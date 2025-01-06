import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-[1140px] mx-auto py-10 xl:py-32 flex flex-col gap-3 items-center justify-center px-4"
    >
      <p className="flex items-center text-lg font-semibold tracking-wide text-center font-titleFont text-textBlue">
        {" "}
        04. What{"'"}s Next?{" "}
      </p>
      <h2 className="text-5xl font-semibold text-center font-titleFont">
        {" "}
        Get In Touch 📥{" "}
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        {" "}
        I{"'"}m currently looking for any new opportunities and my inbox is
        always open. Whether you have a question or just want to say hi, I{"'"}
        ll make sure to get back to you!{" "}
      </p>
      <Link to="mailto:mhamitou2022@fau.edu">
        <button className="w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textBlue font-titleFont text-textBlue hover:bg-textDark">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Contact;
