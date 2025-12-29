import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUnderline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,18.5a9.011,9.011,0,0,0,9-9V0H18V9.5a6,6,0,0,1-12,0V0H3V9.5A9.011,9.011,0,0,0,12,18.5Z"/><rect y="21" width="24" height="3"/></svg>

);
