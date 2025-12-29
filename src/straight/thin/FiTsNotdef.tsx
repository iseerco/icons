import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNotdef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5c-1.38,0-2.5,1.12-2.5,2.5V24H21V2.5c0-1.38-1.12-2.5-2.5-2.5ZM4.06,2.11l7.32,9.9-7.38,9.97V2.5c0-.14,.02-.26,.06-.39Zm7.94,10.74l7.51,10.15H4.49l7.51-10.15Zm.62-.84L19.94,2.11c.03,.12,.06,.25,.06,.39V21.98l-7.38-9.97ZM18.5,1c.31,0,.59,.09,.83,.25l-7.33,9.91L4.67,1.25c.24-.16,.52-.25,.83-.25h13Z"/></svg>

);
