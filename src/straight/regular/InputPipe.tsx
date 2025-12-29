import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InputPipe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,7h2v10h-2V7Zm19-1v15H0V6c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v13h20V6Z"/></svg>

);
