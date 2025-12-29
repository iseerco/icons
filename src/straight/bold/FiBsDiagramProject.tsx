import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiagramProject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9V3c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3h-6c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v6H5.755l3.503,7.784c-.166,.372-.258,.783-.258,1.216v6h9v-6c0-1.654-1.346-3-3-3h-3c-.084,0-.168,.004-.25,.011l-2.75-6.11v-2.901h6v3h9ZM3,3h3v3H3V3ZM15,21h-3v-3h3v3ZM18,3h3v3h-3V3Z"/></svg>

);
