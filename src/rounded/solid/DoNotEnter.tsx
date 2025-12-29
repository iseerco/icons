import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoNotEnter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,11v2s-10,0-10,0v-2h10Zm7,1c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-5-1c0-1.103-.897-2-2-2H7c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h10c1.103,0,2-.897,2-2v-2Z"/>
</svg>

);
