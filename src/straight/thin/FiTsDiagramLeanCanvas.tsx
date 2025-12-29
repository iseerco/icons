import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiagramLeanCanvas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H2.5C1.12,2,0,3.12,0,4.5V22H24V4.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,2.5v12.5h-4V3h2.5c.83,0,1.5,.67,1.5,1.5Zm-13,12.5V3h4v14h-4Zm-1-7h-3V3h3v7Zm-3,1h3v6h-3v-6Zm12-1h-3V3h3v7Zm-3,1h3v6h-3v-6ZM2.5,3h2.5v14H1V4.5c0-.83,.67-1.5,1.5-1.5Zm-1.5,15H11.5v3H1v-3Zm11.5,3v-3h10.5v3H12.5Z"/></svg>

);
