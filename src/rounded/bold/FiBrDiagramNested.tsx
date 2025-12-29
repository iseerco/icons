import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDiagramNested = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,13h-2c-2.31,0-4.2,1.76-4.45,4h-3.55c-1.38,0-2.5-1.12-2.5-2.5v-3.55c2.24-.25,4-2.14,4-4.45v-2C11,2.02,8.98,0,6.5,0h-2C2.02,0,0,2.02,0,4.5v2c0,2.31,1.76,4.2,4,4.45v3.55c0,3.03,2.47,5.5,5.5,5.5h3.55c.25,2.24,2.14,4,4.45,4h2c2.48,0,4.5-2.02,4.5-4.5v-2c0-2.48-2.02-4.5-4.5-4.5ZM3,6.5v-2c0-.83,.67-1.5,1.5-1.5h2c.83,0,1.5,.67,1.5,1.5v2c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5Zm18,13c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5v-2c0-.83,.67-1.5,1.5-1.5h2c.83,0,1.5,.67,1.5,1.5v2Z"/></svg>

);
