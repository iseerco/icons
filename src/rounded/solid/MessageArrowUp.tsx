import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,0H4C1.794,0,0,1.794,0,4v12c0,2.206,1.794,4,4,4h2.923l3.748,3.156c.382.34.862.509,1.338.509.467,0,.931-.163,1.292-.485l3.847-3.18h2.852c2.206,0,4-1.794,4-4V4c0-2.206-1.794-4-4-4Zm-3.293,9.826c-.391.391-1.023.391-1.414,0l-2.293-2.293v7.467c0,.553-.448,1-1,1s-1-.447-1-1v-7.367l-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.636-2.637c1.17-1.17,3.072-1.17,4.242,0l2.536,2.536c.391.391.391,1.023,0,1.414Z"/></svg>

);
