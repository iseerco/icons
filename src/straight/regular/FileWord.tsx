import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileWord = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.68,20l-1.7-9h2.04l1.15,5.97,1.83-4.18,1.83,4.17,1.15-5.97h2.04l-1.7,9h-2.27l-1.05-2.22-1.01,2.22h-2.31ZM22,7.59V24H2V3C2,1.35,3.35,0,5,0H14.41l7.59,7.59Zm-7-.59h3.59l-3.59-3.59v3.59Zm5,2h-7V2H5c-.55,0-1,.45-1,1V22H20V9Z"/></svg>

);
