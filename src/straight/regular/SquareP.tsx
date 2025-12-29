import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareP = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v19ZM13.5,5h-5.5c-1.103,0-2,.897-2,2v12h2v-5h5.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm0,7h-5.5v-5h5.5c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5Z"/></svg>

);
