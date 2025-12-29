import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPercentage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.96,2.161L2.161,23.961,.04,21.84,21.839,.04l2.121,2.121ZM0,4.5C0,2.019,2.019,0,4.5,0s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5S0,6.981,0,4.5Zm3,0c0,.827,.673,1.5,1.5,1.5s1.5-.673,1.5-1.5-.673-1.5-1.5-1.5-1.5,.673-1.5,1.5Zm21,15c0,2.481-2.019,4.5-4.5,4.5s-4.5-2.019-4.5-4.5,2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5Zm-3,0c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5,.673,1.5,1.5,1.5,1.5-.673,1.5-1.5Z"/></svg>

);
