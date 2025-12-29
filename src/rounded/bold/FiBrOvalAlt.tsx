import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrOvalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,24c-4.486,0-8-5.271-8-12S7.514,0,12,0s8,5.271,8,12-3.514,12-8,12Zm0-21c-2.71,0-5,4.122-5,9s2.29,9,5,9,5-4.122,5-9S14.71,3,12,3Z"/>
</svg>

);
