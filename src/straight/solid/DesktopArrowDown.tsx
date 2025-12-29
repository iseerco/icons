import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DesktopArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,19v2h5v2H6v-2h5v-2H0v-4h24v4h-11ZM21,1h-8v7l2.293-2.293,1.414,1.414-3.293,3.293c-.39.39-.902.585-1.414.585s-1.024-.195-1.414-.585l-3.293-3.293,1.414-1.414,2.293,2.293V1H3C1.343,1,0,2.343,0,4v9h24V4c0-1.657-1.343-3-3-3Z"/>
</svg>

);
