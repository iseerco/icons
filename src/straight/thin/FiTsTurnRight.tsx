import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTurnRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.531,9.633l-6.676,6.72-.709-.705,6.604-6.647H2.5c-.827,0-1.5.673-1.5,1.5v11.5H0v-11.5c0-1.378,1.122-2.5,2.5-2.5h20.25l-6.604-6.647.709-.705,6.677,6.721c.624.624.624,1.64,0,2.265Z"/>
</svg>

);
