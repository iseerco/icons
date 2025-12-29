import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ballot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H2V3C2,1.346,3.346,0,5,0h14c1.654,0,3,1.346,3,3V24Zm-18-2H20V3c0-.551-.449-1-1-1H5c-.551,0-1,.449-1,1V22ZM18,5h-6v2h6v-2Zm0,6h-6v2h6v-2Zm0,6h-6v2h6v-2ZM10,4H6v4h4V4Zm0,6H6v4h4v-4Zm0,6H6v4h4v-4Z"/></svg>

);
