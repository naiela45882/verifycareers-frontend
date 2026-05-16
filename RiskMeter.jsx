import React from 'react';
export default function RiskMeter({ score = 0 }) {
// score: 0..100
const pct = Math.max(0, Math.min(100, score));
const barColor = pct < 40 ? 'bg-green-500' : pct < 75 ? 'bg-yellow-400' : 'bg-red-500';


return (
<div className="w-full">
<div className="flex justify-between mb-1">
<div className="text-sm font-medium text-gray-700">Risk</div>
<div className="text-sm font-semibold text-gray-700">{pct}%</div>
</div>
<div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
<div
className={`${barColor} h-full rounded-full transition-all duration-300`}
style={{ width: `${pct}%` }}
/>
</div>
</div>
);
}