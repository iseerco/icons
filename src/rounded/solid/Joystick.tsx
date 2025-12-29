import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Joystick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,17h-1.5v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-4V7.873c1.724-.445,3-2.013,3-3.873,0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.86,1.276,3.428,3,3.873v9.127H3.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5Z"/></svg>

);
