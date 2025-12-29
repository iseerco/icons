import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowRestore = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,6H3c-1.65,0-3,1.35-3,3v15H18V9c0-1.65-1.35-3-3-3ZM3,8H15c.55,0,1,.45,1,1v2H2v-2c0-.55,.45-1,1-1Zm-1,14V13h14v9H2ZM24,3v15h-4v-2h2V3c0-.55-.45-1-1-1H9c-.55,0-1,.45-1,1v1h-2v-1c0-1.65,1.35-3,3-3h12c1.65,0,3,1.35,3,3Z"/></svg>

);
