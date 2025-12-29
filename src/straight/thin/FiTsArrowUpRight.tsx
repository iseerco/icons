import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,0H10V1h12.293L.006,23.287l.707,.707L23,1.707V14h1V1.5c0-.827-.673-1.5-1.5-1.5Z"/></svg>

);
