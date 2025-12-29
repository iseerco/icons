import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBorderStyle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,24c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Zm-11-1c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm17,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm0-5c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm0-6c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm0-6c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1ZM13,23c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1ZM1,2.5c0-.83,.67-1.5,1.5-1.5H24V0H2.5C1.12,0,0,1.12,0,2.5V24H1V2.5Z"/></svg>

);
