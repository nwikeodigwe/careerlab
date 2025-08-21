export const Testimonials = () => {
  return (
    <div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Success Stories
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuALAp-TOfgr4tqNCNlS8zwdLYLDYa4btTkCW1xjTkOG-shqYFLjyydJFBkVs95rDHV6O0AkHdbgMQ9zV7MFt0bsH5gNpVFgxb1JIN9HeWlovgeJIC4gWgTOpbfPu5N1c7a_UKYSO689Y2R6NoMeZXfGAFPyMPNMc9fwRBLeJV8sr8euMt9MW0os0Yi87T_HGAsmM3U-5F7vSBwqngI89TVdLxLpMK0fI9RDSoEE6L1Xzw2wn2gdT0gatfx1iTwovQIX7_P8gBxGZWU)",
              }}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">
                From Confusion to Clarity
              </p>
              <p className="text-[#93adc8] text-sm font-normal leading-normal">
                Alex, a recent graduate, used our platform to identify a career
                path in tech that aligned with their passion for
                problem-solving.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuB7xIeBgWzjMotfWLMzoWKEncJr1JxEimvd9J7TV6Y0q7MuhnjTr9_-f2dVC-SOjD4prZHMiv1-AzEYqTC9rWJUj5dSabr0V2-UfDs2ZZguJlx4-i-tyl2MZt7cMBIP-eY9gkpf6Yr4ihIvqt8-1GqxPy9fcytrSKHgjMC03jrugXk7esDb2KWEPiLMyC1Djq6w8acOAT-3HLh9jeoClXNop1EVVRBBU05i3GngvG86KigTfrc_quByE66LV20xpLotH4wyGBR2FjI)",
              }}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">
                Finding My Dream Role
              </p>
              <p className="text-[#93adc8] text-sm font-normal leading-normal">
                Jordan, a mid-career professional, successfully transitioned to
                a new role in sustainable energy with the help of our AI-driven
                insights.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAA9bQ_rqLjMZ0fVrea67TITgtWcbMmBJwPQlpSvQ3VIM9kOoJk793Pqzj_FmCIP23p_bGeSg2tbPV9r52EmR7ofSR37w-iUv9QzkhUsb_EP-Y0s6fKYpx3HpB1-fh_OXD6HY_1IJEPd-jfmXSXzieOkbKTR-Ap8MshG6YEPpbG9-nPFh0eAX5uhrvMZleBsS-LRtwpk-FxaHfh_e0RWMyMZYDXIc_YNjSicr-d-LhJsny6COcumXjfr_vMQaRvyRHvOMFryvdssxg)",
              }}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">
                Career Transformation
              </p>
              <p className="text-[#93adc8] text-sm font-normal leading-normal">
                The support and resources provided by the platform helped Sarah,
                a career changer, to confidently pursue a new career in digital
                marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
