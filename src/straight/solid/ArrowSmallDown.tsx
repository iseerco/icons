import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.293,12.707,13,16V6H11V16L7.707,12.707,6.293,14.121l4.293,4.293a2,2,0,0,0,2.828,0l4.293-4.293Z"/></svg>

);
