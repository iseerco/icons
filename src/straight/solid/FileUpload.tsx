import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileUpload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414,5h-4.414V.586l4.414,4.414Zm-6.414,2V0H5c-1.657,0-3,1.343-3,3v21h20V7h-7Zm.291,9.294l-2.291-2.291v5.997h-2v-6.008l-2.291,2.302-1.414-1.414,3.298-3.299c.775-.774,2.038-.775,2.812,0l3.299,3.299-1.414,1.414Z"/></svg>

);
