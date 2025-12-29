import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChessKnight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,21.086V10.018c.037-3.145-1.909-9.282-9.541-10a3.268,3.268,0,0,0-3.307,2.06A7.65,7.65,0,0,1,4.388,6.509,3.634,3.634,0,0,0,2,9.931,3.073,3.073,0,0,0,5.069,13h4.6a14.16,14.16,0,0,1-6.63,8H2.5a1.5,1.5,0,0,0,0,3h19a1.5,1.5,0,0,0,.5-2.914Zm-9.012-9.4A1.5,1.5,0,0,0,11.5,10H5a.727.727,0,0,1,.4-.667,10.68,10.68,0,0,0,6.536-6.141A.305.305,0,0,1,12.176,3C18.819,3.629,19,9.341,19,10V21H8.088A15.279,15.279,0,0,0,12.988,11.686Z"/></svg>

);
