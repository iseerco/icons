import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrWindowMinimize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,23H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H23.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"/></svg>

);
