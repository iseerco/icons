import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCrossSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19.061 7.061 16.939 4.939 12 9.879 7.061 4.939 4.939 7.061 9.879 12 4.939 16.939 7.061 19.061 12 14.121 16.939 19.061 19.061 16.939 14.121 12 19.061 7.061"/></svg>

);
