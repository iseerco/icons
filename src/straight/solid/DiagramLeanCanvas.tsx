import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramLeanCanvas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,2h2v6h-2V2Zm10,6h2V2h-2v6Zm-2-6h-4v14h4V2Zm6,14h4V5c0-1.65-1.35-3-3-3h-1v14Zm-12-6h-2v6h2v-6Zm5,8v4h11v-4H13Zm-2,0H0v4H11v-4Zm7-8h-2v6h2v-6Zm-14,6V2h-1C1.35,2,0,3.35,0,5v11H4Z"/></svg>

);
