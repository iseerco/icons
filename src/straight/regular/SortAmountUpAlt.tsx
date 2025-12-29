import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAmountUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,7v2H10v-2h14Zm-14,7h11v-2H10v2Zm0,5h8v-2H10v2Zm0,5h5v-2h-5v2ZM3.586,.586L.086,4.086l1.414,1.414,2.5-2.5V24h2V3l2.5,2.5,1.414-1.414L6.414,.586C5.635-.193,4.365-.193,3.586,.586Z"/></svg>

);
