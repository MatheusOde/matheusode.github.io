import React from 'react';
import Image from 'next/image';

function Projects() {
  return (
    <section className='p-10 w-full'>
      <h1>Projects Section</h1>
      <ul className='flex flex-wrap'>
        <li className='px-10 py-5 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
          <div className="relative w-full aspect-square">
            <Image src="/images/proj/matheusode.png" alt="Me!" layout="fill" objectFit="scale-down" />
          </div>
          <p> This is the website you&apos;re on right now!</p>
        </li>
        <li className='px-10 py-5 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
          <div className="relative w-full aspect-square">
            <Image src="/images/proj/eveio.png" alt="Me!" layout="fill" objectFit="scale-down" />
          </div>
        </li>
        <li className='px-10 py-5 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
          <div className="relative w-full aspect-square">
            <Image src="/images/proj/pong.png" alt="Me!" layout="fill" objectFit="scale-down" />
          </div>
        </li>
        <li className='px-10 py-5 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
          <div className="relative w-full aspect-square">
            <Image src="/images/proj/skooter.png" alt="Me!" layout="fill" objectFit="scale-down" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
