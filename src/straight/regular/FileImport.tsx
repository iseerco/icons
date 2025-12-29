import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileImport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.414,0H5c-1.654,0-3,1.346-3,3v9h2V3c0-.551.448-1,1-1h8v7h7v13H4v-4h-2v6h20V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586v-3.586Zm-5.003,12.586H0v-2h10.008l-2.302-2.291,1.414-1.414,3.299,3.298c.774.775.774,2.037,0,2.812l-3.3,3.299-1.414-1.414,2.291-2.291Z"/></svg>

);
