import React from 'react';
export default function ErrorBanner({ message }) {
return (
<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
<strong className="font-medium">Error:</strong>
<span className="ml-2">{message}</span>
</div>
);
}