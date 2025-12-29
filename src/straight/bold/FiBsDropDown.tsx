import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDropDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,18v-3h6v3h-6Zm6-8h-6v3h6v-3Zm13-2h-8v16H0V3C0,1.343,1.343,0,3,0h18c1.657,0,3,1.343,3,3v5Zm-11,0H3v13h10v-13Zm9-5h-6.909l2.756,2.71c.386.386,1.012.386,1.398,0l2.756-2.71Z"/>
</svg>

);
