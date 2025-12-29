import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Angry = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,14a9.454,9.454,0,0,1,5.666,2.254l-1.33,1.494A7.508,7.508,0,0,0,12,16a7.508,7.508,0,0,0-4.336,1.748l-1.33-1.494A9.454,9.454,0,0,1,12,14Zm12-2A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12Zm-2,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12Zm-8-1.539h0V10.5a1.5,1.5,0,1,0,2.53-1.09A2.31,2.31,0,0,1,18,9V7C14.719,7,14,9.5,14,10.461ZM7,10.5a1.5,1.5,0,0,0,3,0v-.039h0C10,9.5,9.281,7,6,7V9a2.315,2.315,0,0,1,1.472.409A1.491,1.491,0,0,0,7,10.5Z"/></svg>

);
