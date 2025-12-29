import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DistributeSpacingVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,4H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm1,17c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1H23c.55,0,1-.45,1-1Zm-4-7.5v-3c0-1.93-1.57-3.5-3.5-3.5H7.5c-1.93,0-3.5,1.57-3.5,3.5v3c0,1.93,1.57,3.5,3.5,3.5h9c1.93,0,3.5-1.57,3.5-3.5Z"/></svg>

);
