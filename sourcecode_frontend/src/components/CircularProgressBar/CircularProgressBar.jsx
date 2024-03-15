import React from 'react';

const CircularProgressBar = ({ radius, strokeWidth, progress }) => {

    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference + (progress / 100) * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
            <circle
                stroke="rgba(255, 158, 158, 0.12)"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />

            <circle
                stroke="blue"
                fill="transparent"
                className={"progress"}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    );
};

export default CircularProgressBar;