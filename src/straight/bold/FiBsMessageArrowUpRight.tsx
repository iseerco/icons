import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v16.5h6.741l3.598,3.03c.479.426,1.08.636,1.675.636.583,0,1.158-.201,1.606-.601l3.708-3.065h6.672V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17h-4.751l-4.246,3.511-4.167-3.511H3V3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v13.5Zm-4-10v5.5l-2.189-2.189-4.175,4.175-2.121-2.121,4.175-4.175-2.189-2.189h5.5c.552,0,1,.448,1,1Z"/></svg>

);
