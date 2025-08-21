export const Hero = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuBY2O12AFGtLABLs2ATy7D9eB_7735ZPCrYTHZVd87mc53ixyriwk2Wzx5CdxOoTNb3yLkvVemHauE2rW3nGJw8rJIm6Yh0CoI9rn6m9TfYqn7pEMwfZ_1xcUMy-Z_b4t1Zh0U0yBwktz7crueL-JgcncvcybbUUn0WyRzM_rosNC4MRCDOfcdKGEwyYAJ1CcU7228vgVzRIT3y5myomc1SmGi5eraOhRoafq9wmpAfgo8NGfO53JBkJkxEhkYkab2PNo7bjhHDyKA)",
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Discover Your Path with AI
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Navigate your career journey with our AI-powered platform. Explore
              personalized career paths, gain insights, and connect with
              opportunities that match your unique skills and aspirations.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Explore Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
