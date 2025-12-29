import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTelescope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.039,10.387l.922-.389L19.744-.002l-.922.389.717,1.701L1.697,9.798l1.22,2.892L.017,13.966l.402.916,2.886-1.27,1.196,2.837,8.031-3.471-4.84,11.021h1.093l4.715-10.736,4.715,10.736h1.093l-5.148-11.724,8.185-3.537.695,1.648ZM5.031,15.131l-2.027-4.808L19.928,3.009l2.027,4.808L5.031,15.131Z"/></svg>

);
