import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarOfDavid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.991,12l3.5-6h-7.001L11.999.015l-3.491,5.985H1.509l3.5,6-3.5,6h6.999l3.491,5.985,3.492-5.985h7.001l-3.5-6Zm.018-4l-1.176,2.015-1.176-2.015h2.352Zm-2.334,4l-2.334,4h-4.684l-2.333-4,2.333-4h4.684l2.334,4ZM11.999,3.985l1.176,2.015h-2.351l1.175-2.015Zm-7.008,4.015h2.351l-1.175,2.015-1.176-2.015Zm0,8l1.176-2.015,1.175,2.015h-2.351Zm7.008,4.015l-1.175-2.015h2.351l-1.176,2.015Zm5.834-6.03l1.176,2.015h-2.352l1.176-2.015Z"/></svg>

);
