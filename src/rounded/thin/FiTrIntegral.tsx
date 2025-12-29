import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrIntegral = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.75,24c-1.517,0-2.75-1.233-2.75-2.75v-.75c0-.276.224-.5.5-.5s.5.224.5.5v.75c0,.965.785,1.75,1.75,1.75s1.75-.785,1.75-1.75V2.75c0-1.517,1.233-2.75,2.75-2.75s2.75,1.233,2.75,2.75v.75c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-.75c0-.965-.785-1.75-1.75-1.75s-1.75.785-1.75,1.75v18.5c0,1.517-1.233,2.75-2.75,2.75Z"/>
</svg>

);
