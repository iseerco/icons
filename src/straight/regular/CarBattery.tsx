import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarBattery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,11h6v2H4ZM18,9H16v2H14v2h2v2h2V13h2V11H18Zm6-1V22H0V8A3,3,0,0,1,3,5V2h8V5h2V2h8V5A3,3,0,0,1,24,8ZM22,8a1,1,0,0,0-1-1H19V4H15V7H9V4H5V7H3A1,1,0,0,0,2,8V20H22Z"/></svg>

);
