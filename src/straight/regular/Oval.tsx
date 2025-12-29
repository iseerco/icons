import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Oval = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,20c-6.729,0-12-3.514-12-8S5.271,4,12,4s12,3.514,12,8-5.271,8-12,8Zm0-14c-5.42,0-10,2.748-10,6s4.58,6,10,6,10-2.748,10-6-4.58-6-10-6Z"/>
</svg>

);
