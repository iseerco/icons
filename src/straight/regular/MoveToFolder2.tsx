import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoveToFolder2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H12.24L8.24,1H3C1.35,1,0,2.35,0,4V23H11v-2H2V9H22v4.35l2,2V6c0-1.65-1.35-3-3-3ZM2,7v-3c0-.55,.45-1,1-1H7.76l4,2h9.24c.55,0,1,.45,1,1v1H2Zm21.42,10.59c.77,.78,.77,2.04,0,2.81l-3.3,3.3-1.41-1.41,2.29-2.29h-8v-2h8.01l-2.3-2.29,1.41-1.41,3.3,3.3Z"/></svg>

);
