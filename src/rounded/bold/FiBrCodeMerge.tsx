import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCodeMerge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,9c-1.396,0-2.601,.818-3.163,2H7.5c-1.379,0-2.5-1.122-2.5-2.5v-1.837c1.182-.562,2-1.767,2-3.163,0-1.933-1.567-3.5-3.5-3.5S0,1.567,0,3.5c0,1.396,.818,2.601,2,3.163v10.674c-1.182,.562-2,1.767-2,3.163,0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5c0-1.396-.818-2.601-2-3.163v-3.939c.75,.384,1.601,.602,2.5,.602h9.837c.562,1.182,1.767,2,3.163,2,1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5Z"/></svg>

);
