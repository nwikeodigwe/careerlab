import { Apply } from "./apply";

export const Content = () => {
  return (
    <div className="layout-content-container flex flex-col mt-10">
      <h3 className="text-white text-lg font-semibold leading-tight tracking-[-0.015em] pb-2">
        About the job
      </h3>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1">
        We are seeking a talented Software Engineer to join our dynamic team.
        You will be responsible for developing and maintaining high-quality
        software solutions, collaborating with cross-functional teams, and
        ensuring the scalability and reliability of our applications. This role
        offers the opportunity to work on cutting-edge technologies and
        contribute to innovative projects.
      </p>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Responsibilities
      </h3>
      <div className="">
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            Design, develop, and maintain software applications.
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            Collaborate with product managers and designers to define project
            requirements.
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            Write clean, efficient, and well-documented code.
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            Participate in code reviews and contribute to improving code
            quality.
          </p>
        </label>
      </div>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Requirements
      </h3>
      <div className="">
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            Bachelor's degree in Computer Science or related field.
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            3+ years of experience in software development.
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            Proficiency in Java, Python, or C++.
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#344d65] border-2 bg-transparent text-[#1773cf] checked:bg-[#1773cf] checked:border-[#1773cf] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#344d65] focus:outline-none"
          />
          <p className="text-white text-base font-normal leading-normal">
            Strong problem-solving and communication skills.
          </p>
        </label>
      </div>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Company Culture
      </h3>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1">
        At Innovatech Solutions, we foster a collaborative and inclusive work
        environment. We value innovation, continuous learning, and work-life
        balance. Our team is passionate about technology and dedicated to
        creating impactful solutions.
      </p>
      <Apply />
    </div>
  );
};
