import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OvalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,24c-4.486,0-8-5.271-8-12S7.514,0,12,0s8,5.271,8,12-3.514,12-8,12Zm0-22c-3.252,0-6,4.58-6,10s2.748,10,6,10,6-4.58,6-10S15.252,2,12,2Z"/>
</svg>

);
