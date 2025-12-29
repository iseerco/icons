import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlusSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="18 10.5 13.5 10.5 13.5 6 10.5 6 10.5 10.5 6 10.5 6 13.5 10.5 13.5 10.5 18 13.5 18 13.5 13.5 18 13.5 18 10.5"/></svg>

);
