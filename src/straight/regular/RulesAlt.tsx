import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulesAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,0H5c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3h17V2c0-1.103-.897-2-2-2Zm0,18h-12V2h12v16ZM5,2h1v16h-1c-.352,0-.686.072-1,.184V3c0-.551.448-1,1-1Zm0,20c-.552,0-1-.449-1-1s.448-1,1-1h15v2H5Zm8.141-13.74l-2.037-2.152,1.387-1.441,1.496,1.582,2.543-2.631,1.398,1.43-3.113,3.221c-.459.474-1.22.471-1.674-.007Zm-.555,4.74l-1.793-1.793,1.414-1.414,1.793,1.793,1.793-1.793,1.414,1.414-1.793,1.793,1.793,1.793-1.414,1.414-1.793-1.793-1.793,1.793-1.414-1.414,1.793-1.793Z"/>
</svg>

);
