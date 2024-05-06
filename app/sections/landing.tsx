import React from 'react';
import Image from 'next/image';

function Landing() {
  return (
    <section>
      <div className='flex p-5'>
        <div className='w-1/2 flex justify-center'>
          <Image className='rounded-full' src="/images/profile.jpeg" alt="Me!" width={300} height={300}/>
        </div>
        <div className='p-10 w-1/2 flex flex-col justify-center'>
          <h1 className='text-black'>About<span>.me</span></h1>
          <p className='text-black'>Hi! Im Matheus, a researcher, software engineer and USP student. This is a website where I present my projects and information regarding my abilities. Hope you like it!</p>
        </div>
      </div>
      {/* Your landing section content goes here */}
    </section>
  );
}

export default Landing;
