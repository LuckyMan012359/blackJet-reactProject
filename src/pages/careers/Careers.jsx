import { Entermobilegetapp } from "components/Popup";
import DesktopOnlyPage from "components/desktopOnlyPage/DesktopOnlyPage";
import CommonSelect from "components/formcomponents/CommonSelect";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategory, getAllLocation, getcareers } from "services/api";


/**
 * Page for showing all the available job positions
 * @returns {ReactElement} The component for the careers page
 */
const Careers = () => {
  const [carrerList, setCarrerList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [totalJob, setTotalJob] = useState();
  const [locationList, setLocationList] = useState([]);
  const [filter, setFilter] = useState({
    job_type: "",
    job_location: "",
    category: "",
  });

  console.log(locationList);

  useEffect(() => {
    (async () => {
      try {
        let payload = {
          skip: 1,
          limit: 10,
          job_type: filter.job_type,
          job_location: filter.job_location,
          category: filter.job_category,
        };
        const res = await getcareers(payload);
        setTotalJob(res?.data?.totalItems);
        console.log(res.data);
        setCarrerList(res?.data?.data);
        // setSelectedId(res?.data?.data[0]._id || {});
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filter]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllLocation();
        setLocationList(res?.data?.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const res = await getAllCategory();
        setCategoryList(res?.data?.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(carrerList);
  return (
    <>
      <div className="desktop-careers">
        <Entermobilegetapp />
        <div className="career-wrap">
          <div className="flex flex-col gap-6  ">
            <div className="career-heading">
              Work with us
            </div>
            <div className="career-p">
              Every day, we refine, iterate and explore how to make work better
              for everyone. Join us in creating a better future of work that’s
              more connected, inclusive and flexible:
            </div>
          </div>
          {/* <button
          id="RectButtons"
          className="roles-btn"
        >
          See our roles
        </button> */}
        </div>

        {/* <div className="bg-[#242424] text-center flex flex-col gap-12 w-full h-[452px] font-['Hauora'] items-center px-20  py-12">
        <div className="flex flex-col  gap-6  items-center">
          <div className="text-center text-4xl font-medium text-white-A700">
            Black Jet is where the future works
          </div>
          <div className="text-center font-medium text-[#f2f2f2] ml-4 w-full">
            Every day, we refine, iterate and explore how to make work better
            for everyone. Join us <br></br>in creating a better future of work
            that’s more connected, inclusive and flexible:
          </div>
        </div>
        <div className="flex flex-row justify-between px-20 items-center ">
          <div className="flex flex-col gap-6 w-1/4 text-left items-start">
            <img
              src="https://file.rendit.io/n/tRfVrvHuWpcQyWXXhva8.svg"
              alt="Iconspeopleworkingtogether"
              className="w-10"
            />
            <div className="flex flex-col gap-3 w-full font-['Hauora'] items-start">
              <div className="text-xl font-semibold text-white-A700">
                Flexible work arrangments
              </div>
              <div className="text-[#bfbfbf] w-5/6">
                Guest Passes are award every 3 month of membership
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/4 items-start text-left">
            <img
              src="https://file.rendit.io/n/tRfVrvHuWpcQyWXXhva8.svg"
              alt="Iconspeopleworkingtogether1"
              className="w-10"
            />
            <div className="flex flex-col gap-3 w-full font-['Hauora'] items-start">
              <div className="text-xl font-semibold text-white-A700">
                Flexible work arrangments
              </div>
              <div className="text-[#bfbfbf] w-5/6">
                Guest Passes are award every 3 month of membership
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/4 items-start text-left">
            <img
              src="https://file.rendit.io/n/tRfVrvHuWpcQyWXXhva8.svg"
              alt="Iconspeopleworkingtogether2"
              className="w-10"
            />
            <div className="flex flex-col gap-3 w-full font-['Hauora'] items-start">
              <div className="text-xl font-semibold text-white-A700">
                Flexible work arrangments
              </div>
              <div className="text-[#bfbfbf] w-5/6">
                Guest Passes are award every 3 month of membership
              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div className="new-opprtu">
          <div className="new-heading">
            New opportunities
          </div>
          <div className="job-select-dropdown flex flex-row gap-16 w-full items-center justify-center">
            {/* <Form.Select
              className="common-input"
              size="lg"
              onChange={(e) =>
                setFilter({ ...filter, job_category: e.target.value })
              }
            >
              <option> Category</option>
              {categoryList?.map((category) => (
                <option>{category?.job_category}</option>
              ))}
            </Form.Select> */}

            <CommonSelect
              value={filter.job_category}
              // onChange={handleSelectChange}
              placeholder="Category"
              options={categoryList?.map((category) => ({
                value: category?.job_category,
                label: category?.job_category,
              }))}
              name="job_category"
              setValue={(name, value) => {
                setFilter((prev) => ({ ...prev, [name]: value }));
                console.log(value)
              }}
            />
            {/* <Form.Select
              className="common-input"
              size="lg"
              onChange={(e) => setFilter({ ...filter, job_type: e.target.value })}
            >
              <option>Job Type</option>
              <option>Part-time</option>
              <option>Full-time</option> */}

            {/* {carrerlist.map(carrer=><option>{}</option>)} */}
            {/* </Form.Select> */}


            <CommonSelect
              value={filter.job_type}
              // onChange={handleSelectChange}
              placeholder="Job Type"
              options={["Part-time", "Full-time"].map((jobType) => ({
                value: jobType,
                label: jobType,
              }))}
              name="job_type"
              setValue={(name, value) => {
                setFilter((prev) => ({ ...prev, [name]: value }));
                console.log(value)
              }}
            />

            {/* <Form.Select
              className="common-input"
              size="lg"
              onChange={(e) =>
                setFilter({ ...filter, job_location: e.target.value })
              }
            >
              <option>Location</option>
              {locationList?.map((location) => (
                <option>{location?.city_name}</option>
              ))}
            </Form.Select> */}


            <CommonSelect
              value={filter.job_location}
              // onChange={handleSelectChange}
              placeholder="Location"
              options={locationList?.map((location) => ({
                value: location?.city_name,
                label: location?.city_name,
              }))}
              name="job_location"
              setValue={(name, value) => {
                setFilter((prev) => ({ ...prev, [name]: value }));
                console.log(value)
              }}
            />
          </div>
          <div className="text-center text-xl font-['Hauora'] font-semibold text-white-A700 py-12">
            {totalJob} Jobs in all categories in all job types
          </div>
          <div className="job-selection-wrap col-md-9 !mx-32 mb-3">
            {carrerList?.map((career) => {
              return (
                <>
                  <div className="job-type-wrap mb-4 w-full px-8 py-6 bg-[#242424] flex-col justify-center h-48 font-['Hauora'] items-start rounded-lg">
                    <Link className="decoration-none" to={`/job-page/${career._id}`}>
                      <div className="flex flex-col gap-3 w-full items-start">
                        <div className="flex flex-row justify-between w-full items-start">
                          <div className="text-xl font-semibold text-white-A700">
                            {career?.job_name}
                          </div>
                          <div className="text-xs text-white-A700 mt-1">
                            {career?.job_type}
                          </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-start">
                          <div className="font-medium text-[#bfbfbf] mt-3 w-5/6">
                            {career?.description}
                          </div>
                          <div className="text-xs text-white-A700">
                            {career?.job_location}
                          </div>
                        </div>
                      </div>
                      <div className="support-wrap flex flex-row gap-4 w-[56%] items-center mt-5 pb-3">
                        <div className="support-text-chip text-xs text-[#141414] bg-white-A700 flex flex-row justify-center p-2 w-1/2 rounded-[32px]">
                          Support & Opperations
                        </div>
                        <div className="support-text-chip text-xs text-white-A700 border-solid border-white-A700 flex flex-row w-1/2 justify-center  p-2 border rounded-[32px]">
                          BUSINESS DEVELOPMENT
                        </div>
                      </div>
                    </Link>
                  </div>

                </>
              );
            })}
          </div>
          <div className="text-center flex justify-center text-sm font-['Hauora'] font-bold text-white-A700">
            {/* <button
          id="RectButtonsRoot"
          className="load-btn"
        >
          Load more
        </button> */}
          </div>
        </div>

      </div>
      <DesktopOnlyPage heading="Careers" />
    </>
  );
};

export default Careers;
