import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCodeFork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,6.663v1.837c0,3.033-2.467,5.5-5.5,5.5h-1.5c-.827,0-1.5,.673-1.5,1.5v1.837c1.182,.562,2,1.767,2,3.163,0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5c0-1.396,.818-2.601,2-3.163v-1.837c0-.827-.673-1.5-1.5-1.5h-1.5c-3.033,0-5.5-2.467-5.5-5.5v-1.837C.818,6.101,0,4.896,0,3.5,0,1.567,1.567,0,3.5,0s3.5,1.567,3.5,3.5c0,1.396-.818,2.601-2,3.163v1.837c0,1.378,1.122,2.5,2.5,2.5h1.5c1.151,0,2.203,.435,3,1.148,.797-.714,1.849-1.148,3-1.148h1.5c1.378,0,2.5-1.122,2.5-2.5v-1.837c-1.182-.562-2-1.767-2-3.163,0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5c0,1.396-.818,2.601-2,3.163Z"/></svg>

);
