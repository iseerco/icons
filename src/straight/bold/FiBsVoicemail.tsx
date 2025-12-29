import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVoicemail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,6c-3.032,0-5.5,2.467-5.5,5.5,0,.9.217,1.75.602,2.5h-3.204c.385-.75.602-1.6.602-2.5,0-3.033-2.467-5.5-5.5-5.5S0,8.467,0,11.5s2.467,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5s-2.468-5.5-5.5-5.5ZM3,11.5c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5-2.5-1.122-2.5-2.5Zm15.5,2.5c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5Z"/></svg>

);
