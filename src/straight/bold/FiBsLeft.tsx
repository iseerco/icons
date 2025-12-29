import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,24.04L.98,14.35C.34,13.71,0,12.88,0,12c0-.88,.35-1.71,.97-2.33h.02S11-.01,11-.01V7h13v10H11v7.04ZM3.08,11.8c-.07,.07-.08,.15-.08,.2s.01,.14,.09,.21l4.91,4.75v-2.96h13v-4H8v-2.95L3.08,11.8Z"/></svg>

);
