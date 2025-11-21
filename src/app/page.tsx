"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import TestimonialCardThree from "@/components/sections/testimonial/TestimonialCardThree";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Calendar, ChefHat, Heart, Instagram, Leaf, Phone, Sparkles, Users, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Savoria"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Savoria"
          description="Experience culinary excellence with our seasonal menu crafted by award-winning chefs. Fresh, locally sourced ingredients prepared with passion."
          tag="Now Open"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736769875-5zayqi3m.jpg"
          imageAlt="Elegant restaurant dining room"
          frameStyle="card"
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Book a Table", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Discover the art of refined dining where tradition meets innovation. Our restaurant brings together the finest ingredients, masterful technique, and warm hospitality to create unforgettable culinary moments."
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Featured Dishes"
          description="Indulge in our signature creations prepared fresh daily"
          tag="Chef's Selection"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Pan-Seared Salmon",
              price: "$28",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736771367-s0krvnm4.jpg",
              imageAlt: "Perfectly seared salmon fillet"
            },
            {
              id: "2",
              name: "Handmade Pasta Carbonara",
              price: "$22",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736770544-o2i3xwt9.jpg",
              imageAlt: "Creamy pasta carbonara with fresh ingredients"
            },
            {
              id: "3",
              name: "Organic Garden Salad",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736772469-rl817sol.jpg",
              imageAlt: "Fresh seasonal vegetables and greens"
            }
          ]}
        />
      </div>

      <div id="highlights" data-section="highlights">
        <FeatureCardTwo
          title="Why Choose Savoria"
          description="We believe in delivering more than just food - we create experiences"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Farm to Table",
              description: "Every ingredient sourced from local farms within 50 miles to ensure freshness and support our community",
              icon: Leaf
            },
            {
              title: "Expert Chefs",
              description: "Our culinary team brings decades of combined experience from Michelin-starred kitchens around the world",
              icon: Users
            },
            {
              title: "Intimate Ambiance",
              description: "Carefully designed spaces with warm lighting and thoughtful details create the perfect setting for every occasion",
              icon: Heart
            },
            {
              title: "Seasonal Menu",
              description: "Our menu evolves with the seasons to showcase the best ingredients available throughout the year",
              icon: Calendar
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Real experiences from diners who have visited Savoria"
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Michelle",
              handle: "@michelle_dines",
              testimonial: "Savoria exceeded all our expectations. The salmon was perfectly cooked and the service was impeccable. We'll definitely be back!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736773179-nvbjfxay.jpg",
              imageAlt: "Michelle's portrait"
            },
            {
              id: "2",
              name: "James",
              handle: "@foodie_james",
              testimonial: "Best dining experience in the city. The chef's tasting menu was absolutely incredible. Every course was a masterpiece.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736773878-cru2f4lm.jpg",
              imageAlt: "James's portrait"
            },
            {
              id: "3",
              name: "Sofia",
              handle: "@sofia_loves_food",
              testimonial: "The atmosphere is so inviting and the food is restaurant-quality. We celebrated our anniversary here and it was perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736774637-1w0coznm.jpg",
              imageAlt: "Sofia's portrait"
            },
            {
              id: "4",
              name: "David",
              handle: "@david_eats",
              testimonial: "Finally found a restaurant that truly cares about quality ingredients and preparation. Every bite tasted fresh and delicious.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763736775355-p09yygv8.jpg",
              imageAlt: "David's portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          tagIcon={Phone}
          title="Reserve Your Table Today"
          description="Book your reservation now and join us for an unforgettable dining experience. Limited tables available, especially for weekend service."
          inputPlaceholder="Enter your email"
          buttonText="Get Reservation Link"
          termsText="We'll send you a booking confirmation and special offers to your email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Savoria"
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Reservations", href: "#contact" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Lunch: 11AM - 3PM", href: "#" },
                { label: "Dinner: 5PM - 11PM", href: "#" },
                { label: "Closed Mondays", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "(555) 123-4567", href: "#" },
                { label: "info@savoria.com", href: "#" },
                { label: "123 Main Street", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Like us on Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" }
          ]}
          copyrightText="© Savoria Restaurant 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}