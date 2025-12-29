import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStarSharpHalfStroke = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,6.956h-6.728L14.046,0h-4.093l-2.226,6.956H1l-1,4.467,5.096,3.734-2.533,7.86,4.325.983,5.112-3.767,5.112,3.767,4.324-.987-2.532-7.856,5.096-3.734-1-4.467Zm-7.618,7.055l2.104,6.532-5.487-4.045V3.451l2.084,6.513h6.822l-5.524,4.047Z"/>
</svg>

);
