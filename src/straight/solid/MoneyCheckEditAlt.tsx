import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyCheckEditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.001,14.537c0,.678-.264,1.316-.744,1.795l-7.667,7.667h-3.59v-3.59l7.668-7.667c.99-.99,2.6-.99,3.59,0,.479,.479,.744,1.117,.744,1.795Zm-14.001,5.044v2.419H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3v5.773c-.743-.503-1.619-.773-2.537-.773-1.048,0-2.041,.352-2.843,1h-4.62v2h2.582l-6.582,6.581Zm4-10.581h6v-2h-6v2ZM2,13h1v1c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3h-2c0,.551-.448,1-1,1h-2c-.552,0-1-.449-1-1v-1h3v-2h-3v-1c0-.551,.448-1,1-1h2c.552,0,1,.449,1,1h2c0-1.654-1.346-3-3-3h-2c-1.654,0-3,1.346-3,3v1h-1v2Z"/></svg>

);
