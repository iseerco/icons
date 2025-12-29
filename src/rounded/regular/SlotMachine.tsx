import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SlotMachine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,2c0-1.105-.895-2-2-2s-2,.895-2,2c0,.738,.405,1.376,1,1.723v5.277c0,1.103-.897,2-2,2h-1v-2C18,4.038,13.963,0,9,0S0,4.038,0,9v10c0,2.757,2.243,5,5,5H13c2.757,0,5-2.243,5-5v-6h1c2.206,0,4-1.794,4-4V3.723c.595-.346,1-.984,1-1.723ZM7,14v-5h4v5H7Zm-5,0v-5h3v5H2Zm11-5h3v5h-3v-5ZM9,2c3.164,0,5.842,2.112,6.705,5H2.295c.863-2.888,3.541-5,6.705-5Zm4,20H5c-1.654,0-3-1.346-3-3v-3h14v3c0,1.654-1.346,3-3,3Z"/>
</svg>

);
