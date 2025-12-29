import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleBookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm2-17h-4c-1.654,0-3,1.346-3,3v10l5-3.75,5,3.75v-10c0-1.654-1.346-3-3-3Zm1,9l-3-2.25-3,2.25v-6c0-.551.448-1,1-1h4c.552,0,1,.449,1,1v6Z"/></svg>

);
