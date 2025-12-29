import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BabyCarriage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,0H13V9H5.414L4.121,7.707A5.787,5.787,0,0,0,0,6V8A3.8,3.8,0,0,1,2.707,9.121L4,10.414V13a3,3,0,0,0,3,3h4.865L9.257,19.129C5.576,18.113,4.685,23.824,8.5,24a2.506,2.506,0,0,0,2.261-3.551L14,16.562l3.239,3.887A2.506,2.506,0,0,0,19.5,24c3.816-.177,2.923-5.887-.757-4.871L16.135,16H21a3,3,0,0,0,3-3V10C24,.114,15.09,0,15,0Zm0,2a7.081,7.081,0,0,1,6.961,7H15Zm7,11a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V11H22Z"/></svg>

);
