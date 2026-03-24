// src/pages/Contact.tsx
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
    <path d="M19.11 17.49c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.49-.07-.14-.6-1.46-.82-2-.22-.53-.44-.46-.6-.47-.16-.01-.34-.01-.52-.01-.18 0-.49.07-.75.34-.27.27-1 1-1 2.44 0 1.44 1.03 2.84 1.17 3.03.14.18 2.02 3.08 4.9 4.32.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.58-.65 1.8-1.28.22-.63.22-1.18.15-1.29-.07-.11-.25-.18-.52-.31z" fill="currentColor"/>
    <path d="M16 3C9.38 3 4 8.38 4 15c0 2.37.69 4.58 1.89 6.43L4 29l7.76-2.04A12.89 12.89 0 0 0 16 27c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22.67a10.67 10.67 0 1 1 0-21.34 10.67 10.67 0 0 1 0 21.34z" fill="currentColor"/>
  </svg>
);

// ✅ New WhatsApp/phone number (E.164 + display)
const PHONE_TEL = "016 1440 8837";
const PHONE_DISPLAY = "017 5259 4979";
const WA_LINK = "https://wa.me/016 1440 8837";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    // Include {{time}} for your EmailJS template
    const dhakaTime = new Date().toLocaleString("en-GB", { timeZone: "Asia/Dhaka" });

    emailjs
      .send(
        "service_vrcmi2d", // <-- replace with your EmailJS service_id
        "template_o8nmx8h", // <-- replace with your EmailJS template_id
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          time: dhakaTime, // matches {{time}} in your template
        },
        "iYHEn3lapwBOr7lun" // <-- your EmailJS public key
      )
      .then(() => {
        toast.success("✅ Message sent! We'll reply soon.");
        setFormData({ name: "", email: "", company: "", message: "" });
      })
      .catch(() => toast.error("❌ Failed to send. Please try again."))
      .finally(() => setSending(false));
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Contact details */}
          <div className="space-y-6">
            <div className="exp-box text-center">
              <h2 className="text-[20px] font-bold text-white mb-8">Contact Information</h2>

              <div className="flex flex-col items-center text-[#cce8f0] opacity-90 mb-8">
                <Phone className="text-[#14e0ff] mb-2" size={28} />
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-[#14e0ff] transition-colors">
                  {PHONE_TEL}
                </a>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center text-[#cce8f0] opacity-90 hover:text-[#14e0ff] mb-8"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon width={26} height={26} className="text-[#14e0ff] mb-2" />
                <span>WhatsApp: {PHONE_DISPLAY}</span>
              </a>

              <div className="flex flex-col items-center text-[#cce8f0] opacity-90 mb-8">
                <Mail className="text-[#14e0ff] mb-2" size={28} />
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <a
                  href="mailto:contact.lasttuch@gmail.com"
                  className="hover:text-[#14e0ff] transition-colors text-center"
                >
                  contact.lasttuch@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center text-[#cce8f0] opacity-90 mb-2">
                <MapPin className="text-[#14e0ff] mb-2" size={28} />
                <h3 className="font-semibold text-white mb-1 text-center">Office</h3>
                <p className="text-center">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <div className="exp-box text-center">
              <h2 className="text-[20px] font-bold text-white mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-1">
                  <Label htmlFor="name" className="text-[#cce8f0]">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-[#020b18] border-[#14e0ff]/30 text-white focus-visible:ring-[#14e0ff]"
                  />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="email" className="text-[#cce8f0]">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="mt-2 bg-[#020b18] border-[#14e0ff]/30 text-white focus-visible:ring-[#14e0ff]"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="company" className="text-[#cce8f0]">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 bg-[#020b18] border-[#14e0ff]/30 text-white focus-visible:ring-[#14e0ff]"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="message" className="text-[#cce8f0]">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 bg-[#020b18] border-[#14e0ff]/30 text-white focus-visible:ring-[#14e0ff]"
                  />
                </div>
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="cv-download-btn !mt-2 w-full md:w-auto"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
