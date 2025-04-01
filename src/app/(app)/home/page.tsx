"use client";

import { useState, useEffect } from "react";
import {
  Users,
  BarChart2,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import "./TargetPortfolioCharacteristics.css";
import NiftyIndicesBarGraph from "./NiftyIndicesBarGraph";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [dealSize, setDealSize] = useState(0);
  const [investeeCompanies, setInvesteeCompanies] = useState(0);
  const [minorityStakeInvestment, setMinorityStakeInvestment] = useState(0);
  const [sponsorCommitment, setSponsorCommitment] = useState(0);
  const [fundManagerCommitment, setFundManagerCommitment] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dealSize < 10) {
        setDealSize(dealSize + 1);
      }
      if (investeeCompanies < 25) {
        setInvesteeCompanies(investeeCompanies + 1);
      }
      if (minorityStakeInvestment < 49) {
        setMinorityStakeInvestment(minorityStakeInvestment + 1);
      }
      if (sponsorCommitment < 15) {
        setSponsorCommitment(sponsorCommitment + 1);
      }
      if (fundManagerCommitment < 5) {
        setFundManagerCommitment(fundManagerCommitment + 1);
      }
    }, 100); // Adjust interval for counting speed

    return () => clearInterval(intervalId);
  }, [
    dealSize,
    investeeCompanies,
    minorityStakeInvestment,
    sponsorCommitment,
    fundManagerCommitment,
  ]);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      title: "Building Tomorrow's Success Stories",
      description:
        "We invest in innovative startups and growth companies that are shaping the future of technology and business.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
      title: "Empowering Visionary Founders",
      description:
        "Partner with us to turn your groundbreaking ideas into market-leading companies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80",
      title: "Global Impact, Local Presence",
      description:
        "Creating lasting value through strategic investments across markets worldwide.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen max-w-full overflow-hidden bg-white">
      {/* Hero Section with Pagination */}
      <div className="pt-16">
        <div className="relative h-[625px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 transform ${
                currentSlide === index
                  ? "opacity-100 translate-x-0"
                  : currentSlide < index
                  ? "opacity-0 translate-x-full"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1fd43a] to-green-600 opacity-90 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8 max-w-2xl">{slide.description}</p>
                  <button className="bg-white text-[#1fd43a] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-0 right-0 z-30">
            <div className="flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We bring more than just capital to the table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-[#1fd43a] mb-4" />
              <h3 className="text-gray-800 text-xl font-semibold mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                HIGH EXPERIENCE IN PRIMARY MARKETS
              </p>
              <p className="text-gray-600">EXPERIENCE IN SME STOCK EXCHANGE</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <BarChart2 className="h-12 w-12 text-[#1fd43a] mb-4" />
              <h3 className="text-gray-800 text-xl font-semibold mb-2">
                Strategic Growth
              </h3>
              <p className="text-gray-600">
                UNDERSTANDING RISK APPETITES/MANAGEMENT
              </p>
              <p className="text-gray-600">FLEXIBILITY AND ADAPTABILITY</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Globe className="h-12 w-12 text-[#1fd43a] mb-4" />
              <h3 className="text-gray-800 text-xl font-semibold mb-2">
                Global Network
              </h3>
              <p className="text-gray-600">
                SPONSOR AND FUND MANAGERS "SKIN IN THE GAME"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TPC Section */}
      <div className="container h-[640px] mt-20 align-center m-auto">
        <div className="header text-black">
          <span className="title text-3xl text-black-900 font-bold">
            Target Portfolio Characteristics
          </span>
        </div>

        <div className="stats bg-white text-black mt-20">
          <div className="stat">
            <div className="value">
              <span className="value">{dealSize}</span>
              <span className="unit">CR</span>
            </div>
            <span className="label">DEAL SIZE</span>
          </div>

          <div className="stat">
            <div className="value">
              <span className="value">{investeeCompanies}</span>
            </div>
            <span className="label">INVESTEE COMPANIES</span>
          </div>

          <div className="stat">
            <div className="value">
              <span className="value">{minorityStakeInvestment}%</span>
            </div>
            <span className="label">MINORITY STAKE INVESTMENT</span>
          </div>
        </div>

        <div className="header text-black mt-20">
          <span className="title text-3xl font-bold text-black">
            We Have Skin In The Game
          </span>
        </div>

        <div className="commitments bg-white text-black mt-20">
          <div className="commitment">
            <div className="value">
              <span className="value">{sponsorCommitment}</span>
              <span className="unit">CR</span>
            </div>
            <span className="label">SPONSOR COMMITMENT</span>
          </div>

          <div className="commitment">
            <div className="value">
              <span className="value">{fundManagerCommitment}</span>
              <span className="unit">CR</span>
            </div>
            <span className="label">FUND MANAGER COMMITMENT</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#1fd43a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <div className="text-lg">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Portfolio Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <NiftyIndicesBarGraph />
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#1fd43a]" />
              <div>
                <h3 className="text-gray-800 font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 9892486751</p>
                <p className="text-gray-600">+91 9727201001</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#1fd43a]" />
              <div>
                <h3 className="text-gray-800 font-semibold">Email Us</h3>
                <p className="text-gray-600">bmanish11@gmail.com</p>
                <p className="text-gray-600">Jigneshji2005@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#1fd43a]" />
              <div>
                <h3 className="text-gray-800 font-semibold">Visit Us</h3>
                <p className="text-gray-600">
                  06, Nathubhai Tower, Udhna Main Road Surat, Gujrat, 394210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
