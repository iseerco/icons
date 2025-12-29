import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CoffeePot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13H22A25.115,25.115,0,0,0,19.4,2H17V5H3.525l-2-5h19.04l.291.485A26.226,26.226,0,0,1,24,13ZM3.774,7A20.365,20.365,0,0,0,1.5,12H15.4c.2.606.393,1.275.577,2H.946A36.679,36.679,0,0,0,0,20.856,3.008,3.008,0,0,0,3,24H18a3.008,3.008,0,0,0,3-3.144C20.625,12.954,18.247,8.547,17.227,7Z"/></svg>

);
