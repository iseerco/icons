import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Template = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.41,0H5c-1.65,0-3,1.35-3,3V24H22V7.59L14.41,0Zm.59,3.41l3.59,3.59h-3.59V3.41ZM4,22V3c0-.55,.45-1,1-1H13v7h7v13H4Zm2-2h12V11H6v9Zm2-7h8v5H8v-5Zm3-4H6v-2h5v2Z"/></svg>

);
