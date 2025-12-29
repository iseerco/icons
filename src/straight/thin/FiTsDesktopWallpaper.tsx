import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDesktopWallpaper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V4.5c0-1.38-1.12-2.5-2.5-2.5H2.5C1.12,2,0,3.12,0,4.5v14.5H11.5v3H7v1h10v-1h-4.5v-3h11.5Zm-21.79-1L10.5,9.71l3.99,3.99L23,5.66v12.34H2.21Zm.29-15H21.5c.76,0,1.39,.57,1.49,1.3L14.51,12.3l-4.01-4.01L1,17.79V4.5c0-.83,.67-1.5,1.5-1.5Zm1.5,4c0-.55,.45-1,1-1s1,.45,1,1-.45,1-1,1-1-.45-1-1Z"/></svg>

);
