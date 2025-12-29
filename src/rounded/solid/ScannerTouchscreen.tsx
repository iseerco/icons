import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScannerTouchscreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,6H4C1.794,6,0,7.794,0,10v10c0,2.206,1.794,4,4,4h8c2.206,0,4-1.794,4-4v-10c0-2.206-1.794-4-4-4Zm1,13c0,1.103-.897,2-2,2h-6c-1.103,0-2-.897-2-2v-8c0-1.103.897-2,2-2h6c1.103,0,2,.897,2,2v8Zm-2-8v8s-6,0-6,0v-8h6Zm-2.5-7c-.829,0-1.5-.671-1.5-1.5v-1c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v1c0,.829-.671,1.5-1.5,1.5Zm14,10c-.829,0-1.5-.671-1.5-1.5V1.5c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v11c0,.829-.671,1.5-1.5,1.5Zm-3.5,0c-.552,0-1-.448-1-1V1c0-.552.448-1,1-1s1,.448,1,1v12c0,.552-.448,1-1,1Zm-3-9c-.552,0-1-.448-1-1V1c0-.552.448-1,1-1s1,.448,1,1v3c0,.552-.448,1-1,1Zm-4-1c-.552,0-1-.448-1-1V1c0-.552.448-1,1-1s1,.448,1,1v2c0,.552-.448,1-1,1Z"/>
</svg>

);
