"use client";

import React from 'react'
import { Card, CardContent } from "../../../components/ui/card";
import { CheckCircle, ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ENTERPRISE_FEATURES, FEATURES } from "./_constants";
import FeatureCategory from "./components/FeatureCategory";
import FeatureItem from "./components/FeatureItem";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UpgradeButton from "./components/UpgradeButton";
import LoginButton from "../../../components/LoginButton";
import Footer from "../../../components/ui/Footer";

function Upgrade() {
  const router = useRouter();
  const features = [
    {
      title: "Realistic AI Interviews",
      icon: Brain,
      description: "Advanced neural networks simulate real-world interview scenarios",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Instant Feedback",
      icon: Zap,
      description: "Millisecond-precise analysis of your performance and potential",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Personalized Learning",
      icon: Sparkles,
      description: "Adaptive AI tailors questions to your unique skill profile",
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Fix with -z-10 (sends it to the back) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-700 via-black to-slate-800 text-white no-scrollbar"></div>

      <div className="relative w-full h-full overflow-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto h-full">
          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="relative text-4xl md:text-5xl lg:text-7xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text mb-8 pt-24">
                Elevate Your <br />
                Career Experience
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Upgrade to monthly plan to access unlimited AI mock interviews and more.
              </p>
            </div>

          </header>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 flex justify-center gap-x-8 w-full pt-8"
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-2 border-transparent relative group overflow-hidden hover:border-gradient-animated transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardContent className="p-8 text-center relative z-10">
                  <feature.icon
                    className="text-white/70 mx-auto mb-6 group-hover:text-white transition-colors duration-300 animate-soft-pulse"
                    size={50}
                  />
                  <h3
                    className="text-2xl text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300"
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-200 text-large group-hover:text-white/80 transition-colors duration-300"
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Pricing Card */}
          <div className="relative max-w-4xl mx-auto pt-24">
            <div
              className="absolute -inset-px top-16 bg-gradient-to-r from-blue-500
             to-purple-500 rounded-2xl blur opacity-10"
            />
            <div className="relative bg-[#12121a]/90 backdrop-blur-xl rounded-2xl pt-4">
              <div
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r 
              from-transparent via-blue-500/50 to-transparent"
              />
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="relative p-8 md:p-12">
                {/* header */}
                <div className="text-center mb-12">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-gray-800/60 mb-6">
                    <Star className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white mb-4">Lifetime Pro Access</h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-2xl text-gray-400">₹</span>
                    <span className="text-6xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                      49
                    </span>
                    <span className="text-xl text-gray-400">one-time</span>
                  </div>
                  <p className="text-gray-400 text-lg">Unlock the full potential of Devforge</p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-60 mb-16 max-w-9xl mx-10 px-6">

                  <FeatureCategory label="Development">
                    {FEATURES.development.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>



                  <FeatureCategory label="Deployment">
                    {FEATURES.deployment.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                  <SignedIn>
                    <UpgradeButton />
                  </SignedIn>

                  <SignedOut>
                    <LoginButton />
                  </SignedOut>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Upgrade
