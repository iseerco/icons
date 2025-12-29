import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CandyAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,0A9,9,0,0,0,7.971,14.615L.043,22.543l1.414,1.414,7.928-7.928A9,9,0,1,0,15,0Zm0,16a6.971,6.971,0,0,1-4.631-1.756l-.613-.613A7,7,0,0,1,15,2a5,5,0,0,1,0,10,3,3,0,0,1,0-6,1.069,1.069,0,0,1,1,1,1,1,0,0,1-1,1v2a2.952,2.952,0,0,0,3-3,3.079,3.079,0,0,0-3-3,5,5,0,0,0,0,10,7.011,7.011,0,0,0,6.928-6A7,7,0,0,1,15,16Z"/></svg>

);
