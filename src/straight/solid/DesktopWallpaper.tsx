import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DesktopWallpaper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V4c0-1.65-1.35-3-3-3H3C1.35,1,0,2.35,0,4v15H11v2H6v2h12v-2h-5v-2h11ZM5.5,5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm5.91,5.41l-6.59,6.59H2L11.41,7.59l4,4,6.59-6.59v2.83l-6.59,6.59-4-4Z"/></svg>

);
