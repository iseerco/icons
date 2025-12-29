import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRainbow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,15v5.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-5.5c0-6.065-4.935-11-11-11S1,8.935,1,15v5.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-5.5C0,8.383,5.383,3,12,3s12,5.383,12,12ZM12,7c-4.411,0-8,3.589-8,8v5.5c0,.276.224.5.5.5s.5-.224.5-.5v-5.5c0-3.86,3.14-7,7-7s7,3.14,7,7v5.5c0,.276.224.5.5.5s.5-.224.5-.5v-5.5c0-4.411-3.589-8-8-8Zm0,4c-2.206,0-4,1.794-4,4v5.5c0,.276.224.5.5.5s.5-.224.5-.5v-5.5c0-1.654,1.346-3,3-3s3,1.346,3,3v5.5c0,.276.224.5.5.5s.5-.224.5-.5v-5.5c0-2.206-1.794-4-4-4Z"/>
</svg>

);
