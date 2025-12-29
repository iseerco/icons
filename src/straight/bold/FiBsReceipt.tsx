import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReceipt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M378.936,0H126.987C92.2,0,64,28.2,64,62.987v448.637l83.983-58.389l52.489,36.533l52.489-36.512l52.489,36.512  l52.489-36.491l83.983,58.473V62.987C441.923,28.2,413.723,0,378.936,0z M378.936,391.066l-20.996-14.55l-52.489,36.533  l-52.489-36.512l-52.489,36.512l-52.489-36.491l-20.996,14.697V62.987h251.949V391.066z"/>
<rect x="170.667" y="128" width="170.667" height="64"/>
<rect x="170.667" y="234.667" width="128" height="64"/>
</svg>

);
