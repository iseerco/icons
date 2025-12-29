import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodeMerge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8c-1.859,0-3.411,1.28-3.858,3H6c-.552,0-1-.449-1-1v-2.142c1.721-.447,3-2,3-3.858C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.858,1.279,3.411,3,3.858v8.284c-1.721,.447-3,2-3,3.858,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.858-1.279-3.411-3-3.858v-3.313c.312,.111,.649,.171,1,.171h10.142c.447,1.72,1.999,3,3.858,3,2.206,0,4-1.794,4-4s-1.794-4-4-4Z"/></svg>

);
