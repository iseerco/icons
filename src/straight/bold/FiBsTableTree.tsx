import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTableTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3,19V7h2v10h7v-3h-4v-2h2v-3h-2v-2h13v12H3Zm11-5h4v3h-4v-3Zm2-2h-4v-3h4v3Z"/></svg>

);
