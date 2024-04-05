import React from "react";
import "./job.css";
const JobCard = ({
    country,
    createdAt,
    isDark,
    jobDescription,
    jobTitle,
    societyName,
    logo,
}: {
    jobTitle: string;
    createdAt: string;
    country: string;
    isDark: boolean;
    jobDescription: string;
    logo?: string;
    societyName: string;
}) => {
    return (
        <div
            className={`card-container text-start p-4 max-w-[300px] rounded-md ${
                isDark ? "text-white border border-white bg-slate-800" : "text-body"
            }`}
        >
            <div
                className={`title-time-box my-2 flex items-center justify-between ${
                    isDark ? "text-gray-400" : "text-gray-800"
                }`}
                title={jobTitle}
            >
                <p className="line-clamp-1">
                    <strong>{jobTitle}</strong>
                </p>
                <div className="time-box text-body flex items-center gap-1">
                    <i className="fa-regular fa-clock"></i>
                    <p>{createdAt}</p>
                </div>
            </div>
            <div className={`country-box ${isDark ? "text-secondary" : "text-body"}`}>
                <span>{country}</span>
            </div>
            <div className={`border  my-6 ${isDark ? "border-white" : "border-body"} `}></div>
            <div className="description-box line-clamp-3">{jobDescription}</div>
            <div className="society-box flex items-center gap-1 my-6 h-8">
                <img
                    src={logo ?? "/public/image/JobFinder.png"}
                    alt={`logo-${societyName}`}
                    className="object-center max-w-[3rem] h-6"
                />
                <span className={`${isDark ? "text-primary" : "text-gray-800"}`}>
                    {societyName}
                </span>
            </div>
            <div
                className={`apply-button border ${
                    isDark ? "border-white" : "border-gray-800 text-gray-950"
                } w-full text-center rounded-md hover:border-primary hover:text-white hover:bg-primary  hover:cursor-pointer py-3`}
            >
                <strong>Apply Now</strong>
            </div>
        </div>
    );
};

export default JobCard;
