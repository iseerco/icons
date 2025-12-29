import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5V1h6.293L5.146,7.146l.707,.707L11.5,2.207V24h1V2.207l5.646,5.646,.707-.707L12.707,1h6.293V0Z"/></svg>

);
