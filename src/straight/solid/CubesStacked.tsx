import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CubesStacked = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,23H1v-4.5c0-.828.672-1.5,1.5-1.5h3c.828,0,1.5.672,1.5,1.5v4.5Zm8-4.5c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Zm0-16c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6V2.5Zm8,16c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Zm-12-8c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Zm8,0c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5Z"/>
</svg>

);
