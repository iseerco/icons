import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.5,11h3v6h-3v-6Zm0,11h3v-3h-3v3Zm13.5-10.577l-1-4.467h-6.728L14.046,0h-4.093l-2.226,6.956H1l-1,4.467,5.096,3.734-2.533,7.86,4.325.983,2.112-1.556v-3.733l-2.487,1.833,2.104-6.532-5.524-4.011h6.822l2.084-6.549,2.084,6.549h6.822l-5.524,4.011,2.104,6.532-2.487-1.833v3.733l2.112,1.556,4.324-.987-2.532-7.856,5.096-3.734Z"/></svg>

);
