import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.506,6.275l2.067-6.275H6.427l2.067,6.275-3.726,11.177,7.232,6.575,7.232-6.575-3.726-11.177Zm-2.079-3.275l-.659,2h-1.536l-.659-2h2.854Zm-5.195,13.547l2.849-8.547h1.838l2.849,8.547-3.768,3.425-3.768-3.425Z"/>
</svg>

);
