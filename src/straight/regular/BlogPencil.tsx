import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlogPencil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.35,2,0,3.35,0,5V22H14.93l-2-2H2V9H22v5.93l2,2V5c0-1.65-1.35-3-3-3ZM2,7v-2c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v2H2Zm13.24,4h-4.24v4.24l7.88,7.88c.57,.57,1.32,.88,2.12,.88s1.55-.31,2.12-.88,.88-1.32,.88-2.12-.31-1.55-.88-2.12l-7.88-7.88Zm6.46,10.71c-.38,.38-1.04,.38-1.41,0l-7.29-7.29v-1.41h1.41l7.29,7.29c.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71Z"/></svg>

);
