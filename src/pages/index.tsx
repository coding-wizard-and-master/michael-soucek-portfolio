
import React from 'react';
import TopNav from '../components/TopNav';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <TopNav />
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <Footer />
        </div>
    );
};

export default Home;