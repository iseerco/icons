import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStats = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23v1H2.5c-1.379,0-2.5-1.122-2.5-2.5V0h1v21.5c0,.827.673,1.5,1.5,1.5h21.5ZM7,11h-1v9h1v-9Zm4-5h-1v14h1V6Zm4,5h-1v9h1v-9Zm4-5h-1v14h1V6Z"/>
</svg>

);
