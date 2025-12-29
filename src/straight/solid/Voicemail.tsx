import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Voicemail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,6c-3.032,0-5.5,2.467-5.5,5.5,0,1.328.474,2.548,1.261,3.5h-4.521c.787-.952,1.26-2.172,1.26-3.5,0-3.033-2.467-5.5-5.5-5.5S0,8.467,0,11.5s2.467,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5s-2.468-5.5-5.5-5.5ZM2,11.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5Zm16.5,3.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Z"/></svg>

);
