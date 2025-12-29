import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.013,18l.846-1h8.14v1c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3v-1h8.145l.846,1h6.023Zm-2.013-15v6.086l2.293-2.293,1.414,1.414-3.293,3.293c-.39.39-.902.585-1.414.585s-1.024-.195-1.414-.585l-3.293-3.293,1.414-1.414,2.293,2.293V3H2v12h7.082l.846,1h4.157l.846-1h7.068V3h-9Z"/>
</svg>

);
