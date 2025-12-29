import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBracketsCurly = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.21,12l-3.21,3.21v6.29c0,1.38-1.12,2.5-2.5,2.5h-3.5v-1h3.5c.83,0,1.5-.67,1.5-1.5v-6.71l2.79-2.79-2.79-2.79V2.5c0-.83-.67-1.5-1.5-1.5h-3.5V0h3.5c1.38,0,2.5,1.12,2.5,2.5v6.29l3.21,3.21ZM4,2.5v6.29L.79,12l3.21,3.21v6.29c0,1.41,1.61,2.5,3,2.5h3v-1h-3c-.87,0-2-.73-2-1.5v-6.71l-2.79-2.79,2.79-2.79V2.5c0-.83,.67-1.5,1.5-1.5h3.5V0h-3.5c-1.38,0-2.5,1.12-2.5,2.5Z"/></svg>

);
