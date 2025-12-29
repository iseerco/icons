import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSealExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,12h-3V7h3v5Zm0,2h-3v3h3v-3Zm1.47,7h6.03v-6.03l2.97-2.97-2.97-2.97V3h-6.03L12,.03l-2.97,2.97H3v6.03L.03,12l2.97,2.97v6.03h6.03l2.97,2.97,2.97-2.97ZM6,13.73l-1.72-1.73,1.72-1.73V6h4.28l1.72-1.72,1.72,1.72h4.28v4.27l1.72,1.73-1.72,1.73v4.27h-4.28l-1.72,1.72-1.72-1.72H6v-4.27Z"/><path d="M13.5,12h-3V7h3v5Zm0,2h-3v3h3v-3Zm1.47,7h6.03v-6.03l2.97-2.97-2.97-2.97V3h-6.03L12,.03l-2.97,2.97H3v6.03L.03,12l2.97,2.97v6.03h6.03l2.97,2.97,2.97-2.97ZM6,13.73l-1.72-1.73,1.72-1.73V6h4.28l1.72-1.72,1.72,1.72h4.28v4.27l1.72,1.73-1.72,1.73v4.27h-4.28l-1.72,1.72-1.72-1.72H6v-4.27Z"/></svg>

);
