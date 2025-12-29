import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMoneySimpleFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,11c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Zm6-3.14v10.64c0,3.03-2.47,5.5-5.5,5.5h-7c-3.03,0-5.5-2.47-5.5-5.5V7.86C1.28,7.42,0,5.86,0,4,0,1.8,1.79,0,4,0H20C22.21,0,24,1.8,24,4c0,1.86-1.28,3.41-3,3.86Zm-3,10.64V3H6v15.5c0,1.38,1.12,2.5,2.5,2.5h7c1.38,0,2.5-1.12,2.5-2.5Z"/></svg>

);
