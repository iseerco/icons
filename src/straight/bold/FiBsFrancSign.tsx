import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFrancSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,3.5v6.5h11v3H7v3h6v3H7v5h-3v-5H0v-3H4V3.5c0-1.93,1.57-3.5,3.5-3.5h14.5V3H7.5c-.28,0-.5,.22-.5,.5Z"/></svg>

);
