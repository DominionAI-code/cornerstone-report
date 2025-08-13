"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Users,
  Award,
  Shield,
  Stethoscope,
  Clock,
  CheckCircle,
  Target,
  Eye,
} from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and dignity, ensuring comfort throughout their healthcare journey.",
    },
    {
      icon: Shield,
      title: "Excellence & Safety",
      description:
        "We maintain the highest standards of medical excellence while prioritizing patient safety in all our procedures.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "We are deeply rooted in the Kabba community, understanding and addressing local healthcare needs.",
    },
    {
      icon: Stethoscope,
      title: "Expert Medical Care",
      description:
        "Our team of qualified medical professionals brings years of experience and specialized training.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Hospital Founded",
      description:
        "Cornerstone Clinic & Medical Center was established to serve the healthcare needs of Kabba and surrounding communities.",
    },
    {
      year: "2012",
      title: "Emergency Services Launch",
      description:
        "Introduced 24/7 emergency services with state-of-the-art ambulance and trauma care facilities.",
    },
    {
      year: "2016",
      title: "Expansion & Modernization",
      description:
        "Major facility expansion including new surgical suites, maternity ward, and diagnostic equipment.",
    },
    {
      year: "2020",
      title: "Digital Health Integration",
      description:
        "Implemented electronic health records and telemedicine services to enhance patient care.",
    },
    {
      year: "2024",
      title: "15 Years of Service",
      description:
        "Celebrating over 15 years of dedicated healthcare service to the Kabba community and beyond.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Service", icon: Clock },
    { number: "25,000+", label: "Patients Treated", icon: Users },
    { number: "3,500+", label: "Successful Surgeries", icon: Award },
    { number: "24/7", label: "Emergency Care", icon: Shield },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#e5e9f6] overflow-hidden px-3">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/medical-pattern.svg')] bg-center bg-repeat"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-md font-medium">
                About Cornerstone Clinic & Medical Center
              </span>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Dedicated to{" "}
                <span className="text-primary-600">Excellence</span> in
                Healthcare
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                For over 15 years, Cornerstone Clinic & Medical Center has been
                the cornerstone of healthcare in Kabba, Kogi State. We combine
                modern medical technology with compassionate care to provide
                exceptional healthcare services to our community.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Trusted by thousands of families
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cornerstone image.png"
                  alt="Cornerstone Hospital Building"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />

                {/* Overlay with stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Modern Healthcare Facility
                    </h3>
                    <p className="text-white/90">
                      Located in the heart of Kabba
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                To provide accessible, high-quality healthcare services to the
                people of Kabba and surrounding communities while maintaining
                the highest standards of medical excellence, compassionate care,
                and patient safety.
              </p>
              <div className="space-y-3">
                {[
                  "Deliver exceptional patient care with compassion",
                  "Maintain state-of-the-art medical facilities",
                  "Foster a culture of continuous learning and improvement",
                  "Serve our community with integrity and dedication",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be the leading healthcare provider in Kogi State, recognized
                for our commitment to excellence, innovation in medical care,
                and positive impact on community health and wellbeing.
              </p>
              <div className="space-y-3">
                {[
                  "Leading healthcare innovation in our region",
                  "Setting standards for medical excellence",
                  "Expanding access to quality healthcare",
                  "Building healthier communities together",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Core Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-gray-600">
              Our values guide every decision we make and every service we
              provide, ensuring consistent excellence in patient care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              15+ Years of Healthcare Excellence
            </h2>
            <p className="text-lg text-gray-600">
              From our humble beginnings to becoming a trusted healthcare
              provider, here's our journey of growth and service.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`flex-1 ml-12 lg:ml-0 ${
                      index % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-primary-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Spacer for lg screens */}
                  <div className="hidden lg:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience Excellence in Healthcare
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of patients who trust Cornerstone Clinic & Medical
              Center for their healthcare needs. Your health and wellbeing are
              our top priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Book an Appointment
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Contact Us Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
