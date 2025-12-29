import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarLinesPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.5v6.127c-.909-.557-1.983-.744-3-.542v-2.085H3v12H11v3H0V5.5c0-1.93,1.57-3.5,3.5-3.5h2.5V0h3V2h6V0h3V2h2.5c1.93,0,3.5,1.57,3.5,3.5Zm-3.725,8.139l-7.275,7.275v3.086h3.086l7.275-7.275c.852-.852,.852-2.234,0-3.086s-2.234-.852-3.086,0Zm-2.275-.553v-2.086H6v3h11.086l.914-.914Zm-12,5.914h6.086l.914-.914v-2.086H6v3Z"/></svg>

);
