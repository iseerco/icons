import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortNumericDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.914,18.914l-4.5,4.5c-.39,.39-.902,.585-1.414,.585s-1.024-.195-1.414-.585L.086,18.914l1.414-1.414,3.5,3.5V0h2V21l3.5-3.5,1.414,1.414ZM18,3.379v7.621h2V0h-1.501l-3.216,3.303,1.434,1.395,1.283-1.318Zm4,13.121v1.5c0,3.309-2.691,6-6,6v-2c1.544,0,2.885-.878,3.552-2.162-.332,.105-.686,.162-1.052,.162-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5Zm-3.5,1.5c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5-1.5,.673-1.5,1.5,.673,1.5,1.5,1.5Z"/></svg>

);
