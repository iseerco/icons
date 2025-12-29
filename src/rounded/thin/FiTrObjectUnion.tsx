import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrObjectUnion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,24h-7c-2.48,0-4.5-2.02-4.5-4.5v-3.5h-3.5c-2.48,0-4.5-2.02-4.5-4.5V4.5C0,2.02,2.02,0,4.5,0h7c2.48,0,4.5,2.02,4.5,4.5v3.5h3.5c2.48,0,4.5,2.02,4.5,4.5v7c0,2.48-2.02,4.5-4.5,4.5ZM4.5,1c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5h4c.28,0,.5,.22,.5,.5v4c0,1.93,1.57,3.5,3.5,3.5h7c1.93,0,3.5-1.57,3.5-3.5v-7c0-1.93-1.57-3.5-3.5-3.5h-4c-.28,0-.5-.22-.5-.5V4.5c0-1.93-1.57-3.5-3.5-3.5H4.5Z"/></svg>

);
