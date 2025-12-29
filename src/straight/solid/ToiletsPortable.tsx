import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToiletsPortable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,1.993v2.007h-11V1.993l.409-.3c.094-.069,2.341-1.693,5.091-1.693s4.997,1.625,5.091,1.693l.409.3Zm-11,22.007h2v-2h7v2h2v-10h-3v-2h3v-6h-11v18ZM5.5,0C2.75,0,.503,1.625.409,1.693l-.409.3v2.007h11V1.993l-.409-.3c-.094-.069-2.341-1.693-5.091-1.693ZM0,24h2v-2h7v2h2v-10h-3v-2h3v-6H0v18Z"/>
</svg>

);
