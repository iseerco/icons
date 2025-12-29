import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v16.5h6.74l3.6,3.031c.479.425,1.079.635,1.674.635.582,0,1.158-.202,1.606-.6l3.708-3.066h6.672V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17h-4.752l-4.244,3.511-4.168-3.511H3V3.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v13.5Zm-7.5-6h3l-3.793,3.707c-.391.391-1.024.391-1.414,0l-3.793-3.707h3v-6h3v6Z"/></svg>

);
