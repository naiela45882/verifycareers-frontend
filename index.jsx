import { useEffect } from 'react';
import React from 'react';
import Prism from 'prismjs';
import CodeBlock from '../components/CodeBlock';

export default function Home() {
  return (
    <div>
      <h1>Code Examples</h1>

      <CodeBlock code={`Get-Process`} language="powershell" />
      <CodeBlock code={`NB. 1 + 2`} language="j" />
      
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

