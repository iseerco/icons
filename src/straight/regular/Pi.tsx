import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,2v18c0,1.103.897,2,2,2s2-.897,2-2h2c0,2.206-1.794,4-4,4s-4-1.794-4-4V2h-7v13.869c0,4.981-3.184,7.995-3.32,8.121l-1.36-1.466c.024-.023,2.68-2.572,2.68-6.655V2h-.5c-1.302,0-2.299.366-3.049,1.118-1.441,1.445-1.451,3.852-1.451,3.876l-2,.016c0-.131-.006-3.244,2.022-5.291C3.152.578,4.658,0,6.5,0h17.5v2h-6Z"/></svg>

);
