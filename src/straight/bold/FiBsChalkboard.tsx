import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,18V6.5c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v11.5H0v3h24v-3h-1ZM4,6.5c0-.275.224-.5.5-.5h15c.276,0,.5.225.5.5v11.5h-2v-2h-4v2H4V6.5Z"/>
</svg>

);
