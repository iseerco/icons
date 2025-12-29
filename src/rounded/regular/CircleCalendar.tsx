import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm4-14.828v-1.172c0-.553-.447-1-1-1s-1,.447-1,1v1h-4v-1c0-.553-.447-1-1-1s-1,.447-1,1v1.172c-1.164.413-2,1.524-2,2.828v4c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3v-4c0-1.304-.836-2.415-2-2.828Zm-1,7.828h-6c-.552,0-1-.448-1-1v-3h8v3c0,.552-.448,1-1,1Z"/></svg>

);
