import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react"
import { Anton } from "next/font/google"
import Testimonials from "@/components/Testimonials";



const anton = Anton({
  subsets: ["latin"],
  weight: ["400"], // Anton only has one weight
})

export default function Home() {
  return (
   <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-transparent absolute top-0 left-0 w-full z-50 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
<div className="flex items-center">
  <a href="/" className="flex items-center">
    <Image
      src="/logo.png"
      alt="Site Logo"
      width={100}
      height={28}
      className="w-10 sm:w-16 md:w-22 lg:w-28 h-auto"
    />
  </a>
</div>



          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="hover:text-[#D77A61] transition-colors duration-300">Services</a>
            <div className="relative group">
              <a href="#" className="hover:text-[#D77A61] transition-colors duration-300">About</a>
            </div>
            <div className="relative group">
              <a href="#" className="hover:text-[#D77A61] transition-colors duration-300">Testimonials</a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center relative bg-gray-800"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506197061617-7f5c0b093236?q=80&w=1118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <h1
            className={`${anton.className} whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking`}
          >
            UNLOCK WHAT’S WITHIN.
          </h1>

          {/* Centered Button */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="bg-transparent border border-white text-white 
             hover:bg-[#D77A61] hover:text-white transition-colors 
             px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base 
             md:px-10 md:py-4 md:text-lg 
             rounded-md inline-block"
            >
              GET STARTED →
            </a>
          </div>
        </div>
      </section>
 

      {/* About Section */}
      <section className="py-16 bg-[#D77A61] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#BFCBC2] text-lg mb-4">YOUR TRANSFORMATION BEGINS HERE</p>
            <h2 className="font-anton text-5xl lg:text-6xl leading-tight">
              STEP INTO A
              <br />
              LIFE WITH NO
              <br />
              LIMITS!
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              At Unlock MST, we believe the only limits that exist are the ones you place on yourself. Our mission is to help individuals live the life they want without pain or confinement. We are focused on not only transforming one’s body but transforming their life. Regardless of the desired outcome, Unlock MST is here to bridge the gap between where you are and where you want to be.
            </p>
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Assisted Stretching */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Assisted Stretching"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-anton text-2xl mb-2">ASSISTED STRETCHNG</h3>
                  <Button className="bg-[#D77A61] hover:bg-white text-black font-bold">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Personal Training */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Personal Training"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-anton text-2xl mb-2">PERSONAL TRAINING</h3>
                  <Button className="bg-[#D77A61] hover:bg-white text-black font-bold">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* SKILL DEVELOPMENT */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1505666287802-931dc83948e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="SKILL DEVELOPMENT"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-anton text-2xl mb-2">SKILL DEVELOPMENT</h3>
                  <Button className="bg-[#D77A61] hover:bg-white text-black font-bold">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Team Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-[#D77A61] text-lg mb-4">WHY US?</p>
      <h2 className="font-anton text-4xl lg:text-6xl text-black mb-8">
        UNMATCHED<br />
        EXCELLENCE.
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Excellence is the floor, not the ceiling. Good isn't good enough if it isn't our best. We are committed to bringing all we have no matter how big or small the goal. Our dedication is reflected in our experience. We've had firsthand encounters with many—if not all—of the countless ailments and challenges we aim to address.
	It’s one thing to learn something; it’s another to live it. Our personal journeys have played a key role in shaping our approach and the success that follows. No shortcuts, just work. Through careful assessment, meticulous planning, and effective action, we can help maximize your potential while alleviating pain. 
      </p>
    </div>
  </div>
</section>


{/* Services Section */}
<section id="services" className="py-20 bg-[#D77A61]">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-white mb-12">
      WHAT WE OFFER
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
        <h3 className="text-xl text-[#BFCBC2] font-semibold mb-4">Personal Training</h3>
        <p className="text-black">
          One-on-one sessions that give you the attention you deserve. Alleviate pain, build strength, shed fat, and achieve results with a program designed to meet your needs.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
        <h3 className="text-xl text-[#BFCBC2] font-semibold mb-4">Online Coaching</h3>
        <p className="text-black">
          Flexible coaching designed for your lifestyle—wherever you are. Get personalized workout plans, tailored nutrition guidance, and ongoing support, all delivered through our easy-to-use digital platform.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
        <h3 className="text-xl text-[#BFCBC2] font-semibold mb-4">Group or Partner Training</h3>
        <p className="text-black">
          Train with others—friends, family, or like-minded individuals—in a setting that fosters community, accountability, and fun. Each session is built to elevate and energize everyone involved.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
        <h3 className="text-xl text-[#BFCBC2] font-semibold mb-4">Assisted Stretching</h3>
        <p className="text-black">
          Unlock your body’s full potential with assisted stretching that goes beyond flexibility. These sessions blend relaxation with mobility training to reprogram movement patterns, relieve aches and pains, and build lasting strength. Because true long-term relief isn’t just about stretching—it’s about creating a stronger, more resilient body.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
        <h3 className="text-xl text-[#BFCBC2] font-semibold mb-4">Skill Development and Athletic Performance</h3>
        <p className="text-black">
          Whether you’re chasing a new skill or an athlete striving to raise your game, we’ve got you covered. With a strong foundation in kinesiology, we identify exactly where you are and what you need to excel. From sport-specific techniques to performance breakthroughs, we’ve helped countless clients master their goals — and we’ll go the extra mile to help you do the same.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
        <h3 className="text-xl text-[#BFCBC2] font-semibold mb-4">More Services</h3>
        <p className="text-black">
	  Basketball Skills Training (on court)
	  <br /> 
          Corrective Exercise and Rehabilitation
	  <br />
	  Nutrition Coaching
	  <br />
	  Lifestyle and Habit Coaching
	  <br />
   	  Tissue Release
        </p>
      </div>
    </div>
  </div>
</section>


{/* Testimonials Section */}
<section className="py-16 bg-black text-white" id="testimonials">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="font-anton text-4xl lg:text-6xl mb-8">
        RESULTS THAT REDEFINE YOU.
      </h2>
    </div>

    <div className="max-w-4xl mx-auto relative">
      {/* Slide 1 */}
      <input type="radio" name="ts" id="t1" className="hidden peer/t1" defaultChecked />
      <div className="testimonial-slide bg-[#308875] rounded-lg p-8 mb-12 opacity-0 transition-opacity duration-500 absolute inset-0 peer-checked/t1:opacity-100 peer-checked/t1:relative peer-checked/t1:inset-auto">
        <p className="text-lg leading-relaxed mb-6">
          "Before working with Gabriel, I tried a massage therapist specializing in myofascial rehabilitation. After three sessions and a commitment to implementing specific exercises at home, there was little progress. That was exactly the opposite of my experience with Gabriel.
          After four sessions, my lower back and knee pain are gone. My core is stronger. I’m hiking 5–10 miles, up and down stairs without pain, and can go from a sitting position to standing effortlessly.
          <br /><br />
          Gabriel gave me exercises to implement at home, checks to see how things are going and continually monitors my progress. He is always on time, professional in both his behavior and communication and exercises a great deal of patience. From the results I've experienced
          in such a short time, I highly recommend Gabriel's services to everyone."
        </p>
        <div className="mt-6">
          <p className="font-bold text-white">Gwen</p>
          <p className="text-[#D77A61]">Personal Training Client</p>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="t7" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Prev</label>
          <label htmlFor="t2" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Next</label>
        </div>
      </div>

      {/* Slide 2 */}
      <input type="radio" name="ts" id="t2" className="hidden peer/t2" />
      <div className="testimonial-slide bg-[#308875] rounded-lg p-8 mb-12 opacity-0 transition-opacity duration-500 absolute inset-0 peer-checked/t2:opacity-100 peer-checked/t2:relative peer-checked/t2:inset-auto">
        <p className="text-lg leading-relaxed mb-6">
          "I have had chronic, upper body, muscular pain and tension for many years, beginning after having children. I was previously working with a massage therapist for a couple of years to address this issue but once I started working with Gabriel, his unique technique and approach to working with the myofascial layers of my body started addressing and resolving my issues quickly.
          <br /><br />
          I've been working with Gabriel for almost 6 months and I have witnessed more physical change and improvement under his guidance than with past bodyworkers."
        </p>
        <div className="mt-6">
          <p className="font-bold text-white">Eloisa</p>
          <p className="text-[#D77A61]">Assisted Stretch Client</p>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="t1" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Prev</label>
          <label htmlFor="t3" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Next</label>
        </div>
      </div>

      {/* Slide 3 */}
      <input type="radio" name="ts" id="t3" className="hidden peer/t3" />
      <div className="testimonial-slide bg-[#308875] rounded-lg p-8 mb-12 opacity-0 transition-opacity duration-500 absolute inset-0 peer-checked/t3:opacity-100 peer-checked/t3:relative peer-checked/t3:inset-auto">
        <p className="text-lg leading-relaxed mb-6">
          "Working with Gabriel is amazing. He is extremely knowledgeable and while he is friendly, he will not let you slack. Gabe created a program that was tailor-made for me to support my busy work travel schedule. When I was able to meet him in the gym, I left every session drenched in sweat and satisfaction from a challenging workout.
          <br /><br />
          It’s great to have a personable trainer that holds you accountable. I recommend him to anyone that is looking for the best."
        </p>
        <div className="mt-6">
          <p className="font-bold text-white">Wyndal</p>
          <p className="text-[#D77A61]">Business Professional</p>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="t2" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Prev</label>
          <label htmlFor="t4" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Next</label>
        </div>
      </div>

      {/* Slide 4 */}
      <input type="radio" name="ts" id="t4" className="hidden peer/t4" />
      <div className="testimonial-slide bg-[#308875] rounded-lg p-8 mb-12 opacity-0 transition-opacity duration-500 absolute inset-0 peer-checked/t4:opacity-100 peer-checked/t4:relative peer-checked/t4:inset-auto">
        <p className="text-lg leading-relaxed mb-6">
          "I was struggling with lower back pain and sciatic nerve pain. Gabriel has been phenomenal in helping me stretch and heal naturally. His strategy for my improvement has been simple, effective and sustainable. I highly recommend this for anyone struggling or just looking to improve your overall health experience."
        </p>
        <div className="mt-6">
          <p className="font-bold text-white">Ivan</p>
          <p className="text-[#D77A61]">Entreprenuer</p>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="t3" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Prev</label>
          <label htmlFor="t5" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Next</label>
        </div>
      </div>

      {/* Slide 5 */}
      <input type="radio" name="ts" id="t5" className="hidden peer/t5" />
      <div className="testimonial-slide bg-[#308875] rounded-lg p-8 mb-12 opacity-0 transition-opacity duration-500 absolute inset-0 peer-checked/t5:opacity-100 peer-checked/t5:relative peer-checked/t5:inset-auto">
        <p className="text-lg leading-relaxed mb-6">
          "Gabriel was probably the best trainer I ever worked with. He was very attentive to issues. I have with my spine and help me tremendously with flexibility and mobility."
        </p>
        <div className="mt-6">
          <p className="font-bold text-white">Cerrone</p>
          <p className="text-[#D77A61]">Business Owner</p>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="t4" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Prev</label>
          <label htmlFor="t6" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Next</label>
        </div>
      </div>

      {/* Slide 6 */}
      <input type="radio" name="ts" id="t6" className="hidden peer/t6" />
      <div className="testimonial-slide bg-[#308875] rounded-lg p-8 mb-12 opacity-0 transition-opacity duration-500 absolute inset-0 peer-checked/t6:opacity-100 peer-checked/t6:relative peer-checked/t6:inset-auto">
        <p className="text-lg leading-relaxed mb-6">
          "As a former Division I athlete, it was important for me to find a high quality trainer to continue to push my body. Not only did Gabe do a great job of getting me back in shape, but he helped me increase my mobility and rehab my weakened shoulder.
          He’s punctual, professional, and most importantly, an extremely knowledgeable trainer who will help you improve in more ways than expected."
        </p>
        <div className="mt-6">
          <p className="font-bold text-white">Tyler</p>
          <p className="text-[#D77A61]">Former Athlete</p>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="t5" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Prev</label>
          <label htmlFor="t7" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Next</label>
        </div>
      </div>

      {/* Slide 7 */}
      <input type="radio" name="ts" id="t7" className="hidden peer/t7" />
      <div className="testimonial-slide bg-[#308875] rounded-lg p-8 mb-12 opacity-0 transition-opacity duration-500 absolute inset-0 peer-checked/t7:opacity-100 peer-checked/t7:relative peer-checked/t7:inset-auto">
        <p className="text-lg leading-relaxed mb-6">
          "Knowledgable and very detailed. Gives great instructions with workouts and easy to communicate with if you have any questions. He also does check-ins to ensure the program you have is right for you or if any adjustments need to be made. 
          I’ve had trainers before, but never one that was as intentional with whatever goals I have."
        </p>
        <div className="mt-6">
          <p className="font-bold text-white">Dervon</p>
          <p className="text-[#D77A61]">Online Coaching Client</p>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="t6" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Prev</label>
          <label htmlFor="t1" className="cursor-pointer bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-md transition">Next</label>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
  <a
    href="https://www.thumbtack.com/profile/services/545992905758818304/reviews"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#D77A61] hover:bg-white text-black font-bold px-8 py-3 rounded-md transition"
  >
    Read More Reviews
  </a>
</div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-16 bg-[#D1D3D4] text-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-anton mb-8 text-center">LET'S GET STARTED</h2>

    <form
      action="https://formspree.io/f/mldlqqpk"
      method="POST"
      className="max-w-xl mx-auto space-y-6"
    >
      <div>
        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg text-black"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg text-black"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded-lg text-black"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#D77A61] hover:bg-white hover:text-black text-white font-bold px-6 py-3 rounded-lg transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>




      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Info */}
            <div className="md:col-span-1">
              <div className="font-anton text-xl font-bold mb-6">
                <span className="text-white">UNLOCK</span>
                <br />
                <span className="text-white">MST</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">3375 E Shea Blvd STE N</p>
              <p className="text-gray-400 text-sm mb-2">Phoenix, AZ 85028</p>
              <p className="text-gray-400 text-sm mb-2">📞 (+1) 480 524 0529</p>
              <p className="text-gray-400 text-sm">✉️ info@unlockmst.com</p>
            </div>

            {/* Pages */}
            <div>
              <h3 className="text-[#D77A61] font-bold text-lg mb-6">Pages</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Coaching</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Results</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Member Portal</a></li>
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h3 className="text-[#D77A61] font-bold text-lg mb-6">Other Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-[#D77A61] font-bold text-lg mb-6">Subscribe</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:border-yellow-400"
                />
                <Button className="bg-[#D77A61] hover:bg-white text-black font-bold px-6 py-2 rounded-r-md">
                  Sign up
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2025 Unlock MST. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#D77A61] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#D77A61] transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}