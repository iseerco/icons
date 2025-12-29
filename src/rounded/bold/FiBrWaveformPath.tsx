import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrWaveformPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,8.5v7c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-7c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5ZM11.5,0c-.828,0-1.5.672-1.5,1.5v21c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V1.5c0-.828-.672-1.5-1.5-1.5Zm10,4c-.828,0-1.5.672-1.5,1.5v13c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V5.5c0-.828-.672-1.5-1.5-1.5Zm-15,1c-.828,0-1.5.672-1.5,1.5v11c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V6.5c0-.828-.672-1.5-1.5-1.5ZM1.5,9c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-3c0-.828-.672-1.5-1.5-1.5Z"/></svg>

);
