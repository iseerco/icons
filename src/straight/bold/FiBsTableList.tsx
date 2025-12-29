import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTableList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,1H3.5C1.57,1,0,2.57,0,4.5v17.5h24V4.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v2.5h-12v-3h11.5c.275,0,.5.224.5.5Zm-12,5.5h12v3h-12v-3Zm-3,3h-3v-3h3v3ZM3.5,4h2.5v3h-3v-2.5c0-.276.225-.5.5-.5Zm-.5,12h3v3h-3v-3Zm6,3v-3h12v3h-12Z"/>
</svg>

);
