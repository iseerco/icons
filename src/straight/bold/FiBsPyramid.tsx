import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,4.346,19.387,21H4.613L12,4.346M12,.01a2.061,2.061,0,0,0-1.9,1.233L0,24H24L13.905,1.243A2.061,2.061,0,0,0,12,.01Z"/></svg>

);
