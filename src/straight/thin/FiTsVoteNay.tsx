import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVoteNay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,12h-1.5V4.5c0-1.38-1.12-2.5-2.5-2.5H6.5c-1.38,0-2.5,1.12-2.5,2.5v7.5h-1.5c-1.38,0-2.5,1.12-2.5,2.5v7.5H24v-7.5c0-1.38-1.12-2.5-2.5-2.5ZM5,4.5c0-.83,.67-1.5,1.5-1.5h11c.83,0,1.5,.67,1.5,1.5v12.5H5V4.5ZM23,21H1v-6.5c0-.83,.67-1.5,1.5-1.5h1.5v5H20v-5h1.5c.83,0,1.5,.67,1.5,1.5v6.5ZM15.35,7.35l-2.65,2.65,2.65,2.65-.71,.71-2.65-2.65-2.65,2.65-.71-.71,2.65-2.65-2.65-2.65,.71-.71,2.65,2.65,2.65-2.65,.71,.71Z"/></svg>

);
