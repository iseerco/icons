import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAngleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,17c-.935,0-1.813-.364-2.475-1.025L.148,6.684c-.196-.194-.198-.512-.004-.707.193-.196.512-.198.707-.004l9.379,9.293c.949.949,2.592.947,3.537.002l9.381-9.295c.194-.194.513-.192.707.004.194.195.192.513-.004.707l-9.379,9.293c-.659.659-1.538,1.023-2.473,1.023Z"/>
</svg>

);
