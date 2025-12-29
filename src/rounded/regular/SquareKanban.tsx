import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,19c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v14ZM11,6v5c0,.55-.45,1-1,1s-1-.45-1-1V6c0-.55,.45-1,1-1s1,.45,1,1Zm-4,0V14c0,.55-.45,1-1,1s-1-.45-1-1V6c0-.55,.45-1,1-1s1,.45,1,1Zm8,0v12c0,.55-.45,1-1,1s-1-.45-1-1V6c0-.55,.45-1,1-1s1,.45,1,1Zm4,0v3c0,.55-.45,1-1,1s-1-.45-1-1v-3c0-.55,.45-1,1-1s1,.45,1,1Z"/></svg>

);
