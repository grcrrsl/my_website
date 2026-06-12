import Navbar from "../components/layout/Navbar";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
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
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

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
                      facebook.com/roselle garcera
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
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
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
                  placeholder="Your Email"
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
                  placeholder="Your Message"
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
                  className="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    py-3
                    rounded-lg
                    transition-all
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
