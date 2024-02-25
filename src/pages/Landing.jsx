// src/pages/Landing.jsx

import { Link } from "react-router-dom";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FeatureCard from "../components/Landing/FeatureCard";
import { features } from "../data/features";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/Landing/TestimonialCard";

const sections = ["Hero", "Features", "Testimonials"];

const Landing = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const heroRef = useRef(null);
	const featureRef = useRef(null);
	const testimonialRef = useRef(null);
	const [currentSection, setCurrentSection] = useState(0);

	const scrollToTop = () => {
		if (heroRef.current) {
			heroRef.current.scrollIntoView({ behavior: "smooth" });
		}
		setCurrentSection(0);
	};

	const handleScrollToSection = () => {
		const nextSectionIndex = Math.min(currentSection + 1, sections.length - 1);
		setCurrentSection(nextSectionIndex);
		const nextSectionRef = getSectionRef(nextSectionIndex);
		if (nextSectionRef.current) {
			nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
		console.log(`Scrolled to section: ${sections[nextSectionIndex]}`);
	};

	const getSectionRef = (index) => {
		switch (index) {
			case 0:
				return heroRef;
			case 1:
				return featureRef;
			case 2:
				return testimonialRef;
			default:
				return heroRef;
		}
	};

	useEffect(() => {
		// If user is logged in, redirect to home page
		if (user) {
			navigate("/home");
		}
	}, [user, navigate]);

	if (user) {
		return null;
	}

	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-warm dark:bg-eerie space-y-20 md:space-y-10">
			{/* Hero Section */}
			<section
				ref={heroRef}
				id="Hero"
				className="flex flex-col md:flex-row justify-center items-center h-screen md:h-auto"
			>
				<div className="flex w-full items-center justify-center">
					<img
						src="/logo.png"
						alt="reflectify logo"
						className="p-8 bg-transparent"
					/>
				</div>
				<div className="space-y-20 md:space-y-28 sm:w-full sm:p-20 md:p-24 lg:p-28">
					<div>
						<h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
							Welcome to Reflectify
						</h1>
						<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
							Your personal journaling application
						</p>
					</div>

					{/* CTA component */}
					<div className="space-x-4 md:space-x-8">
						<Link to="/login" className="login-btn">
							Login
						</Link>
						<Link to="/register" className="register-btn">
							Register
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section ref={featureRef} id="Features" className=" space-y-20">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map((feature, index) => (
							<FeatureCard key={index} {...feature} />
						))}
					</div>
				</div>
				{/* CTA component */}
				<div className="space-x-4 md:space-x-8">
					<Link to="/login" className="login-btn">
						Login
					</Link>
					<Link to="/register" className="register-btn">
						Register
					</Link>
				</div>
			</section>

			{/* Testimonials Section */}
			<section
				ref={testimonialRef}
				id="Testimonials"
				className="min-h-screen space-y-20"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{testimonials.map((testimonial, index) => (
							<TestimonialCard key={index} testimonial={testimonial} />
						))}
					</div>
				</div>
				{/* CTA component */}
				<div className="space-x-4 md:space-x-8">
					<Link to="/login" className="login-btn">
						Login
					</Link>
					<Link to="/register" className="register-btn">
						Register
					</Link>
				</div>
			</section>

			{/* Animated caret down */}
			{currentSection < sections.length - 1 && (
				<div
					className="fixed bottom-6 right-6 cursor-pointer text-blue-500 dark:text-yellow-500 flex items-center space-x-2 animate-bounce"
					onClick={handleScrollToSection}
				>
					<FaChevronDown className="text-2xl" />
				</div>
			)}

			{/* Scroll to top button */}
			{currentSection !== 0 && (
				<div
					className="fixed bottom-6 left-6 cursor-pointer text-blue-500 dark:text-yellow-500 animate-bounce"
					onClick={scrollToTop}
				>
					<FaChevronUp className="text-2xl" />
				</div>
			)}
		</div>
	);
};

export default Landing;
