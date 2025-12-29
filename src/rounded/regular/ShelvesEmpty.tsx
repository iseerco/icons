import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShelvesEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,0c-.552,0-1,.448-1,1v6H2V1c0-.552-.448-1-1-1S0,.448,0,1v22c0,.552.448,1,1,1s1-.448,1-1v-2h20v2c0,.552.448,1,1,1s1-.448,1-1V1c0-.552-.448-1-1-1ZM2,19v-10h20v10H2Z"/>
</svg>

);
