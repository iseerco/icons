import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNairaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.5h-2V0h-3V10.5h-6.17L6.93,1.2C6.29,.19,5.08-.27,3.94,.06c-1.16,.34-1.94,1.38-1.94,2.59v7.85H0v3H2v10.5h3V13.5h6.17l5.89,9.3c.5,.79,1.35,1.25,2.25,1.25,.25,0,.5-.04,.75-.11,1.16-.34,1.94-1.38,1.94-2.59v-7.85h2v-3Zm-19,0V3.76l4.27,6.74H5Zm14,9.74l-4.27-6.74h4.27v6.74Z"/></svg>

);
