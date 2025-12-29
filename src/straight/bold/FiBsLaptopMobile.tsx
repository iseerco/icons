import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLaptopMobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,9h-3c-1.93,0-3.5,1.57-3.5,3.5v11.5h10V12.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,12h-4V12.5c0-.28,.22-.5,.5-.5h3c.28,0,.5,.22,.5,.5v8.5Zm-11.77-7h2.77v4H3c-1.66,0-3-1.34-3-3v-2H2V0H22V7h-3V3H5V13h3.31l.92,1Z"/></svg>

);
