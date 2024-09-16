import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Intro from './../pages/Intro';
import Skills from "./../pages/Skills";


const Home = () => {
    const introRef = useRef<HTMLDivElement | null>(null);
    const scrollableRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (scrollableRef.current) {
                scrollableRef.current.scrollTop += event.deltaY;
            }
        };

        const introElement = introRef.current;
        if (introElement) {
            introElement.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (introElement) {
                introElement.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="grid h-screen max-w-screen-xl grid-cols-2 gap-4 mx-auto">
                <div ref={introRef} className="h-screen">
                    <Intro />
                </div>
                <div ref={scrollableRef} className="h-screen overflow-y-auto">
                    <Projects />
                    <Experience />
                    <Skills />
                    <Education />
                    <Contact />
                </div>
            </div>
        </>
    );
}


export default Home