import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBarsFilter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5c0,.28-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H23.5c.28,0,.5,.22,.5,.5ZM15.5,21h-7c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h7c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Zm4-9H4.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h15c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z"/></svg>

);
