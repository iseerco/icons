import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEgg = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A10.057,10.057,0,0,1,2,13.909C2,8.438,6.294,0,12,0S22,8.438,22,13.909A10.057,10.057,0,0,1,12,24ZM12,3C8.391,3,5,9.806,5,13.909a7,7,0,1,0,14,0C19,9.806,15.609,3,12,3Zm1,10a2,2,0,1,0,2-2A2,2,0,0,0,13,13ZM12,7.5A1.5,1.5,0,1,0,13.5,6,1.5,1.5,0,0,0,12,7.5Z"/></svg>

);
