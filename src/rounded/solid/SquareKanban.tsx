import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM7,14c0,.55-.45,1-1,1s-1-.45-1-1V6c0-.55,.45-1,1-1s1,.45,1,1V14Zm4-3c0,.55-.45,1-1,1s-1-.45-1-1V6c0-.55,.45-1,1-1s1,.45,1,1v5Zm4,7c0,.55-.45,1-1,1s-1-.45-1-1V6c0-.55,.45-1,1-1s1,.45,1,1v12Zm4-9c0,.55-.45,1-1,1s-1-.45-1-1v-3c0-.55,.45-1,1-1s1,.45,1,1v3Z"/></svg>

);
