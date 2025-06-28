import React from "react";

function FAQ() {
  return (
    <div className="bg-neutral-100 py-10" id="faq">
      <div className="max-w-6xl gap-10 flex justify-center mx-auto px-10 py-10">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-neutral-900 whitespace-nowrap">
            Frequently asked questions
          </h1>
        </div>
        <div className="flex mx-auto join join-vertical bg-neutral-100 px-10">
          <div className="collapse collapse-arrow join-item bg-neutral-100 border-neutral-900 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="text-neutral-900 collapse-title font-semibold">
              What is the Zero Yield Club?
            </div>
            <div className="text-neutral-600 collapse-content text-sm">
              The Zero Yield Club was created to help private investors discover
              new stock opportunities and decide whether to invest or keep
              looking. Since we know how time-consuming and tedious this can be,
              we built this tool to do the heavy lifting — for you and for us.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item bg-neutral-100 border-neutral-900 border">
            <input type="radio" name="my-accordion-4" />
            <div className="text-neutral-900 collapse-title font-semibold">
              How often will the dividend calendar be updated?
            </div>
            <div className="text-neutral-600 collapse-content text-sm">
              The dividend calendar is updated daily to ensure you always have
              the latest information.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item bg-neutral-100 border-neutral-900 border">
            <input type="radio" name="my-accordion-4" />
            <div className="text-neutral-900 collapse-title font-semibold">
              How is the valuation system build?
            </div>
            <div className="text-neutral-600 collapse-content text-sm">
              The valuation system is based on the four metrics DCF, P/E, P/B
              and D/E. For each metric, we track whether it signals a stock is
              "undervalued" or "overvalued". The DCF (Discounted Cash Flow)
              metric counts twice as much as the others, meaning it has more
              influence on the final result.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item bg-neutral-100 border-neutral-900 border">
            <input type="radio" name="my-accordion-4" />
            <div className="text-neutral-900 collapse-title font-semibold">
              Can I cancel my subscription at any time?
            </div>
            <div className="text-neutral-600 collapse-content text-sm">
              Yes, you can cancel your subscription at any time. It's a monthly
              plan with no long-term commitment.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item bg-neutral-100 border-neutral-900 border">
            <input type="radio" name="my-accordion-4" />
            <div className="text-neutral-900 collapse-title font-semibold">
              I’m not sure yet – can I try the product for free?{" "}
            </div>
            <div className="text-neutral-600 collapse-content text-sm">
              Yes, you can try it free for seven days. If you cancel within the
              trial period, you won’t be charged.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item bg-neutral-100 border-neutral-900 border">
            <input type="radio" name="my-accordion-4" />
            <div className="text-neutral-900 collapse-title font-semibold">
              Will there be more features in the future?
            </div>
            <div className="text-neutral-600 collapse-content text-sm">
              Yes, we’re actively working on new features. While we can’t share
              everything yet, one upcoming highlight is an AI tool that helps
              identify opportunities within specific industries and supply
              chains.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
