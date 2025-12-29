import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CrossReligion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,24H8V14H2v-5c0-1.654,1.346-3,3-3h3V3c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3v3h3c1.654,0,3,1.346,3,3v5h-6v10Zm-6-2h4V12h6v-3c0-.552-.449-1-1-1h-5V3c0-.552-.449-1-1-1h-2c-.551,0-1,.448-1,1v5H5c-.551,0-1,.448-1,1v3h6v10Z"/></svg>

);
