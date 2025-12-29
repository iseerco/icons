import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PizzaSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.2.8A2.714,2.714,0,0,0,20.3.178L0,8.322V9A15.017,15.017,0,0,0,15,24h.676L23.832,3.67A2.708,2.708,0,0,0,23.2.8ZM21.01,2.045a.715.715,0,0,1,.771.171.7.7,0,0,1,.183.74L21.288,4.64c-5.708-1.956-8.914,6.126-3.466,8.639L15.93,18C9.551,17.97,6.029,14.447,6,8.068ZM17,9a2.655,2.655,0,0,1,3.54-2.5l-1.973,4.918A2.665,2.665,0,0,1,17,9ZM14.331,21.983A13.019,13.019,0,0,1,2.017,9.667l2.016-.809c.321,6.706,4.4,10.787,11.106,11.109Z"/><path d="M11,13a2,2,0,0,0,0-4A2,2,0,0,0,11,13Z"/></svg>

);
