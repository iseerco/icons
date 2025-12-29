import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M18.073,4.769,14.154.85a3.072,3.072,0,0,0-4.242,0L5.992,4.769,7.406,6.183l3.633-3.632L11.065,24l2,0L13.039,2.562l3.62,3.621Z"/></g></svg>

);
