import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DollyFlatbedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,9h-13c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2h13c1.103,0,2-.897,2-2v-3c0-1.103-.897-2-2-2Zm-13-2h3c1.103,0,2-.897,2-2v-3c0-1.103-.897-2-2-2h-3c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2ZM22,1h-4c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h4c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm1,17h-15c-1.654,0-3-1.346-3-3V4C5,1.794,3.206,0,1,0,.448,0,0,.447,0,1s.448,1,1,1c1.103,0,2,.897,2,2v11c0,2.045,1.237,3.802,3,4.576v1.424c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h5v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1c.552,0,1-.447,1-1s-.448-1-1-1Z"/>
</svg>

);
