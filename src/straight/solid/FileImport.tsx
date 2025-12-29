import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileImport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414,5h-4.414V.586l4.414,4.414Zm-6.414,2V0H5c-1.657,0-3,1.343-3,3v11h9.008l-2.302-2.291,1.414-1.414,3.299,3.298c.774.775.774,2.037,0,2.812l-3.3,3.299-1.414-1.414,2.291-2.291H2v8h20V7h-7Z"/></svg>

);
