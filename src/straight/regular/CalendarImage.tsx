import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,13.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5ZM24,5v19H0V5c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3ZM2,21.97l8.385-8.384,4,4,7.585-7.586H2v11.97Zm20-9.172l-7.615,7.616-4-4-5.586,5.586h17.202v-9.202Zm0-7.798c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v3h20v-3Z"/></svg>

);
