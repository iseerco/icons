import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RemoveFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H12.24L8.24,1H3C1.35,1,0,2.35,0,4V23H13v-2H2V9H22v4h2V6c0-1.65-1.35-3-3-3ZM2,7v-3c0-.55,.45-1,1-1H7.76l4,2h9.24c.55,0,1,.45,1,1v1H2Zm21.96,9.46l-3.04,3.06,3.04,3.03-1.41,1.42-3.04-3.03-3.01,3.02-1.42-1.41,3.01-3.02-3.04-3.03,1.41-1.42,3.04,3.03,3.04-3.06,1.42,1.41Z"/></svg>

);
