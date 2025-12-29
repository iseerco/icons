import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v7h-4V3h3.5c.275,0,.5.225.5.5Zm-11,7V3h4v7.5h-4Zm4,3v7.5h-4v-7.5h4ZM3.5,3h3.5v7.5H3V3.5c0-.275.225-.5.5-.5Zm-.5,10.5h4v7.5H3v-7.5Zm14,7.5v-7.5h4v7.5h-4Z"/>
</svg>

);
