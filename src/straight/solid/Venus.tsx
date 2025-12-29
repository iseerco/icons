import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Venus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8a8,8,0,1,0-9,7.931V19H8v2h3v3h2V21h3V19H13V15.931A8.008,8.008,0,0,0,20,8Z"/></svg>

);
