import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageBot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,9h-2V3c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v6H0v2h2v9h4.923l3.748,3.156c.382.34.862.509,1.338.509.467,0,.931-.163,1.292-.485l3.847-3.18h4.852v-9h2v-2Zm-4,9h-3.571l-4.449,3.645-4.326-3.645h-3.654V3c0-.552.449-1,1-1h14c.551,0,1,.448,1,1v15Zm-4-12h-8c-1.105,0-2,.895-2,2v5c0,1.105.895,2,2,2h8c1.105,0,2-.895,2-2v-5c0-1.105-.895-2-2-2Zm-6.5,6c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm5,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>

);
