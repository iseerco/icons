import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDistributeSpacingVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3H0v-1H24v1Zm0,18H0v1H24v-1Zm-4-14H4v10H20V7Zm-15,1h14v8H5V8Z"/></svg>

);
