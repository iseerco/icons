import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowMaximize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,1H3C1.35,1,0,2.35,0,4V23H24V4c0-1.65-1.35-3-3-3ZM3,3H21c.55,0,1,.45,1,1v4H2V4c0-.55,.45-1,1-1Zm-1,18V10H22v11H2Z"/></svg>

);
