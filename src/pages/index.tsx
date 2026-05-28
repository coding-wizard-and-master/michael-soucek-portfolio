
import React from 'react';
import TopNav from '../components/TopNav';
import HeroSection from '../components/HeroSection';
import AtAGlanceSection from '../components/AtAGlanceSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <TopNav />
            <HeroSection />
            <AtAGlanceSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;