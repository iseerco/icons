import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gavel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.569,10.526l-.994,.994L12.493,2.438l.994-.994L12.073,.03,4.184,7.919l1.414,1.414,1.025-1.025,3.827,3.827L.022,22.563l1.414,1.414L11.864,13.55l3.841,3.841-1.025,1.025,1.414,1.414,7.89-7.889-1.414-1.414Zm-5.076-.26l-3.042,3.042-3.672-3.672,3.042-3.042,3.673,3.672ZM11.079,3.852l1.327,1.327-3.042,3.042-1.327-1.327,3.042-3.042Zm4.786,10.87l3.042-3.042,1.254,1.254-3.042,3.042-1.254-1.254Z"/></svg>

);
