import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileWord = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.41,5h-4.41V.59l4.41,4.41Zm.59,2V24H2V3C2,1.34,3.34,0,5,0H15V7h7Zm-4.97,4h-2.04l-1.15,5.97-1.83-4.17-1.83,4.18-1.15-5.97h-2.04l1.7,9h2.31l1.01-2.22,1.05,2.22h2.27l1.7-9Z"/></svg>

);
