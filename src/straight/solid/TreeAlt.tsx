import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TreeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,21h2v3h-2v-3Zm5.915-12h2.104L14.339.992c-.497-.63-1.266-.992-2.108-.992s-1.61.361-2.107.991l-.076.112-4.654,7.897h2.154l-3.958,6h2.384l-3.478,6h8.505v-12h2v12h8.964l-3.475-6h2.188l-3.763-6Z"/>
</svg>

);
