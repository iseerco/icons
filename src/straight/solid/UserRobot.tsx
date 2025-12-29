import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserRobot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,21v3H3v-3c0-2.206,1.794-4,4-4h10c2.206,0,4,1.794,4,4Zm1-15v5h-2v4H4v-4h-2v-5h2v-1c0-1.654,1.346-3,3-3h4V0h2v2h4c1.654,0,3,1.346,3,3v1h2Zm-11,2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm5,0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/></svg>

);
