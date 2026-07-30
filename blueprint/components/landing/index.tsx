import Header from './Header';
import About from './About';
import Match_prev from './match_prev';
import Footer from './Footer';
import {
  Hero,
  HeroContent,
} from "@/components/hero";;

export default function LandingPage(){
    return(
        <>
        <Header />
        <Hero>
            <HeroContent
        badge="Blueprint"
        title="Find Scholarships That Fit You"
        subtitle="Connect with scholarships tailored to your academic profile and career goals."
        />
      </Hero>
        <About />
        <Match_prev />
        <Footer />
        </>
    )
}