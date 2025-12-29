import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CubesStacked = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5.5,23h-3c-.828,0-1.5-.672-1.5-1.5v-3c0-.828.672-1.5,1.5-1.5h3c.828,0,1.5.672,1.5,1.5v3c0,.828-.672,1.5-1.5,1.5Zm9.5-1.5v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm0-16v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm8,16v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm-12-8v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm8,0v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Z"/>
</svg>

);
