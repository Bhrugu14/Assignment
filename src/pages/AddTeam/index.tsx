import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, CategoryCard, TeamCard } from "../../components";
import { getUsers } from "../../services/userAPI/getUser";

export const AddTeam = () => {
  const [teamData, setTeamData] = useState();
  const [errorMsg, setErrorMsg] = useState("...Loading");
  const [extra, setExtra] = useState(0);

  const getEmployeeDetails = async () => {
    const res = await getUsers();
    console.log("res", res);
    if (res.status) {
      setTeamData(res.data);
    } else {
      setErrorMsg("something went wrong");
    }
  };
  useEffect(() => {
    getEmployeeDetails();
  }, []);

  if (!teamData) {
    return <div>{errorMsg}</div>;
  }

  return (
    <div className="columns-3 gap-1 h-full flex divide-x">
      <div className="flex flex-col flex-1 p-5">
        {React.Children.toArray(
          teamData.map((i, k) => (
            <CategoryCard
              item={i}
              extraClass={"mb-5"}
              AddTeam={(l) => {
                teamData[k].data[l].isSelected = !i.data[l].isSelected;
                setTeamData(teamData);
                setExtra(extra + 1);
              }}
            />
          ))
        )}
      </div>
      <div className="flex flex-col flex-1 pl-5 pt-5 pb-5">
        <div className="pr-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i) => i.title === "Project Manager")[0]
                .data.filter((j) => j.isSelected)}
              title={"Project Manager"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pr-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i) => i.title === "Front End Developers")[0]
                .data.filter((j) => j.isSelected)}
              title={"Front End Developer"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pr-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i) => i.title === "QA Tester")[0]
                .data.filter((j) => j.isSelected)}
              title={"QA Tester"}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col flex-1 pr-5 pt-5 pb-5">
        <div className="pl-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i) => i.title === "UI/UX Designer")[0]
                .data.filter((j) => j.isSelected)}
              title={"UI/UX Designerr"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pl-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i) => i.title === "Back End Developers")[0]
                .data.filter((j) => j.isSelected)}
              title={"Back End Developer"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pl-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i) => i.title === "Mobile Developer")[0]
                .data.filter((j) => j.isSelected)}
              title={"Mobile Developer"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pl-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i) => i.title === "Devops")[0]
                .data.filter((j) => j.isSelected)}
              title={"Devops"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
