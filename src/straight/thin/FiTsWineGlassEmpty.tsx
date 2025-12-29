import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWineGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,0v10c0,4.242,3.322,7.714,7.5,7.975v5.025h-4.5v1h10v-1h-4.5v-5.025c4.178-.26,7.5-3.732,7.5-7.975V0H4Zm15,10c0,3.859-3.14,7-7,7s-7-3.141-7-7V1h14v9Z"/>
</svg>

);
