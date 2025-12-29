import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BrokenImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.41,0H5c-1.65,0-3,1.35-3,3V24H22V7.59L14.41,0Zm.59,3.41l3.59,3.59h-3.59V3.41ZM5,2H13v7h7v6.07l-3.98-3.98-4,4-4-4-4.02,4.02V3c0-.55,.45-1,1-1Zm-1,20v-4.07l4.02-4.02,4,4,4-4,3.98,3.98v4.1H4Z"/></svg>

);
