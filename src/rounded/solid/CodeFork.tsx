import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodeFork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.86,1.277,3.428,3,3.873v.127c0,1.654-1.346,3-3,3h-1c-1.193,0-2.267,.525-3,1.357-.733-.832-1.807-1.357-3-1.357h-1c-1.654,0-3-1.346-3-3v-.127c1.723-.445,3-2.013,3-3.873C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.86,1.277,3.428,3,3.873v.127c0,2.757,2.243,5,5,5h1c1.103,0,2,.897,2,2v1.127c-1.723,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.277-3.428-3-3.873v-1.127c0-1.103,.897-2,2-2h1c2.757,0,5-2.243,5-5v-.127c1.723-.445,3-2.013,3-3.873Z"/></svg>

);
