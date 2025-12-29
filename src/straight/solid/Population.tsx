import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Population = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,9.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Zm-6,6v5.5h2v3h2v-3h1V13h-2.5c-1.379,0-2.5,1.121-2.5,2.5Zm11-5.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm4,10h-1.5v4h-2v-4h-1v4h-2v-4h-1.5v-6.5c0-1.379,1.121-2.5,2.5-2.5h3c1.379,0,2.5,1.121,2.5,2.5v6.5ZM5.5,9c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm-3.5,8.5v4.5h2v2h2v-2h1v-7h-2.5c-1.379,0-2.5,1.121-2.5,2.5ZM7.234,7.918L12,3.362v2.638h2V1.5c0-.827-.673-1.5-1.5-1.5h-4.5V2h2.53l-3.264,3.121-2.4-2.4L.081,7.505l1.414,1.414,3.37-3.37,2.369,2.369Z"/>
</svg>

);
