import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.004.039l-.008,1-3.996-.034v3.996h-5v5h-5v5h-5v5H1v4H0v-5h4v-5h5v-5h5v-5h5V-.004l5.004.043Z"/>
</svg>

);
