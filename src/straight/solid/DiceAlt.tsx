import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,9H12a3,3,0,0,0-3,3V24H24V12A3,3,0,0,0,21,9Zm-7,6a1,1,0,1,1,1-1A1,1,0,0,1,14,15Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,19,20ZM11.485.879a3,3,0,0,0-4.242,0L.959,7.162A3.162,3.162,0,0,0,.051,8.8a3,3,0,0,0,.828,2.686L7,17.607V12a5,5,0,0,1,5-5h5.606ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Zm5-5A1,1,0,1,1,9,4,1,1,0,0,1,10,5Z"/></svg>

);
