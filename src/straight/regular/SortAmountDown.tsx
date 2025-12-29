import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAmountDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,2h-5V0h5V2Zm3,3H10v2h8v-2ZM10,15v2h14v-2H10Zm-4,6V0h-2V21l-2.5-2.5L.086,19.914l3.5,3.5c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l3.5-3.5-1.414-1.414-2.5,2.5Zm15-11H10v2h11v-2Z"/></svg>

);
