import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileVideo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,7V.46c.913,.346,1.753,.879,2.465,1.59l3.484,3.486c.712,.711,1.245,1.551,1.591,2.464h-6.54c-.552,0-1-.449-1-1Zm-6,11h5v-4h-5v4Zm14-7.515v8.515c0,2.757-2.243,5-5,5H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h4.515c.163,0,.324,.013,.485,.024V7c0,1.654,1.346,3,3,3h6.976c.011,.161,.024,.322,.024,.485Zm-4,3.545c0-.837-.955-1.314-1.625-.812l-1.375,1.031v-1.25c0-.552-.448-1-1-1H7c-.552,0-1,.448-1,1v6c0,.552,.448,1,1,1h7c.552,0,1-.448,1-1v-1.25l1.375,1.031c.669,.502,1.625,.024,1.625-.812v-3.938Z"/></svg>

);
