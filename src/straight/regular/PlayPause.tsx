import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlayPause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,21h-2V3h2V21Zm-4,0h-2V3h2V21Zm-16-.002V3.002l10.88,6.946c.699,.439,1.12,1.203,1.12,2.039s-.424,1.601-1.135,2.047L2,20.998ZM4,6.651v10.689l7.793-4.995c.134-.084,.207-.213,.207-.359s-.069-.273-.19-.35L4,6.651Z"/></svg>

);
