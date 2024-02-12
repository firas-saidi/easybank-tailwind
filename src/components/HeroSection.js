import React from 'react';
import mockups from '../assets/images/image-mockups.png';

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-75px)] max-w-[1700px] overflow-hidden bg-heroPattern bg-[length:200%] bg-[top_-4rem_left] bg-no-repeat lg:ml-auto lg:flex lg:bg-[length:80%] lg:bg-[top_right_-15rem]">
      <div className="mx-auto w-fit lg:order-2 lg:basis-1/2  ">
        <img src={mockups} alt="mockup" />
      </div>
      <div className="pb-8 lg:order-1 lg:mt-[10%] lg:basis-1/2 lg:pb-0 lg:px-4">
        <h1 className="mx-auto my-4 w-fit text-center text-3xl lg:mx-0  lg:max-w-[500px] lg:text-left lg:text-6xl">
          Next generation digital banking
        </h1>
        <p className="mx-auto my-4 w-fit text-center text-slate-500 lg:mx-0 lg:max-w-[500px] lg:text-left lg:text-2xl">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="button mx-auto lg:mx-0 lg:mt-8">
          Request Invite
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
