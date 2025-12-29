import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BluetoothCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.12,8.007l-2.098,1.956v-3.874l2.098,1.918Zm-2.098,9.903l2.1-1.92-2.1-1.97v3.89Zm10.978-5.911c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-10.219-.01l4.286-3.998L12.608,3h-1.585v6.402l-3.192-2.995-1.368,1.459,4.392,4.12-4.445,4.145,1.364,1.463,3.25-3.031v6.437h1.585l5.458-4.991-4.284-4.019Z"/>
</svg>

);
