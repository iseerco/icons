import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRulesAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H5C2.794,0,1,1.794,1,4v16c0,2.206,1.794,4,4,4h18V2.5c0-1.378-1.121-2.5-2.5-2.5Zm-.5,16h-10V3h10v13ZM5,3h2v13h-2c-.347,0-.678.058-1,.142V4c0-.551.448-1,1-1Zm0,18c-.552,0-1-.449-1-1s.448-1,1-1h15v2H5Zm9.141-12.74l-2.037-2.152,1.387-1.441,1.496,1.582,2.543-2.631,1.398,1.43-3.113,3.221c-.459.474-1.22.471-1.674-.007Zm-.555,3.74l-1.793-1.793,1.414-1.414,1.793,1.793,1.793-1.793,1.414,1.414-1.793,1.793,1.793,1.793-1.414,1.414-1.793-1.793-1.793,1.793-1.414-1.414,1.793-1.793Z"/>
</svg>

);
