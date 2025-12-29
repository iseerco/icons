import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.731,11.356l-3.343-3.3A.816.816,0,0,0,19,8.638V11H13V5h2.363a.816.816,0,0,0,.58-1.389L12.644.27a.9.9,0,0,0-1.288,0l-3.3,3.342A.816.816,0,0,0,8.637,5H11v6H5V8.638a.816.816,0,0,0-1.388-.581l-3.343,3.3a.906.906,0,0,0,0,1.289l3.343,3.3A.816.816,0,0,0,5,15.363V13h6v6H8.637a.816.816,0,0,0-.58,1.389l3.3,3.342a.9.9,0,0,0,1.288,0l3.3-3.342A.816.816,0,0,0,15.363,19H13V13h6v2.363a.816.816,0,0,0,1.388.581l3.343-3.3A.906.906,0,0,0,23.731,11.356Z"/></svg>

);
