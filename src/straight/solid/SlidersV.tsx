import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SlidersV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,4.146V0h-2v4.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v13.146h2v-13.146c1.444-.431,2.5-1.772,2.5-3.354s-1.056-2.923-2.5-3.354Zm8,9V0h-2v13.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v4.146h2v-4.146c1.444-.431,2.5-1.772,2.5-3.354s-1.056-2.923-2.5-3.354Zm10.5-5.646c0-1.582-1.056-2.923-2.5-3.354V0h-2v4.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v13.146h2v-13.146c1.444-.431,2.5-1.772,2.5-3.354Z"/></svg>

);
