// components/CodeBlock.jsx
import { useEffect } from 'react';
import React from 'react';
import 'prismjs';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-j';
import 'prismjs/themes/prism.css';

export default function CodeBlock({ code, language }) {
    useEffect(() => {
        Prism.highlightAll(); 
    }, []);

  return (
      
    <div>
      <pre>
        <code className="language-powershell">
          {`Get-Process`}
        </code>
      </pre>

      <pre>
        <code className="language-j">
          {`NB. 1 + 2`}
        </code>
      </pre>
    </div>
  );
}
