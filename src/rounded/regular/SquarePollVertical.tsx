import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePollVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,9v9c0,.55-.45,1-1,1s-1-.45-1-1V9c0-.55,.45-1,1-1s1,.45,1,1Zm13-4v14c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h14c2.76,0,5,2.24,5,5Zm-2,0c0-1.65-1.35-3-3-3H5c-1.65,0-3,1.35-3,3v14c0,1.65,1.35,3,3,3h14c1.65,0,3-1.35,3-3V5ZM6,11c-.55,0-1,.45-1,1v6c0,.55,.45,1,1,1s1-.45,1-1v-6c0-.55-.45-1-1-1ZM14,5c-.55,0-1,.45-1,1v12c0,.55,.45,1,1,1s1-.45,1-1V6c0-.55-.45-1-1-1Zm4,9c-.55,0-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1v-3c0-.55-.45-1-1-1Z"/></svg>

);
