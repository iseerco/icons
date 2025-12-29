import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPrescriptionBottleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.5,14.5h-2.5v-3h2.5v-2.5h3v2.5h2.5v3h-2.5v2.5h-3v-2.5Zm12.5-9.5h-2v15.5c0,1.93-1.57,3.5-3.5,3.5H6.5c-1.93,0-3.5-1.57-3.5-3.5V5H1v-2C1,1.343,2.343,0,4,0h16c1.657,0,3,1.343,3,3v2Zm-5,0H6v15.5c0,.275.224.5.5.5h11c.276,0,.5-.225.5-.5V5Z"/></svg>

);
