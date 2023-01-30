import React from "react";
import { useNavigate } from "react-router-dom";
import { setWithExpiry } from "../../utils/StoreData";

export const CreateProject = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let formObj = {};
    for (let [key, value] of Array.from(formData.entries())) {
      formObj[key] = value.toString();
    }
    console.log(formObj);
    setWithExpiry("project", formObj);
    navigate("/addTeam", { state: { state: 1 } });
  };

  return (
    <div className="flex flex-1 h-full justify-center items-center flex-col">
      <form
        onSubmit={onSubmit}
        className="max-w-4xl w-full p-5 shadow-md shadow-PrimaryButton rounded-md"
      >
        <label className="text-2xl font-extrabold text-center text-TextBlue">
          Create Project
        </label>
        <div className="flex flex-1 w-full flex-col mt-2">
          <label htmlFor="Project Name" className="mb-1 text-lg font-bold">
            Project Name
          </label>
          <input
            id="Project Name"
            name="Project_Name"
            maxLength={20}
            type={"text"}
            className="px-2 border border-indigo-400 rounded-md bg-white text-TextBlue shadow-sm text-lg focus-visible:border focus:border focus-within:border"
            required
          />
        </div>
        <div className="flex flex-1 w-full flex-col mt-2">
          <label
            htmlFor="Project Description"
            className="mb-1 text-lg font-bold"
          >
            Project Description
          </label>
          <textarea
            id="Project Description"
            name="Project_Description"
            maxLength={100}
            className="px-2 border-b rounded-md bg-white text-TextBlue text-lg shadow-sm focus-visible:border-none focus-visible:border-b focus:border-b focus-within:border-none"
          />
        </div>
        <button
          type="submit"
          className="text-white mt-5 bg-PrimaryButton hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
