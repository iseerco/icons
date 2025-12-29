import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShirtTankTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.333,8.801c-1.396-.494-2.333-1.82-2.333-3.301V0h-2v4c0,2.206-1.794,4-4,4s-4-1.794-4-4V0h-2v5.5c0,1.481-.938,2.808-2.333,3.301l-.667.236v14.963h18v-14.963l-.667-.236Z"/>
</svg>

);
