import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeyHole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.99,24H5.01l2.516-11.617c-1.593-1.324-2.525-3.29-2.525-5.383C5,3.14,8.141,0,12,0s7,3.14,7,7c0,2.093-.933,4.059-2.525,5.383l2.516,11.617Z"/>
</svg>

);
