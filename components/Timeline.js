import React from 'react';
import Image from 'next/image';
import { HiRocketLaunch } from "react-icons/hi2";

const experiences = [
  {
    type: 'High School',
    name: 'Barker College',
    duration: '2016 - 2020',
    // description: 'Description about my time at school',
    imageUrl: 'barker_logo.png',
    backgroundColor: '#e02725',
    scale: 0.8
  },
  {
    type: 'University',
    name: 'UNSW Sydney',
    duration: '2021 - Present',
    // description: 'Description about your time at university',
    imageUrl: 'unsw_logo.png',
    backgroundColor: '#fee600',
    scale: 0.7
  },
  {
    type: 'Internship',
    name: 'InfoTrack',
    duration: '2022 - 2023',
    // description: 'Description about my work experience',
    imageUrl: 'infotrack_logo.png',
    backgroundColor: '#ffffff',
    scale: 0.8
  },
  {
    type: 'Next',
    name: 'Your Company?',
    duration: '2023',
    // description: 'Description about my work experience',
    icon: <HiRocketLaunch color="white" className="w-12 h-12" />,
    backgroundColor: '#ffa500',
    scale: 0.8
  }
];

function TimelineItem({ data }) {
  return (
    <div className="timeline-item flex space-x-4 my-8">
      <div className="-ml-2 mt-8 w-4 h-4 bg-default-600 rounded shadow-xl" />
      <div
        className="w-20 h-20 rounded-xl relative shadow-xl flex justify-center items-center"
        style={{ backgroundColor: data.backgroundColor }}
      >
        {data.imageUrl && (
          <Image
            src={"/images/" + data.imageUrl}
            alt={data.type}
            style={{ objectFit: "contain", transform: `scale(${data.scale})` }}
            fill={true}
          />
        )}
        {data.icon}
      </div>
      <div className="flex-1">
        <div>
          <h3 className="text-xl mb-2">{data.type}</h3>
          <h3 className="text-xl font-bold mb-2">{data.name}</h3>
          <p className="text-gray-500">{data.duration}</p>
          <p className="mt-2 text-gray-700">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="px-6 pb-8 flex flex-col md:flex-row justify-center">
      <div className="border-l-3 md:border-b-3 border-default-400 md:rounded-bl-lg flex-1">
        {experiences.slice(0,2).map((experience, index) => (
          <TimelineItem key={index} data={experience} />
        ))}
      </div>
      <div className="hidden w-20 md:flex md:flex-row md:align-self mr-[-3px]">
        <div className="hidden md:block border-b-3 border-r-3 border-default-400 rounded-br-lg h-1/2 w-1/2 self-end mr-[-3px]" />
        <div className="hidden md:block border-l-3 border-t-3 border-default-400 rounded-tl-lg h-1/2 w-1/2" />
      </div>
      <div className="hidden md:block border-t-3 border-r-3 border-default-400 rounded-tr-lg w-10" />
      <div className="flex-1 border-l-3 border-default-400 md:border-none">
        {experiences.slice(2).map((experience, index) => (
          <TimelineItem key={index} data={experience} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;