import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TeamCard } from "../../components";
import { getWithExpiry } from "../../utils/StoreData";

export const Hire = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    project: { Project_Name: "", Project_Description: "" },
    employees: [],
  });
  useEffect(() => {
    let data = getWithExpiry("hire");
    console.log("data", data);
    if (data) {
      setState(data);
    } else {
      navigate("/createProject", { state: { state: 0 } });
    }
  }, []);
  return (
    <div className="flex justify-center mt-2">
      <div className="flex flex-col w-1/2">
        <label className="text-4xl text-TextBlue text-center">Project</label>
        <label className="text-2xl text-TextBlue text-center">
          Project Name:{" "}
          <span className="font-bold">{state.project.Project_Name}</span>
        </label>
        <label className="text-2xl text-TextBlue text-center">
          Project Description:{" "}
        </label>
        <label className="text-2xl text-TextBlue text-center">
          {state.project.Project_Description == ""
            ? "---"
            : state.project.Project_Description}
        </label>
        {state.employees.map((i, k) => {
          return <TeamCard key={"team" + k} item={i.data} title={i.title} />;
        })}
      </div>
    </div>
  );
};
