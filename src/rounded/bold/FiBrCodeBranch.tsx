import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCodeBranch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5c0-1.933-1.567-3.5-3.5-3.5s-3.5,1.567-3.5,3.5c0,1.396,.818,2.601,2,3.163v1.837c0,1.378-1.122,2.5-2.5,2.5H7.5c-.899,0-1.75,.217-2.5,.602V6.663c1.182-.562,2-1.767,2-3.163,0-1.933-1.567-3.5-3.5-3.5S0,1.567,0,3.5c0,1.396,.818,2.601,2,3.163v10.674c-1.182,.562-2,1.767-2,3.163,0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5c0-1.396-.818-2.601-2-3.163v-.837c0-1.378,1.122-2.5,2.5-2.5h9c3.033,0,5.5-2.467,5.5-5.5v-1.837c1.182-.562,2-1.767,2-3.163Z"/></svg>

);
