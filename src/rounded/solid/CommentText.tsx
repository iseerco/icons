import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.74,.045C9.264-.189,5.864,1.083,3.412,3.537,.96,5.993-.308,9.394-.067,12.871c.44,6.354,6.052,11.146,13.054,11.146h5.917c2.757,0,5-2.243,5-5v-6.66C23.904,5.878,19,.47,12.74,.045Zm4.26,10.955c-.552,0-1-.447-1-1s-.449-1-1-1h-2v8h1c.552,0,1,.447,1,1s-.448,1-1,1h-4c-.552,0-1-.447-1-1s.448-1,1-1h1V9h-2c-.551,0-1,.448-1,1s-.448,1-1,1-1-.447-1-1c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3,0,.553-.448,1-1,1Z"/></svg>

);
