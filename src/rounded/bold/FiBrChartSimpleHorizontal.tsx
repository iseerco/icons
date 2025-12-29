import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartSimpleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12c0,1.65-1.35,3-3,3H3c-1.65,0-3-1.35-3-3s1.35-3,3-3H21c1.65,0,3,1.35,3,3ZM3,6H15c1.65,0,3-1.35,3-3s-1.35-3-3-3H3C1.35,0,0,1.35,0,3s1.35,3,3,3Zm6,12H3c-1.65,0-3,1.35-3,3s1.35,3,3,3h6c1.65,0,3-1.35,3-3s-1.35-3-3-3Z"/></svg>

);
