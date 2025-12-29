import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramSubtask = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,10c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4H4C1.79,0,0,1.79,0,4v2c0,2.21,1.79,4,4,4v5c0,2.76,2.24,5,5,5h1c0,2.21,1.79,4,4,4h6c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4h-6c-2.21,0-4,1.79-4,4h-1c-1.65,0-3-1.35-3-3v-5h14Zm-8,8c0-1.1,.9-2,2-2h6c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2h-6c-1.1,0-2-.9-2-2v-2ZM2,6v-2c0-1.1,.9-2,2-2H20c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2Z"/></svg>

);
