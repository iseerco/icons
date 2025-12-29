import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HockeySticks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.269,24H5.5A5.5,5.5,0,0,1,.025,17.963,5.649,5.649,0,0,1,5.693,13h7.131a3.978,3.978,0,0,0,3.827-2.838L19.09,2.128A2.984,2.984,0,0,1,21.962,0h2.009L18.838,16.905A9.943,9.943,0,0,1,9.269,24Zm12.5-9.854-1.014,3.34A11.958,11.958,0,0,1,15.918,24H18.5a5.5,5.5,0,0,0,5.474-6.037A5.391,5.391,0,0,0,21.766,14.146ZM5.693,11H7.682a3.939,3.939,0,0,1-.372-.838L4.871,2.128A2.983,2.983,0,0,0,2,0H.029l3.44,11.329A7.746,7.746,0,0,1,5.693,11Z"/></svg>

);
