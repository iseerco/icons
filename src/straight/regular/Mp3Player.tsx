import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mp3Player = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,0H6c-1.654,0-3,1.346-3,3v21h18V3c0-1.654-1.346-3-3-3Zm1,22H5V3c0-.551.448-1,1-1h12c.552,0,1,.449,1,1v19Zm-7-11c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,8c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm1.5-3c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm1.5-12h-6c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h6c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm-6,4v-2h6v2s-6,0-6,0Z"/></svg>

);
