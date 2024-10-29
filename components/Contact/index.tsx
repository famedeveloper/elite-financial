// import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="">
      {/* w-full px-4 lg:w-7/12 xl:w-8/12 */}
        <div className="w-full">
          <div
            className="wow fadeInUp mb-12 rounded-md lg:mb-5"
            data-wow-delay=".15s
              "
          >
            <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
              Need Help? Leave us a message!
            </h2>
            <p className="mb-6 text-base font-medium text-primary">
              Our support team will get back to you ASAP.
            </p>
            <form>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-md border border-[#00000038] py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none  "
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full rounded-md border border-[#00000038] py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none  "
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Enter your Message"
                      className="w-full resize-none rounded-md border border-[#00000038] py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none  "
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
      </div>
    </section>
  );
};

export default Contact;
