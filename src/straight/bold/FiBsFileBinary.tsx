import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileBinary = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.38,0H5c-1.65,0-3,1.35-3,3V24H22V5.66L16.38,0ZM5,21V3H14v5h5v13H5Zm5-10c-1.65,0-3,1.35-3,3v2c0,1.65,1.35,3,3,3s3-1.35,3-3v-2c0-1.65-1.35-3-3-3Zm1,5c0,.55-.45,1-1,1s-1-.45-1-1v-2c0-.55,.45-1,1-1s1,.45,1,1v2Zm6-5v8h-2v-5l-1.24-1.17,1.72-1.83h1.52Z"/></svg>

);
