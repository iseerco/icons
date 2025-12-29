import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowTrendUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,6h-7.5v1h7.293l-9.293,9.293-6-6L.026,17.267l.707,.707,6.267-6.267,6,6L23,7.707v7.293h1V7.5c0-.827-.673-1.5-1.5-1.5Z"/></svg>

);
