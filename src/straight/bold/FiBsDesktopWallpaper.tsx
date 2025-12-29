import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDesktopWallpaper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,6.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Zm8.5,12.5v2h4.5v3H6v-3h4.5v-2H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5v15.5H13.5Zm7.5-3v-6.88l-6,6-4-4-4.88,4.88h14.88ZM3,3.5V14.88L11,6.88l4,4,6-6v-1.38c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5Z"/></svg>

);
