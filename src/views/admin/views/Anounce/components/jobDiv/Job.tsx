import React from "react";
import JobCard from "./JobCard";
import { useRecoilState } from "recoil";
import { useJobList } from "../../hooks/useJobList";
import { jobFilterState, useTheme } from "@package/states/GlobalStates";

const Job = () => {
    const { isDark } = useTheme();
    const [filter] = useRecoilState(jobFilterState);
    const jobLists = useJobList();
    return (
        <div className="job-container w-full flex justify-center items-center flex-wrap gap-10 my-10">
            {jobLists
                .filter((jobList) => {
                    if (filter.inputJobSearch !== "") {
                        const jobFilter = new RegExp(filter.inputJobSearch, "gi");
                        return jobFilter.test(jobList.jobTitle);
                    }
                    return jobList;
                })
                .filter((jobList) => {
                    if (filter.inputCompanySearch !== "") {
                        const jobFilter = new RegExp(filter.inputCompanySearch, "gi");
                        return jobFilter.test(jobList.societyName);
                    }
                    return jobList;
                })
                .filter((jobList) => {
                    if (filter.inputLocationSearch !== "") {
                        const jobFilter = new RegExp(filter.inputLocationSearch, "gi");
                        return jobFilter.test(jobList.country);
                    }
                    return jobList;
                })
                .map((jobList) => (
                    <JobCard
                        country={jobList.country}
                        createdAt={jobList.createdAt}
                        isDark={isDark}
                        jobDescription={jobList.jobDescription}
                        jobTitle={jobList.jobTitle}
                        societyName={jobList.societyName}
                    />
                ))}
        </div>
    );
};

export default Job;
