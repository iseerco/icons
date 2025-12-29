import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePhoneHangup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.173,11.017c.504.504.828,1.192.827,1.96v2.023h-4v-2.593c-1.068-.456-2.047-.68-3-.686-1.003-.006-1.978.228-3,.686v2.593h-4v-2.023c0-.768.323-1.456.827-1.96,1.308-1.308,3.733-2.006,6.173-2.017,2.39-.011,4.793.637,6.173,2.017Zm5.827-8.017v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.448-1-1-1H3c-.552,0-1,.448-1,1v19h20V3Z"/></svg>

);
