import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRainbow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21h-1v-6c0-6.065-4.935-11-11-11S1,8.935,1,15v6H0v-6C0,8.383,5.383,3,12,3s12,5.383,12,12v6Zm-4-6c0-4.411-3.589-8-8-8s-8,3.589-8,8v6h1v-6c0-3.86,3.14-7,7-7s7,3.14,7,7v6h1v-6Zm-4,0c0-2.206-1.794-4-4-4s-4,1.794-4,4v6h1v-6c0-1.654,1.346-3,3-3s3,1.346,3,3v6h1v-6Z"/>
</svg>

);
