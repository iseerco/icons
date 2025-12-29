import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCallOutgoing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.3,14.923A10.694,10.694,0,0,1,9.089,9.694l2.963-2.963L5.41.09,1.765,3.734A6.062,6.062,0,0,0,0,8.058C0,15.209,8.791,24,15.942,24a6.058,6.058,0,0,0,4.323-1.765L23.91,18.59l-6.641-6.642Zm3.848,5.191a3.076,3.076,0,0,1-2.2.886C10.949,21,3,13.934,3,8.058a3.08,3.08,0,0,1,.886-2.2L5.41,4.332l2.4,2.4L5.542,9l.369.919A13.935,13.935,0,0,0,14.105,18.1l.909.346,2.255-2.256,2.4,2.4ZM24,1V6.5L21.811,4.311,17.186,8.936,15.064,6.814l4.625-4.625L17.5,0H23A1,1,0,0,1,24,1Z"/></svg>

);
