import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v19ZM12,5c-1.358,0-2.327.469-3,2l-4,12h2.149l1.319-4h7.168l1.376,4h1.989l-4-12c-.673-1.531-1.642-2-3-2Zm-2.873,8l1.739-5.273c.318-.691.549-.727,1.135-.727.584,0,.816.037,1.134.727l1.813,5.273h-5.82Z"/></svg>

);
