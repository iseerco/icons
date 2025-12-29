import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGlassChampagne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5,18.838c3.141-.689,5.5-3.493,5.5-6.838l-1.136-12H6.136l-1.136,12c0,3.345,2.359,6.149,5.5,6.838v2.162h-3.5v3h10v-3h-3.5v-2.162Zm1.636-15.838l.19,2h-6.653l.19-2h6.272Zm-7.136,9.065l.387-4.065h7.225l.387,4.065c-.035,2.176-1.816,3.935-4,3.935s-3.964-1.759-4-3.935Z"/></svg>

);
