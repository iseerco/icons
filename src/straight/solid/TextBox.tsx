import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6v-3.667c0-1.286-1.047-2.333-2.333-2.333h-3.667v2H6V0h-3.667C1.047,0,0,1.047,0,2.333v3.667h2v12H0v6h6v-2h12v2h6v-6h-2V6h2Zm-4,12h-2v2H6v-2h-2V6h2v-2h12v2h2v12Zm-12-10h8v2h-3v7h-2v-7h-3v-2Z"/>
</svg>

);
