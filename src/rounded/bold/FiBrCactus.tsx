import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCactus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.664,10.027c-.983.16-1.664,1.083-1.664,2.08v1.893c0,.552-.448,1-1,1h-1V6c0-3.309-2.691-6-6-6s-6,2.691-6,6v2h-1c-.552,0-1-.448-1-1v-1.893c0-.996-.681-1.92-1.664-2.08-1.253-.204-2.336.758-2.336,1.973v2c0,2.761,2.239,5,5,5h1v7.5c0,2.481,2.019,4.5,4.5,4.5h3c2.481,0,4.5-2.019,4.5-4.5v-.5h1c2.761,0,5-2.239,5-5v-2c0-1.215-1.083-2.177-2.336-1.973Zm-6.664,9.473c0,.827-.673,1.5-1.5,1.5h-3c-.827,0-1.5-.673-1.5-1.5V6c0-1.654,1.346-3,3-3s3,1.346,3,3v13.5Zm-2-4c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm1-7c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/></svg>

);
