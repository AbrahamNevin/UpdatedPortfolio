import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Portfolio />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
