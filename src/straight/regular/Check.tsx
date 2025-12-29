import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Check = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M7.8,20.53a2.99,2.99,0,0,1-2.121-.877L.086,14.061,1.5,12.646l5.593,5.593a1,1,0,0,0,1.414,0L22.5,4.246,23.914,5.66,9.921,19.653A2.99,2.99,0,0,1,7.8,20.53Z"/></g></svg>

);
