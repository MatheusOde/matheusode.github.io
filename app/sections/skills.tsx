import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <section className='p-5 w-full'>
      <h1>Skills Section</h1>
      <ul className='flex flex-wrap'>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/html5.png" alt="HTML" layout="fill" objectFit="contain" />
          </div>
          <p>HTML</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/css3.png" alt="CSS" layout="fill" objectFit="contain" />
          </div>
          <p>CSS</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/javascript.png" alt="JavaScript" layout="fill" objectFit="contain" />
          </div>
          <p>JavaScript</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/c.png" alt="C" layout="fill" objectFit="contain" />
          </div>
          <p>JavaScript</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/c++.png" alt="C++" layout="fill" objectFit="contain" />
          </div>
          <p>JavaScript</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/java.png" alt="Java" layout="fill" objectFit="contain" />
          </div>
          <p>JavaScript</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/python.png" alt="Python" layout="fill" objectFit="contain" />
          </div>
          <p>JavaScript</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square ">
            <Image src="/images/skill/vuejs.png" alt="Vue" layout="fill" objectFit="contain" />
          </div>
          <p>JavaScript</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/react.png" alt="React" layout="fill" objectFit="contain" />
          </div>
          <p>React</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/nextjs.png" alt="React" layout="fill" objectFit="contain" />
          </div>
          <p>NextJs</p>
        </li>
        <li className='px-10 py-10 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6'>
          <div className="relative w-full aspect-square">
            <Image src="/images/skill/tailwind.png" alt="React" layout="fill" objectFit="contain" />
          </div>
          <p>Tailwind CSS</p>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
