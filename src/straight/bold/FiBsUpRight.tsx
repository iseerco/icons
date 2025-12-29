import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.83,23.3L.71,16.18,10.4,6.49,5.05,1h14.54s0,0,0,0c.91,0,1.76,.35,2.4,1,.64,.64,1,1.5,.99,2.41v14.53s-5.48-5.33-5.48-5.33L7.83,23.3Zm-2.88-7.12l2.88,2.88,9.66-9.66,2.51,2.44V4.41c0-.14-.07-.23-.12-.29-.05-.05-.15-.12-.28-.12h-7.44s2.45,2.51,2.45,2.51L4.95,16.18Z"/></svg>

);
