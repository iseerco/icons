import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCodeSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.389,21.682L.915,14.207c-1.17-1.17-1.17-3.073,0-4.243L8.439,2.439l2.121,2.121L3.036,12.085l7.475,7.475-2.121,2.121Zm14.732-7.475c1.17-1.17,1.17-3.073,0-4.243L15.596,2.439l-2.121,2.121,7.525,7.525-7.475,7.475,2.121,2.121,7.475-7.475Z"/></svg>

);
