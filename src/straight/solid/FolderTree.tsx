import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11V5c0-1.654-1.346-3-3-3h-2.586l-2-2h-3.414c-1.654,0-3,1.346-3,3v2H2V0H0V17c0,1.654,1.346,3,3,3h7v4h14v-6c0-1.654-1.346-3-3-3h-2.586l-2-2h-3.414c-1.654,0-3,1.346-3,3v2H3c-.551,0-1-.448-1-1V7H10v4h14Z"/></svg>

);
