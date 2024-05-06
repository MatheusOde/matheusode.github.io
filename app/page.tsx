import Navbar from "./navbar";
import Landing from "./sections/landing"
import Projects from './sections/projects';
import Skills from './sections/skills';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between snap-y overflow-y-scroll snap-proximity">
      <div className="flex min-h-screen w-full flex items-center justify-center bg-white width-100 snap-start px-0 sm:px-5 md:px-10 lg:px-28 xl:px-36">
      <Landing/>
      </div>
      <div className="z-10 sticky top-0 ">
        <Navbar/>
      </div>
      <div className="block min-h-screen w-full flex items-center justify-center bg-red-500 snap-start px-0 sm:px-5 md:px-10 lg:px-28 xl:px-32">
        <Projects/>
      </div>
      <div className="block min-h-screen w-full flex items-center justify-center bg-blue-500 snap-start px-0 sm:px-5 md:px-10 lg:px-28 xl:px-32">
        <Skills/>
      </div>
    </main>
  );
}