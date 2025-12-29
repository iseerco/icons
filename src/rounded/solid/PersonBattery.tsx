import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonBattery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M14,9v2s-4,0-4,0v-2h4Zm10,4c0,.97-.701,2-2,2h-.33l-.219,1.656c-.328,2.477-2.459,4.344-4.957,4.344h-.494c0,1.654-1.346,3-3,3H6c-1.654,0-3-1.346-3-3v-.971c0-.896-.263-1.732-.739-2.354C.583,15.483-.204,12.751,.046,9.983,.501,4.945,4.457,.792,9.453,.106c4.036-.554,7.909,1.057,10.348,4.312,1.268,1.567,4.199,7.162,4.199,8.582Zm-7-3.8c0-.387-.313-.7-.7-.7h-.371c-.224-.86-1-1.5-1.929-1.5h-6c-1.103,0-2,.897-2,2v2c0,1.103,.897,2,2,2h6c.929,0,1.705-.64,1.929-1.5h.371c.387,0,.7-.313,.7-.7v-1.6Z"/>
</svg>

);
