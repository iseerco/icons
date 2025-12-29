import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVideoCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,8l-4,3v-2.5c0-1.378-1.122-2.5-2.5-2.5h-2.793L9.707,1H0v1H9.293l4,4H2.5c-1.378,0-2.5,1.122-2.5,2.5v15.5H20v-5l4,3V8Zm-5,15H1V8.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5v14.5Zm4-3l-3-2.25v-5.5l3-2.25v10Z"/>
</svg>

);
