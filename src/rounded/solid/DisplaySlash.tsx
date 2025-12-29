import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplaySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,20h-2v-1h1.74L.896,5.157c-.562.809-.896,1.786-.896,2.843v6c0,2.757,2.243,5,5,5h6v1h-3c-.552,0-1,.448-1,1s.448,1,1,1h7c.552,0,1-.448,1-1s-.448-1-1-1Z"/>
  <path d="m24,14v-6c0-2.757-2.243-5-5-5H5c-.185,0-.366.02-.545.04L1.707.293C1.316-.098.684-.098.293.293S-.098,1.316.293,1.707l22,22c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-3.467-3.467c2.156-.555,3.76-2.499,3.76-4.826Z"/>
</svg>

);
