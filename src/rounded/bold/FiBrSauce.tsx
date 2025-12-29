import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSauce = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,8.607V7a2,2,0,0,0-2-2H13.833L13.164.986a1.18,1.18,0,0,0-2.328,0L10.167,5H9A2,2,0,0,0,7,7V8.607A5.5,5.5,0,0,0,4,13.5v5A5.506,5.506,0,0,0,9.5,24h5A5.506,5.506,0,0,0,20,18.5v-5A5.5,5.5,0,0,0,17,8.607ZM17,18.5A2.5,2.5,0,0,1,14.5,21h-5A2.5,2.5,0,0,1,7,18.5v-5A2.5,2.5,0,0,1,9.5,11h5A2.5,2.5,0,0,1,17,13.5Zm-2-3v1A1.5,1.5,0,0,1,13.5,18h-3A1.5,1.5,0,0,1,9,16.5v-1A1.5,1.5,0,0,1,10.5,14h3A1.5,1.5,0,0,1,15,15.5Z"/></svg>

);
