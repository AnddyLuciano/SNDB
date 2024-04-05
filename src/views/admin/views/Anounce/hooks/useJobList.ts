import { useMemo } from "react";

export const useJobList = () => {
    return useMemo(
        (): Array<JobListProp> => [
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
            {
                country: "Madagascar",
                createdAt: "Now",
                jobDescription:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum repellendus cupiditate! Vero repudiandae incidunt corrupti quidem libero excepturi, doloribus mollitia, perferendis dignissimos, omnis ex molestiae facilis porro quam praesentium.",
                jobTitle: "UX Designer",
                societyName: "SG Madagascar",
            },
        ],
        []
    );
};

export type JobListProp = {
    country: string;
    createdAt: string;
    jobDescription: string;
    jobTitle: string;
    societyName: string;
};
