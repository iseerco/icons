import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGopuram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,16.762v-3.262c0-1.557-.795-2.93-2-3.738V1.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-3.5v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-3.5v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v8.262c-1.205.808-2,2.182-2,3.738v3.262c-1.205.808-2,2.182-2,3.738v2c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-2c0-.827.673-1.5,1.5-1.5h15c.827,0,1.5.673,1.5,1.5v2c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5v-2c0-1.557-.795-2.93-2-3.738Zm-10-3.762c-1.105,0-2,.895-2,2v1h-5v-2.5c0-.827.673-1.5,1.5-1.5h11c.827,0,1.5.673,1.5,1.5v2.5h-5v-1c0-1.105-.895-2-2-2Zm5-8v4h-3v-1c0-1.105-.895-2-2-2s-2,.895-2,2v1h-3v-4h10Zm-3,17v1c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-1c0-1.105.895-2,2-2s2,.895,2,2Z"/>
</svg>

);
