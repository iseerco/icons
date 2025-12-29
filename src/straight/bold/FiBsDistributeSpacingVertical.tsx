import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDistributeSpacingVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5H0V2H24v3Zm0,14H0v3H24v-3Zm-4-12H4v10H20V7Zm-13,3h10v4H7v-4Z"/></svg>

);
