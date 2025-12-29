import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsOvalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,24c-4.411,0-8-5.383-8-12S7.589,0,12,0s8,5.383,8,12-3.589,12-8,12Zm0-23c-3.86,0-7,4.935-7,11s3.14,11,7,11,7-4.935,7-11S15.86,1,12,1Z"/>
</svg>

);
