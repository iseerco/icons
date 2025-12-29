import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsSplitUpAndLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,22v2H15c-1.654,0-3-1.346-3-3v-7H2.949l3.761,3.796-1.421,1.407L.612,14.483c-.816-.816-.816-2.15,.003-2.969L5.29,6.796l1.421,1.407-3.761,3.796H12V2.949l-3.796,3.761-1.407-1.421L11.517,.612c.816-.816,2.149-.816,2.969,.003l4.717,4.674-1.407,1.421-3.796-3.761V21c0,.551,.449,1,1,1h9Z"/>
</svg>

);
