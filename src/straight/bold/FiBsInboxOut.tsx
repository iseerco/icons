import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsInboxOut = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,11h3V5h4.082L12.985,.409c-.544-.545-1.427-.545-1.972,0h0L6.418,5h4.082v6Z"/><path d="M15.5,11v2.636c-.001,.753-.611,1.363-1.364,1.364h-4.272c-.753-.001-1.363-.611-1.364-1.364v-2.636H0v10c0,1.657,1.343,3,3,3H21c1.657,0,3-1.343,3-3V11H15.5Zm5.5,10H3v-7h2.515c.192,2.26,2.081,3.997,4.349,4h4.272c2.268-.003,4.157-1.74,4.349-4h2.515v7Z"/></svg>

);
