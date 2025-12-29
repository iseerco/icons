import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleQ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,13.25c0,.395-.081.77-.22,1.116l-1.073-1.073c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l1.154,1.154c-.431.24-.92.389-1.447.389-1.654,0-3-1.346-3-3v-2.5c0-1.654,1.346-3,3-3s3,1.346,3,3v2.5Zm9-1.25c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-7-1.25c0-2.757-2.243-5-5-5s-5,2.243-5,5v2.5c0,2.757,2.243,5,5,5,1.082,0,2.077-.354,2.896-.94l.397.397c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-.452-.452c.463-.758.745-1.639.745-2.591v-2.5Z"/></svg>

);
