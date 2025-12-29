import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWineGlassCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,0V10c0,3.898,2.803,7.154,6.5,7.858v3.142h-3.5v3h10v-3h-3.5v-3.142c3.697-.704,6.5-3.96,6.5-7.858V0H4Zm13,10c0,2.757-2.243,5-5,5s-5-2.243-5-5V3h3.285l-2,5h3l-1.177,2.943,2.785,1.113,2.823-7.057h-3l.8-2h3.485v7Z"/></svg>

);
