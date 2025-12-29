import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIdCardClipAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,4h-5.5v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V7.5c0-1.93-1.57-3.5-3.5-3.5Zm-6.5,17h-4v-2h4v2Zm7,0h-4v-2c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v2H3V7.5c0-.275.224-.5.5-.5h5.5v2h6v-2h5.5c.276,0,.5.225.5.5v13.5Zm-6.5-8.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Z"/></svg>

);
