import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrOctagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.16,24h-6.21c-1.2,0-2.33-.47-3.18-1.32L1.37,18.29c-.85-.85-1.32-1.98-1.32-3.18v-6.21c0-1.2,.47-2.33,1.32-3.18L5.76,1.32c.85-.85,1.98-1.32,3.18-1.32h6.21c1.2,0,2.33,.47,3.18,1.32l4.39,4.39c.85,.85,1.32,1.98,1.32,3.18v6.21c0,1.2-.47,2.33-1.32,3.18l-4.39,4.39c-.85,.85-1.98,1.32-3.18,1.32ZM8.94,1c-.94,0-1.81,.36-2.48,1.02L2.08,6.42c-.66,.66-1.02,1.54-1.02,2.48v6.21c0,.94,.36,1.81,1.02,2.48l4.39,4.39c.66,.66,1.54,1.02,2.48,1.02h6.21c.94,0,1.81-.36,2.48-1.02l4.39-4.39c.66-.66,1.02-1.54,1.02-2.48v-6.21c0-.94-.36-1.81-1.02-2.48l-4.39-4.39c-.66-.66-1.54-1.02-2.48-1.02h-6.21Z"/></svg>

);
