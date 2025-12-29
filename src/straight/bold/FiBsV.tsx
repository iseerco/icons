import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.761,0L12.419,20.791c-.104,.203-.7,.261-.851-.038L3.25,0H0L8.84,21.998c.621,1.254,1.803,2.002,3.162,2.002,1.335,0,2.535-.742,3.146-1.968L24,0h-3.239Z"/></svg>

);
