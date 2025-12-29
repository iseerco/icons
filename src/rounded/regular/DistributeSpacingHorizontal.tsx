import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DistributeSpacingHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24c-.55,0-1-.45-1-1V1c0-.55,.45-1,1-1s1,.45,1,1V23c0,.55-.45,1-1,1Zm-17-1V1c0-.55-.45-1-1-1s-1,.45-1,1V23c0,.55,.45,1,1,1s1-.45,1-1Zm13-7V8c0-2.21-1.79-4-4-4h-2c-2.21,0-4,1.79-4,4v8c0,2.21,1.79,4,4,4h2c2.21,0,4-1.79,4-4ZM13,6c1.1,0,2,.9,2,2v8c0,1.1-.9,2-2,2h-2c-1.1,0-2-.9-2-2V8c0-1.1,.9-2,2-2h2Z"/></svg>

);
