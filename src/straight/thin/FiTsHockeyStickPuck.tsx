import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHockeyStickPuck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.101,0l-9.294,18H3c-1.654,0-3,1.346-3,3s1.346,3,3,3h6.093c1.691,0,3.224-.934,3.999-2.436L23.989.458,23.101,0Zm-10.897,21.106c-.604,1.169-1.795,1.895-3.11,1.895H3c-1.103,0-2-.897-2-2s.897-2,2-2h10.29l-1.087,2.105Zm5.797-.105v3h6v-3h-6Zm5,2h-4v-1h4v1Z"/>
</svg>

);
