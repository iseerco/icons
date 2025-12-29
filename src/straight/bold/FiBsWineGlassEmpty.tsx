import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWineGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,0v10c0,3.898,2.804,7.149,6.5,7.854v3.146h-3.5v3h10v-3h-3.5v-3.146c3.696-.705,6.5-3.956,6.5-7.854V0H4Zm13,10c0,2.757-2.243,5-5,5s-5-2.243-5-5V3h10v7Z"/>
</svg>

);
