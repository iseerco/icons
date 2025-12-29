import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsToolBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3h-3v-.5c0-1.378-1.121-2.5-2.5-2.5h-7c-1.379,0-2.5,1.122-2.5,2.5v.5H3c-1.654,0-3,1.346-3,3V24H24V6c0-1.654-1.346-3-3-3Zm0,3v4h-3v-2h-3v2h-6v-2h-3v2H3V6H21ZM3,21V13h3v2h3v-2h6v2h3v-2h3v8H3Z"/></svg>

);
