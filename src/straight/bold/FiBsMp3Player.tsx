import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMp3Player = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,0H6c-1.654,0-3,1.346-3,3v21h18V3c0-1.654-1.346-3-3-3Zm0,21H6V3h12v18Zm-6-1c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5Zm0-6c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm-4-6.5v-1c0-.828.672-1.5,1.5-1.5h5c.828,0,1.5.672,1.5,1.5v1c0,.828-.672,1.5-1.5,1.5h-5c-.828,0-1.5-.672-1.5-1.5Z"/></svg>

);
