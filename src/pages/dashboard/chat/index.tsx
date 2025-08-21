import Box from "./box";

export const Chat = () => {
  return (
    <div className="sticky top-0 layout-content-container w-[400px] shadow-sm">
      <div className="relative h-full flex flex-col gap-4">
        <div className="flex items-end gap-3 p-4">
          <div className="flex flex-1 flex-col gap-1 items-start">
            <p className="text-[#93adc8] text-[13px] font-normal leading-normal max-w-[360px]">
              CareerQuest AI
            </p>
            <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 bg-[#243647] text-white">
              Hello! I'm CareerQuest AI, your personal career guide. How can I
              assist you today?
            </p>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUtprV7RpinciF5X3hYhBGZk3sq45bWHmpWVpDJ5riNDbl8fQM5zIa3mcUp-DuUoQz7mG04G4d2VM1M_m1BAoFjaQxuZAJgOlwk49wlMrAyINRnECyWrXxqh2TqdTNCt5i7khavRODoVHaW1PgB73Vb6MjcIEMntz3zfprhyfe85DoN1xFv7Qc4pVuNDyEzXXypsVinr4a2ecHFkXb0oOcMU2T6k8-EKCK6eIB8DSZtS0b9K385R-asuQXVPXcML-_NOK8jUPFWHU")',
            }}
          ></div>
        </div>
        <Box />
      </div>
    </div>
  );
};
