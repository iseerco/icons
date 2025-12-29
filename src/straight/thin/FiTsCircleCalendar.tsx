import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCircleCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm4.5-16h-.5v-2h-1v2h-6v-2h-1v2h-.5c-.827,0-1.5.673-1.5,1.5v8.5h12v-8.5c0-.827-.673-1.5-1.5-1.5Zm-9,1h9c.275,0,.5.225.5.5v1.5H7v-1.5c0-.275.225-.5.5-.5Zm-.5,8v-5h10v5H7Z"/></svg>

);
