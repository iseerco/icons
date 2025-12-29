import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowLeftFromArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.951,13l4.759,4.796-1.42,1.408L.613,13.483c-.816-.816-.816-2.15.002-2.97l5.675-5.718,1.42,1.408-4.759,4.796h14.049v2H2.951ZM12,0v2c5.514,0,10,4.486,10,10s-4.486,10-10,10v2c6.617,0,12-5.383,12-12S18.617,0,12,0Z"/>
</svg>

);
