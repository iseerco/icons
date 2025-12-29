import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAlignJustify = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect y="3" width="24" height="3"/><rect y="8" width="24" height="3"/><rect y="18" width="24" height="3"/><rect y="13" width="24" height="3"/></svg>

);
