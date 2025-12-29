import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBr1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,24c-.829,0-1.5-.671-1.5-1.5V3.952l-4.322,5.477c-.514,.65-1.456,.761-2.107,.249-.65-.514-.762-1.457-.249-2.107,0,0,5.369-6.797,5.41-6.838C11.451,.015,12.52-.197,13.457,.19c.937,.388,1.543,1.295,1.543,2.31V22.5c0,.829-.671,1.5-1.5,1.5Z"/></svg>

);
