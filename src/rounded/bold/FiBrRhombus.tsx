import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24a5.324,5.324,0,0,1-3.777-1.561L1.565,15.777a5.34,5.34,0,0,1,0-7.554L8.223,1.564a5.349,5.349,0,0,1,7.554,0l6.658,6.659a5.34,5.34,0,0,1,0,7.554l-6.658,6.659A5.324,5.324,0,0,1,12,24Zm-1.656-3.683a2.345,2.345,0,0,0,3.312,0l6.658-6.658a2.342,2.342,0,0,0,0-3.312L13.656,3.686a2.345,2.345,0,0,0-3.312,0L3.686,10.344a2.342,2.342,0,0,0,0,3.312Z"/></svg>

);
