import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,11v3c0,.552-.448,1-1,1h-6c-.552,0-1-.448-1-1v-3h8Zm8,1c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6-2c0-1.304-.836-2.415-2-2.828v-1.172c0-.553-.447-1-1-1s-1,.447-1,1v1h-4v-1c0-.553-.447-1-1-1s-1,.447-1,1v1.172c-1.164.413-2,1.524-2,2.828v4c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3v-4Z"/></svg>

);
