import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scalpel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.121,1.879c-1.17-1.17-3.072-1.17-4.242,0L0,20.758v2.223s2.809.028,3.04.019c3.602-.143,7.189-1.825,9.751-4.387l.759-2.92,9.571-9.571c1.17-1.17,1.17-3.072,0-4.242Zm-12.128,15.698c-2.181,2.091-5.023,3.305-8.033,3.424-.111.004-.243.007-.384.009l7.037-7.036,1.864,1.74-.484,1.863Zm10.714-12.87l-9.217,9.216-1.462-1.364L20.293,3.293c.391-.391,1.023-.391,1.414,0s.39,1.024,0,1.414Z"/></svg>

);
