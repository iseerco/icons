import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DistributeSpacingVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4H0V2H24v2Zm0,16H0v2H24v-2Zm-4-13H4v10H20V7Zm-14,2h12v6H6v-6Z"/></svg>

);
