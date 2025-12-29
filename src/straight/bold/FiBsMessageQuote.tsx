import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v16.5h6.74l3.599,3.03c.479.426,1.08.636,1.675.636.582,0,1.158-.202,1.606-.601l3.708-3.065h6.672V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17h-4.752l-4.244,3.511-4.168-3.511H3V3.5c0-.275.225-.5.5-.5h17c.275,0,.5.225.5.5v13.5ZM8,6h3v5c0,2.206-1.794,4-4,4v-3c.552,0,1-.448,1-1h-2v-3c0-1.103.897-2,2-2Zm7,0h3v5c0,2.206-1.794,4-4,4v-3c.552,0,1-.448,1-1h-2v-3c0-1.103.897-2,2-2Z"/></svg>

);
