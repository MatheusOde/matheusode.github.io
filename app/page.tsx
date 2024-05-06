import Navbar from "./navbar";
import Landing from "./sections/landing"
import Projects from './sections/projects';
import Skills from './sections/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex-grow h-screen w-full flex items-center justify-center bg-white width-100">
        <Landing/>
      </div>
      <div className="z-10 sticky top-0">
        <Navbar/>
      </div>
      <div className="flex-grow h-screen w-full flex items-center justify-center bg-red-500">
        <Projects/>

      </div>
      <div className="flex-grow h-screen w-full flex items-center justify-center bg-blue-500">
        <Skills/>

      </div>
    </main>
  );
}