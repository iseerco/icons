import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.998,4.264L19.731-.002s-1.72,2.157-4.219,1.369L.007,16.872l7.087,7.087,15.537-15.473c-.575-2.337,1.367-4.222,1.367-4.222ZM7.098,19.72l-2.849-2.849L15.513,5.609l2.872,2.872-11.287,11.239Zm6.195-10.427l1.414,1.414-1.5,1.5-1.414-1.414,1.5-1.5Zm-2.5,2.5l1.414,1.414-1.5,1.5-1.414-1.414,1.5-1.5Zm-2.5,2.5l1.414,1.414-1.5,1.5-1.414-1.414,1.5-1.5Z"/>
</svg>

);
