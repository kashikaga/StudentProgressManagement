import React from 'react';

const RatingGraph = ({ ratings = [] }) => {
    // Example: ratings = [3, 4, 5, 2, 4]
    if (!ratings.length) {
        return <div>No ratings data available.</div>;
    }

    const maxRating = 5;
    const counts = Array(maxRating).fill(0);
    ratings.forEach(r => {
        if (r >= 1 && r <= maxRating) counts[r - 1]++;
    });

    const maxCount = Math.max(...counts, 1);

    return (
        <div style={{ width: 300 }}>
            <h3>Rating Distribution</h3>
            <svg width="100%" height={150}>
                {counts.map((count, i) => {
                    const barHeight = (count / maxCount) * 100;
                    return (
                        <g key={i}>
                            <rect
                                x={i * 55 + 10}
                                y={120 - barHeight}
                                width={40}
                                height={barHeight}
                                fill="#4f8ef7"
                            />
                            <text
                                x={i * 55 + 30}
                                y={135}
                                textAnchor="middle"
                                fontSize={14}
                            >
                                {i + 1}
                            </text>
                            <text
                                x={i * 55 + 30}
                                y={120 - barHeight - 5}
                                textAnchor="middle"
                                fontSize={12}
                                fill="#333"
                            >
                                {count}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default RatingGraph;