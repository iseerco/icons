import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FlagAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.903,0H3C1.346,0,0,1.346,0,3V24H2V15H23.903l-5.651-7.5L23.903,0Zm-4.011,13H2V3c0-.552,.449-1,1-1H19.892l-4.144,5.5,4.144,5.5Z"/></svg>

);
