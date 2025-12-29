import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodeMerge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8c-1.861,0-3.428,1.277-3.873,3H8c-1.654,0-3-1.346-3-3v-.127c1.724-.445,3-2.013,3-3.873C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.86,1.276,3.428,3,3.873v8.253c-1.724,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.276-3.428-3-3.873v-4.129c.836,.629,1.875,1.002,3,1.002h8.127c.445,1.723,2.013,3,3.873,3,2.206,0,4-1.794,4-4s-1.794-4-4-4Z"/></svg>

);
