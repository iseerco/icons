import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlockBrick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm1,3v2h-4V2h3c.551,0,1,.448,1,1Zm-14,14v-4h8v4H8Zm0-12V2h8v3H8Zm3,2v4H2V7H11Zm-5,6v4H2v-4H6Zm12,0h4v4h-4v-4Zm-5-2V7h9v4H13ZM3,2h3v3H2V3c0-.552,.449-1,1-1Zm-1,17H11v3H2v-3Zm11,3v-3h9v3H13Z"/></svg>

);
