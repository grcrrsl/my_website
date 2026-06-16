import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_nuv9i7a",
        "template_7qvparn",
        form.current,
        "sRAjjO_xW6LGvutqd"
      )
      .then(() => {
        setSuccess("Thank you for reaching out! I'll get back to you as soon as possible.");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setSuccess("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-400 mb-4">
              Contact Me
            </h1>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, internship
              opportunities, project discussions, or simply to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-400 text-xl" />
                  <div>
                    <p className="text-slate-400">Email</p>
                    <p>garceraroselle@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaGithub className="text-blue-400 text-xl" />
                  <div>
                    <p className="text-slate-400">GitHub</p>
                    <a
                      href="https://github.com/grcrrsl"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400"
                    >
                      github.com/grcrrsl
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-blue-400 text-xl" />
                  <div>
                    <p className="text-slate-400">LinkedIn</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400"
                    >
                      linkedin.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaFacebook className="text-blue-400 text-xl" />
                  <div>
                    <p className="text-slate-400">Facebook</p>
                    <a
                      href="https://www.facebook.com/grcrrsl"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400"
                    >
                      facebook.com/grcrrsl
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  <div>
                    <p className="text-slate-400">Location</p>
                    <p>Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                Send a Message
              </h2>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                  "
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                  "
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    py-3
                    rounded-lg
                    transition-all
                    disabled:opacity-50
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p
                    className={`text-center mt-4 ${
                      success.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {success}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;