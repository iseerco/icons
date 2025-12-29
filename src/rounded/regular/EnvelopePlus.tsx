import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10v9a5.006,5.006,0,0,1-5,5H5a5.006,5.006,0,0,1-5-5V8A5.006,5.006,0,0,1,5,3h8a1,1,0,0,1,0,2H5A2.99,2.99,0,0,0,2.361,6.6l7.517,7.518a3.008,3.008,0,0,0,4.244,0L17.943,10.3a1,1,0,0,1,1.414,1.414l-3.821,3.822a5.008,5.008,0,0,1-7.072,0L2,9.071V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A1,1,0,0,1,24,10ZM17,5h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2H21V1a1,1,0,0,0-2,0V3H17A1,1,0,0,0,17,5Z"/></svg>

);
