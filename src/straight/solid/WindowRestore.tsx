import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowRestore = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,13v11H0V13H18Zm0-2v-2c0-1.65-1.35-3-3-3H3c-1.65,0-3,1.35-3,3v2H18ZM21,0H9c-1.66,0-3,1.34-3,3v1H15c2.76,0,5,2.24,5,5v9h4V3c0-1.66-1.34-3-3-3Z"/></svg>

);
