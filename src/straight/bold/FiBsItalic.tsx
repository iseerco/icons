import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsItalic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="21 3 21 0 6 0 6 3 11.713 3 9.259 21 3 21 3 24 18 24 18 21 12.287 21 14.741 3 21 3"/></svg>

);
