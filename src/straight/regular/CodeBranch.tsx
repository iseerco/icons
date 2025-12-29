import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodeBranch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.86,1.277,3.428,3,3.873v2.127c0,.551-.449,1-1,1H6c-.351,0-.687,.061-1,.171v-3.298c1.723-.445,3-2.013,3-3.873C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.86,1.277,3.428,3,3.873v8.253c-1.723,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.277-3.428-3-3.873v-2.127c0-.551,.449-1,1-1h12c1.654,0,3-1.346,3-3v-2.127c1.723-.445,3-2.013,3-3.873ZM2,4c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2ZM6,20c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2ZM20,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>

);
