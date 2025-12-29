import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v16.5h6.74l3.599,3.03c.479.426,1.08.636,1.675.636.582,0,1.158-.202,1.606-.601l3.708-3.065h6.672V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17h-4.752l-4.244,3.511-4.168-3.511H3V3.5c0-.275.225-.5.5-.5h17c.275,0,.5.225.5.5v13.5Zm-4-8.25c0,2.88-5,6.25-5,6.25,0,0-5-3.37-5-6.25,0-1.519,1.119-2.75,2.5-2.75s2.5,1.231,2.5,2.75c0-1.519,1.119-2.75,2.5-2.75s2.5,1.231,2.5,2.75Z"/>
</svg>

);
