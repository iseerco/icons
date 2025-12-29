import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaterBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,7a2.988,2.988,0,0,0-1.886-2.786L15,2.969V2h1V0H8V2H9v.969L5.885,4.215A2.986,2.986,0,0,0,4,7V9a2.987,2.987,0,0,0,.766,2A2.987,2.987,0,0,0,4,13v2a2.987,2.987,0,0,0,.766,2A2.987,2.987,0,0,0,4,19v5H20V19a2.987,2.987,0,0,0-.766-2A2.987,2.987,0,0,0,20,15V13a2.987,2.987,0,0,0-.766-2A2.987,2.987,0,0,0,20,9ZM18,22H6V19a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Zm0-7a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H7A1,1,0,0,1,6,9V7a1,1,0,0,1,.628-.928L11,4.323V2h2V4.323l4.371,1.748A1,1,0,0,1,18,7Z"/></svg>

);
