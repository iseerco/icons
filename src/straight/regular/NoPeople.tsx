import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoPeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.35,2,0,3.35,0,5v14c0,1.65,1.35,3,3,3H21c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3Zm1,17c0,.55-.45,1-1,1H3c-.55,0-1-.45-1-1V5c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v14Z"/></svg>

);
