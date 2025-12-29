import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAmountDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,7H10v-2h8v2ZM15,0h-5V2h5V0Zm6,10H10v2h11v-2Zm-11,5v2h14v-2H10Zm-4,6V0h-2V21l-2.5-2.5L.086,19.914l3.499,3.499c.377,.378,.879,.587,1.413,.587h.002c.534,0,1.036-.208,1.414-.586l3.5-3.5-1.414-1.414-2.5,2.5Z"/></svg>

);
