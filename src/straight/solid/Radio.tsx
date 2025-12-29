import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Radio = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,15.5c0,1.378-1.122,2.5-2.5,2.5s-2.5-1.122-2.5-2.5,1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5Zm5-6.55v15H0v-15c0-1.488,1.091-2.717,2.514-2.951L20.687,0l.627,1.899-12.27,4.05h11.956c1.654,0,3,1.346,3,3Zm-15,9.05h-5v2h5v-2Zm0-4h-5v2h5v-2Zm0-4h-5v2h5v-2Zm12,5.5c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5,4.5-2.019,4.5-4.5Z"/>
</svg>

);
