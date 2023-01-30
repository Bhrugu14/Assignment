import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, CategoryCard, TeamCard } from "../../components";
import { getEmp } from "../../reduxStore/companySlice";
import { useAppSelector } from "../../reduxStore/hooks";
import { getUsers } from "../../services/userAPI/getUser";
import {
  deleteStorage,
  getWithExpiry,
  setWithExpiry,
} from "../../utils/StoreData";

export const AddTeam = () => {
  const navigate = useNavigate();
  const companies = useAppSelector(getEmp);
  const [teamData, setTeamData] = useState();
  const [errorMsg, setErrorMsg] = useState("...Loading");
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    if (getWithExpiry("project")) {
      if (Array.isArray(teamData)) {
        let data = JSON.parse(JSON.stringify(teamData));
        const localStore = [];
        data.forEach((i) => {
          let d = [];
          i.data.forEach((j) => {
            if (j.isSelected === true) {
              d.push(j);
            }
          });
          i.data = d;
          if (d.length > 0) {
            localStore.push(i);
          }
        });
        console.log("localStore:", localStore);
        setWithExpiry("employees", localStore);
      }
    } else {
      navigate("/", { state: { state: 0 } });
    }
  }, [extra]);

  const getEmployeeDetails = async () => {
    console.log("companies", companies);
    let res = companies.company;
    if (res.status) {
      let dataHere = JSON.parse(JSON.stringify(res.data));
      let localStore = getWithExpiry("employees");
      if (localStore) {
        console.log("localstore", localStore);
        localStore.forEach((i) => {
          i.data.forEach((j) => {
            dataHere.forEach((element, m) => {
              element.data.forEach((child, n) => {
                if (j.image === child.image) {
                  element.data[n].isSelected = true;
                }
              });
            });
          });
        });
      }
      setTeamData(dataHere);
    }
  };

  useEffect(() => {
    getEmployeeDetails();
  }, [companies.isLoading]);

  if (!teamData) {
    return <div>{errorMsg}</div>;
  }

  const onNext = () => {
    let employees = getWithExpiry("employees");
    let project = getWithExpiry("project");
    setWithExpiry("hire", { project, employees });
    deleteStorage("employees");
    deleteStorage("project");
    navigate("/hire", { state: { state: 2 } });
  };

  return (
    <div className="columns-3 gap-1 h-full flex divide-x">
      <div className="flex flex-col flex-1 p-5">
        <label className="text-2xl font-bold text-TextBlue ml-16 mb-4">
          Categories
        </label>
        {React.Children.toArray(
          teamData.map(
            (
              i: { data: { [x: string]: { isSelected: any } } },
              k: string | number
            ) => (
              <CategoryCard
                item={i}
                extraClass={"mb-5"}
                AddTeam={(l: string | number) => {
                  teamData[k].data[l].isSelected =
                    !teamData[k].data[l].isSelected;
                  setTeamData(teamData);
                  setExtra(extra + 1);
                }}
              />
            )
          )
        )}
      </div>
      <div className="flex flex-col flex-1 pl-5 pt-5 pb-5">
        <div className="pr-5 mb-5">
          <label className="text-2xl font-bold text-TextBlue mb-4">
            Team Members
          </label>
          {teamData && (
            <TeamCard
              item={teamData
                .filter(
                  (i: { title: string }) => i.title === "Project Manager"
                )[0]
                .data.filter((j: { isSelected: any }) => j.isSelected)}
              title={"Project Manager"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pr-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter(
                  (i: { title: string }) => i.title === "Front End Developers"
                )[0]
                .data.filter((j: { isSelected: any }) => j.isSelected)}
              title={"Front End Developer"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pr-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i: { title: string }) => i.title === "QA Tester")[0]
                .data.filter((j: { isSelected: any }) => j.isSelected)}
              title={"QA Tester"}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col flex-1 pr-5 pt-5 pb-5">
        <div className="pl-5 mb-5">
          <div className="flex justify-end mb-2">
            <Button
              disabled={!getWithExpiry("employees")}
              title={"Next"}
              onClick={() => onNext()}
            />
          </div>
          {teamData && (
            <TeamCard
              item={teamData
                .filter(
                  (i: { title: string }) => i.title === "UI/UX Designer"
                )[0]
                .data.filter((j: { isSelected: any }) => j.isSelected)}
              title={"UI/UX Designerr"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pl-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter(
                  (i: { title: string }) => i.title === "Back End Developers"
                )[0]
                .data.filter((j: { isSelected: any }) => j.isSelected)}
              title={"Back End Developer"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pl-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter(
                  (i: { title: string }) => i.title === "Mobile Developer"
                )[0]
                .data.filter((j: { isSelected: any }) => j.isSelected)}
              title={"Mobile Developer"}
            />
          )}
        </div>
        <div className="flex h-[0.5px] bg-gray-300 mb-5"></div>
        <div className="pl-5 mb-5">
          {teamData && (
            <TeamCard
              item={teamData
                .filter((i: { title: string }) => i.title === "Devops")[0]
                .data.filter((j: { isSelected: any }) => j.isSelected)}
              title={"Devops"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
