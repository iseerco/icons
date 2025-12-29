import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDropdownSelect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.276,.225-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5V21ZM6,10h12l-5.039,5.039c-.531,.531-1.391,.531-1.922,0l-5.039-5.039Z"/>
</svg>

);
