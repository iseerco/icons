import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSidebar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7.5v9c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.467-5.5-5.5-5.5H5.5C2.467,2,0,4.468,0,7.5Zm9-2.5h9.5c1.378,0,2.5,1.121,2.5,2.5v9c0,1.379-1.122,2.5-2.5,2.5H9V5ZM3,11.462c0-.828,.671-1.5,1.5-1.5s1.5,.672,1.5,1.5c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5Zm0-5c0-.828,.671-1.5,1.5-1.5s1.5,.672,1.5,1.5c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5Z"/></svg>

);
