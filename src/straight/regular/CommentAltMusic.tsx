import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v17h6.923l3.748,3.156c.382.34.862.509,1.338.509.467,0,.931-.163,1.292-.485l3.847-3.18h6.852V3c0-1.654-1.346-3-3-3Zm1,18h-5.571l-4.449,3.645-4.326-3.645H2V3c0-.552.449-1,1-1h18c.551,0,1,.448,1,1v15Zm-4-11v6.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5c.171,0,.338.017.5.05v-4.05c0-.552-.449-1-1-1h-3c-.551,0-1,.448-1,1v6.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5c.171,0,.338.017.5.05v-4.05c0-1.654,1.346-3,3-3h3c1.654,0,3,1.346,3,3Z"/></svg>

);
