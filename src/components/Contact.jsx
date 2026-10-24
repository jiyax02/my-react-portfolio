import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Check,
  Copy,
  AlertCircle,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (fieldValues = formData) => {
    const errs = { ...errors };

    if ('name' in fieldValues) {
      if (!fieldValues.name.trim()) {
        errs.name = 'Please enter your name.';
      } else if (fieldValues.name.trim().length < 2) {
        errs.name = 'Name must be at least 2 characters.';
      } else {
        delete errs.name;
      }
    }

    if ('email' in fieldValues) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValues.email.trim()) {
        errs.email = 'Please provide your email address.';
      } else if (!emailRegex.test(fieldValues.email.trim())) {
        errs.email = 'Please provide a valid email format (e.g. user@domain.com).';
      } else {
        delete errs.email;
      }
    }

    if ('message' in fieldValues) {
      if (!fieldValues.message.trim()) {
        errs.message = 'Please type a message.';
      } else if (fieldValues.message.trim().length < 10) {
        errs.message = 'Message should be at least 10 characters long.';
      } else {
        delete errs.message;
      }
    }

    return errs;
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validate({ [field]: formData[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    const currentErrors = validate(formData);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(
        `Portfolio Inquiry from ${formData.name.trim()}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      );
      const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(
          `To: ${personalInfo.email}\nSubject: Portfolio Inquiry from ${formData.name}\n\n${formData.message}`
        );
      }

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#A855F7', '#C4B5FD', '#818CF8'],
        });
      } catch (err) {
        // silent fallback
      }

      window.location.href = mailtoLink;
      setDeliveryStatus('client-opened');
    } catch (err) {
      setDeliveryStatus('copied');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Let's Build Something{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Extraordinary Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
          >
            Have a project in mind, an opportunity to discuss, or just want to connect? Send a note and let's start the conversation.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Side: Contact Information & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 p-8 sm:p-10 rounded-3xl bg-[#111122]/80 border border-purple-500/15 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
          >
            <div>
              <span className="text-xs font-mono text-purple-300 uppercase tracking-widest block mb-2">
                Direct Channels
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Reach Out Directly
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                I am actively responsive to inquiries regarding full stack development, frontend architecture, freelance projects, and full-time technical roles.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-purple-500/15 flex items-center justify-between group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-[#A1A1AA]">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-purple-300 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-purple-500/15 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[#A1A1AA]">Location</p>
                    <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
                Social Profiles & Code
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 border border-purple-500/15 hover:border-purple-400/40 text-white transition-all group"
                >
                  <GithubIcon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                  <span className="text-xs font-semibold">GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-purple-300 ml-auto" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 border border-purple-500/15 hover:border-purple-400/40 text-white transition-all group"
                >
                  <LinkedinIcon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-purple-300 ml-auto" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#111122]/80 border border-purple-500/15 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-[#A1A1AA] mb-6">
              Complete the validated fields below to prepare and launch your inquiry.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2 font-semibold"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="e.g. Sarah Connor"
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0B0B14] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                    errors.name && touched.name
                      ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-purple-500/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400'
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2 font-semibold"
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="e.g. sarah@example.com"
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0B0B14] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                    errors.email && touched.email
                      ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-purple-500/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400'
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2 font-semibold"
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Describe your project, timeline, or requirements..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0B0B14] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all resize-none ${
                    errors.message && touched.message
                      ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-purple-500/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400'
                  }`}
                />
                {errors.message && touched.message && (
                  <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Delivery Feedback Note */}
              <AnimatePresence>
                {deliveryStatus && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-purple-900/30 border border-purple-500/40 text-xs text-purple-100 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-emerald-300">
                        Email client opened & message copied to clipboard!
                      </p>
                      <p className="text-zinc-300 leading-relaxed">
                        To ensure genuine delivery, your default email composer was launched with your validated inputs pre-filled. Simply press "Send" in your mail app to transmit your message.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
