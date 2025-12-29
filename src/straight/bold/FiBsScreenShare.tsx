import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScreenShare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,16V3H2v13H0v2c0,1.657,1.343,3,3,3H21c1.657,0,3-1.343,3-3v-2h-2Zm-7.231,1h-5.538l-.923-1h-3.308V6h14v10h-3.308l-.923,1Zm1.731-6h-3v4h-3v-4h-3l3.793-3.707c.39-.391,1.024-.391,1.414,0l3.793,3.707Z"/>
</svg>

);
