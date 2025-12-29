import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalculatorSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.5,11.5h11.5v1h-11.5v11.5h-1v-11.5H0v-1h11.5V0h1v11.5Zm2.5,5.5h9v-1h-9v1Zm0,4h9v-1h-9v1ZM9,4H0v1h9v-1Zm11,0V0h-1v4h-4v1h4v4h1v-4h4v-1h-4Zm-11.854,11.146l-3.646,3.646-3.646-3.646-.707.707,3.646,3.646L.146,23.146l.707.707,3.646-3.646,3.646,3.646.707-.707-3.646-3.646,3.646-3.646-.707-.707Z"/></svg>

);
