import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v17h6.923l3.748,3.156c.382.34.862.509,1.338.509.467,0,.931-.163,1.292-.485l3.847-3.18h6.852V3c0-1.654-1.346-3-3-3Zm-4,8h-4v8h-2v-8h-4v-2h10v2Z"/></svg>

);
