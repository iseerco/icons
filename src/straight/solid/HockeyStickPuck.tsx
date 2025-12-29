import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HockeyStickPuck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.187.026l-8.664,16.974H3.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h6.246c1.511,0,2.875-.836,3.562-2.181L23.968.936,22.187.026Zm1.813,21.974v2h-6v-2h6Z"/>
</svg>

);
