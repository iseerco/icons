import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,10h2v6h-2v-6Zm0,10h2v-2h-2v2Zm11-12.414v16.414H2V3c0-1.654,1.346-3,3-3h9.414l7.586,7.586Zm-7-.586h3.586l-3.586-3.586v3.586Zm5,2h-7V2H5c-.551,0-1,.449-1,1v19h16v-13Z"/></svg>

);
