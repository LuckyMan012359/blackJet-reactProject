import React, { useEffect, useState } from "react";
import { getCareerDetail } from "services/api";
import { Link, useParams } from "react-router-dom";
import { Entermobilegetapp } from "components/Popup";

/**
 * Renders a job page with information about the job and a form to submit an application
 * @param {Object} jobDetail - The job detail object from the API
 * @returns {React.ReactElement} - The job page component
 * @example
 * <JobPage jobDetail={{}} />
 */
const JobPage = () => {
  const [jobDetail, setJobDetail] = useState({});

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await getCareerDetail(id);
        // console.log(res.data);
        // setCategoryList(res?.data?.data);
        setJobDetail(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);


  return (
    <div>
    <Entermobilegetapp />
      <div className="row mx-32 mt-32">
        <div className="col-md-4">
          <div className="flex flex-col justify-between w-full h-64 font-['Hauora'] items-start py-2">
            <a href="#AboutRole" className="text-sm font-bold !text-white-A700">
              About this role
            </a>
            <a href="#MinimumQualifications" className="opacity-70 text-sm font-bold !text-white-A700">
              Minimum Qualifications
            </a>
            <a href="#DesirableQualifications" className="opacity-70 text-sm font-bold !text-white-A700">
              Desirable Qualifications
            </a>
            <a href="#JobResponsibilities" className="opacity-70 text-sm font-bold !text-white-A700">
              Job Responsibilities
            </a>
            <a href="#WhatBlackJetOffers" className="opacity-70 text-sm font-bold !text-white-A700">
              What Black Jet offers you
            </a>
            <a href="#SalaryRange" className="opacity-70 text-sm font-bold !text-white-A700">
              Salary Range
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="flex flex-col gap-4 w-full font-['Hauora'] items-start mb-11">
            <div className="flex flex-row gap-3 w-1/2 items-start">
              <img
                src="https://file.rendit.io/n/Bmfc7f1he70HyrBvqrxq.svg"
                alt="Briefcase"
                id="Briefcase"
                className="w-6"
              />
              <div className="font-bold text-white mt-1">
                {jobDetail?.job_category}
              </div>
            </div>
            <div className="flex flex-row gap-3 w-1/4 items-start">
              <img
                src="https://file.rendit.io/n/gLT9QpwdDnVVhVeuEc9i.svg"
                alt="Clock"
                id="Clock"
                className="w-8"
              />
              <div className="font-bold text-white mt-2">
                {" "}
                {jobDetail?.job_type}
              </div>
            </div>
            <div className="flex flex-row gap-3 w-1/2 font-['Hauora'] items-start">
              <img
                src="https://file.rendit.io/n/Qk2DJVvTAVYBAeiFdveP.svg"
                alt="Location1"
                id="Location1"
                className="w-8"
              />
              <div className="font-bold text-white mt-2">
                {jobDetail?.job_location}
              </div>
            </div>
            <div className="flex flex-row justify-between w-3/4 font-['Hauora'] items-start">
              <button
                id="RectButtons"
                className="text-center text-sm font-bold text-[#141414] border-solid border-white bg-white flex flex-row justify-center pt-3 w-3/5 h-12 cursor-pointer items-start border rounded"
              >
                Apply now
              </button>
              <div
                id="Ellipse"
                className="bg-[url(https://file.rendit.io/n/WODVcOtxRz426r9j8gyJ.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-3 w-12 h-12 items-start"
              >
                <img
                  src="https://file.rendit.io/n/hpR9egKO7yWAEJYoBHcR.svg"
                  alt="Share"
                  id="Share"
                  className="w-5"
                />
              </div>
              <div
                id="Ellipse1"
                className="bg-[url(https://file.rendit.io/n/WODVcOtxRz426r9j8gyJ.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-12 h-12 items-start pt-3 px-3"
              >
                <img
                  src="https://file.rendit.io/n/wWlKfKlyHBLZjcebBOyM.svg"
                  alt="ArrowDownload"
                  id="ArrowDownload"
                  className="w-4"
                />
              </div>
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/O8ouqGBrDMGNooO56XZA.svg"
            alt="Vector"
            className="w-full my-20"
          />
          <div id="AboutRole">
            <div className="text-3xl font-['Hauora'] font-semibold text-white-A700 my-10 ">
              About this role
            </div>
            <div className="font-['Hauora'] font-medium text-white w-full">
              {jobDetail?.description}
            </div>
          </div>


          {/* <Form.Select
            className="my-6  rounded-[4px] border-[0] text-white-A700 bg-[transparent] w-[150px] text-center"
            size="lg"
          >
            <option>READ MORE</option>
          </Form.Select> */}

          <img
            src="https://file.rendit.io/n/O8ouqGBrDMGNooO56XZA.svg"
            alt="Vector"
            className="w-full my-20"
          />
          <div id="JobResponsibilities" className="text-3xl font-['Hauora'] font-semibold text-white my-6">
            What you will be responsible for
          </div>
          <div>
            <ul>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Enable the Zoom Public Sector partners to sell the Zoom platform
                solutions to new and existing customers.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Develop and maintain relationships with key decision-makers at
                these partners.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Collaborate with account managers, technical architects, and
                other team members to develop and execute strategies for
                achieving sales goals.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Align with the Zoom Public Sector Sales Leaders to ensure the
                channel partners are providing value to help grow their
                business.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Conduct product demonstrations and presentations for customers,
                both in person and virtually.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Conduct product demonstrations and presentations for customers,
                both in person and virtually.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Stay up-to-date on industry trends, competitive landscape, and
                Zoom's product roadmap to provide customers with the latest
                information and insights.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Developing standardized methodologies for partner sales motions
                that remove friction across the sales cycle, build trust, and
                ensure partner success with NetApp technology.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Forecast, track key account metrics and identify trends.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Consistently demonstrate exceptional customer service.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Use a solution-based approach to selling and creating value for
                customers.
              </li>
            </ul>
          </div>

          <img
            src="https://file.rendit.io/n/O8ouqGBrDMGNooO56XZA.svg"
            alt="Vector"
            className="w-full my-20"
          />

          <div id="SalaryRange" className="text-3xl font-['Hauora'] font-semibold text-white my-6">
            Skills & Qualifications
          </div>
          <div>
            <ul>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Bachelors Degree
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Develop and maintain relationships with key decision-makers at
                these partners.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Collaborate with account managers, technical architects, and
                other team members to develop and execute strategies for
                achieving sales goals.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Align with the Zoom Public Sector Sales Leaders to ensure the
                channel partners are providing value to help grow their
                business.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Conduct product demonstrations and presentations for customers,
                both in person and virtually.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Conduct product demonstrations and presentations for customers,
                both in person and virtually.
              </li>
              <li className="list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4 font-size-[16px]">
                Stay up-to-date on industry trends, competitive landscape, and
                Zoom's product roadmap to provide customers with the latest
                information and insights.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Developing standardized methodologies for partner sales motions
                that remove friction across the sales cycle, build trust, and
                ensure partner success with NetApp technology.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Forecast, track key account metrics and identify trends.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Consistently demonstrate exceptional customer service.
              </li>
              <li className="font-size-[16px] list-disc font-['Hauora'] font-medium text-white-A700 w-full mb-4">
                Use a solution-based approach to selling and creating value for
                customers.
              </li>
            </ul>
          </div>
          <img
            className="my-10"
            src="https://file.rendit.io/n/O8ouqGBrDMGNooO56XZA.svg"
            alt="Vector1"
          />
          <div className="flex flex-col gap-8 w-full h-[99px] font-['Hauora'] items-start">
            <div className="flex flex-col gap-6 w-2/5 h-20 items-start">
              <div className="text-xl font-semibold text-white">
                Salary Range or On Target Earnings:
              </div>
              <div className="text-xl font-semibold text-white">
                $340,000 - $690,000
              </div>
            </div>
          </div>
          <img
            className="my-10"
            src="https://file.rendit.io/n/O8ouqGBrDMGNooO56XZA.svg"
            alt="Vector1"
          />
        </div>
      </div>
      <div className="bg-[#242424] px-36 py-12">
        <div className="text-4xl font-['Hauora'] text-center font-medium text-white w-full">
          Business Development manager MEA
        </div>
        <div className="row justify-center my-12 px-28">
          <div className="col-md-6 mb-10">
            <label className="text-white fs-6 fw-bold font-family-Hauora  m-0  py-2">
              First name
            </label>

            <input
              className="form-control bg-[#333333] !text-white-A700  focus:bg-[#333333] border-0 box-shadow-[none]"
              placeholder="Enter your first name"
            />
          </div>

          <div className="col-md-6 mb-10">
            <label className="text-white fs-6 fw-bold font-family-Hauora  m-0  py-2">
              Last name
            </label>
            <input
              className="form-control bg-[#333333] !text-white-A700  focus:bg-[#333333] border-0 box-shadow-[none]"
              placeholder="Enter your last name"
            />
          </div>
          <div className="col-md-6 mb-10">
            <label className="text-white fs-6 fw-bold font-family-Hauora  m-0 py-2">
              Contact number
            </label>
            <input
              className="form-control bg-[#333333] !text-white-A700  focus:bg-[#333333] border-0 box-shadow-[none]"
              placeholder="Enter your last name"
            />
          </div>
          <div className="col-md-6 mb-10">
            <label className="text-white fs-6 fw-bold font-family-Hauora  m-0 py-2">
              Enter your email address
            </label>
            <input
              className="form-control bg-[#333333] !text-white-A700  focus:bg-[#333333] border-0 box-shadow-[none]"
              placeholder="Email address"
            />
          </div>
          <div className="col-md-6 mb-10">
            <label className="text-white fs-6 fw-bold font-family-Hauora  m-0 py-2">
              Your current salary
            </label>
            <input
              className="form-control bg-[#333333] !text-white-A700  focus:bg-[#333333] border-0 box-shadow-[none]"
              placeholder=" What s your current salary?"
            />
          </div>
          <div className="col-md-6 mb-10">
            <label className="text-white fs-6 fw-bold font-family-Hauora  m-0 py-2">
              Your desired salary
            </label>
            <input
              className="form-control bg-[#333333] !text-white-A700  focus:bg-[#333333] border-0 box-shadow-[none]"
              placeholder="  What is your desired salary?"
            />
          </div>
        </div>
        <div className="px-28 text-center">
          <form class="flex items-center space-x-6">
            <label class="block ">
              <span class="sr-only">Choose profile photo</span>
              <input
                type="file"
                class="block w-full text-sm  text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg- file:text-violet-700
      hover:file:bg-violet-100
    "
              />
            </label>
          </form>
        </div>
        <div className="flex flex-col gap-6 w-full font-['Hauora'] items-start px-28 mt-12">
          <div className="text-3xl font-semibold text-white">
            Work Authorisation: Australia
          </div>
          <div className="flex flex-col justify-between gap-2 w-2/3 items-start">
            <div className="font-medium text-white">
              Do you now or in the future require visa sponsorship in order to
              accept employment in Australia?
            </div>
            <div className="flex flex-row gap-3  items-start">
              {/* <Form.Check aria-label="option 1" /> */}
              <div className="text-sm font-bold text-white mt-1">Yes</div>
            </div>
            <div className="flex flex-row gap-3 w-12 font-['Hauora'] items-start">
              {/* <Form.Check aria-label="option 1" /> */}
              <div className="text-sm font-bold text-white mt-1">No</div>
            </div>
          </div>
        </div>
        <div
          id="FieldsRoot"
          className="flex flex-row gap-2 w-full font-['Hauora'] items-start px-28 mt-6"
        >
          {/* <Form.Check aria-label="option 1" /> */}
          <div className="text-sm font-medium text-[#bfbfbf] mt-1 font-['Hauora'] flex gap-2">
            I agree to the
            <Link to={"/legal?type=Terms of use"} className='option-text'>
              <span className="underline">Terms of Use</span>
            </Link>
            <div> and </div>
            <Link to={"/legal?type=Privacy Policy"} className='option-text'>
              <span className="underline">Privacy Policy</span>
            </Link>
          </div>
        </div>

        <div className="px-28">
          <button
            id="RectButtonsRoot"
            className="border-solid border-white bg-white flex mt-4  flex-row justify-center p-4 w-[400px] h-[52px]  cursor-pointer items-start border rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
