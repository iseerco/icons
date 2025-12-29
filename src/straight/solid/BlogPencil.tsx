import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlogPencil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7v-2c0-1.65,1.35-3,3-3H21c1.65,0,3,1.35,3,3v2H0ZM23.26,23.26c.99-.99,.99-2.6,0-3.59l-6.67-6.67h-3.59v3.59l6.67,6.67c.48,.48,1.12,.74,1.8,.74s1.32-.26,1.79-.74Zm-12.26-5.84v-6.42h6.42l6.58,6.58V9H0v13H15.58l-4.58-4.58Z"/></svg>

);
