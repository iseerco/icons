import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockFive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm2.5,14.33c.479-.276,.643-.888,.366-1.366l-1.866-3.232V6c0-.552-.447-1-1-1s-1,.448-1,1v6c0,.176,.046,.348,.134,.5l2,3.464c.186,.321,.521,.5,.867,.5,.17,0,.342-.043,.499-.134Z"/></svg>

);
