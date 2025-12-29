import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Effect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2V0H0v2h2.5v15.163c-1.441.433-2.5,1.756-2.5,3.337,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-1.58-1.059-2.903-2.5-3.337V2h5v15.163c-1.441.433-2.5,1.756-2.5,3.337,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-1.58-1.059-2.903-2.5-3.337V2h2.109l4.928,15.605c-.927.63-1.537,1.692-1.537,2.895,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5c-.019,0-.036.005-.055.006L15.706,2h8.294Z"/>
</svg>

);
