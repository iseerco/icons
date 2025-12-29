import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAmountUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.5,5.5l1.414-1.414L6.414,.586c-.378-.378-.88-.586-1.414-.586h-.002c-.534,0-1.036,.209-1.413,.587L.086,4.086l1.414,1.414,2.5-2.5V24h2V3l2.5,2.5Zm15.5,1.5v2H10v-2h14Zm-14,7h11v-2H10v2Zm0,5h8v-2H10v2Zm0,5h5v-2h-5v2Z"/></svg>

);
