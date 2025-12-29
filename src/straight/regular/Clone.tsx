import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Clone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0h-10c-1.654,0-3,1.346-3,3v13h16V3c0-1.654-1.346-3-3-3Zm1,14h-12V3c0-.551.448-1,1-1h10c.552,0,1,.449,1,1v11Zm-8,4h2v6H0v-13c0-1.654,1.346-3,3-3h3v2h-3c-.552,0-1,.449-1,1v11h12v-4Z"/></svg>

);
