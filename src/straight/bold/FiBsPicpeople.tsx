import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPicpeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,1H3.5C1.57,1,0,2.57,0,4.5v15c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5Zm-5.5,19h-6v-1.5c0-.28,.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5v1.5Zm6-.5c0,.28-.22,.5-.5,.5h-2.5v-1.5c0-1.93-1.57-3.5-3.5-3.5h-5c-1.93,0-3.5,1.57-3.5,3.5v1.5H3.5c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v15ZM12,5c-2.48,0-4.5,2.02-4.5,4.5s2.02,4.5,4.5,4.5,4.5-2.02,4.5-4.5-2.02-4.5-4.5-4.5Zm0,6c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Z"/></svg>

);
