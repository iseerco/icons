import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileBinary = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.41,5h-4.41V.59l4.41,4.41ZM9.5,13c-.83,0-1.5,.67-1.5,1.5v2c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5Zm12.5-6V24H2V3C2,1.34,3.34,0,5,0H15V7h7Zm-9,7.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v2c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-2Zm5,5.5V11h-1.51l-2.51,2.57,1.43,1.4,.59-.61v5.63h2Z"/></svg>

);
