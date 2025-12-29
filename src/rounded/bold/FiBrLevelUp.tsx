import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLevelUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.527,7.117a1.5,1.5,0,0,1-2.122.019L13.5,4.281V18.5A5.506,5.506,0,0,1,8,24H1.5a1.5,1.5,0,0,1,0-3H8a2.5,2.5,0,0,0,2.5-2.5V4.281L7.594,7.136A1.5,1.5,0,0,1,5.492,5l3.134-3.08c.224-.222.571-.562.932-.914a3.479,3.479,0,0,1,4.884,0c.361.352.708.692.925.907L18.509,5A1.5,1.5,0,0,1,18.527,7.117Z"/></svg>

);
