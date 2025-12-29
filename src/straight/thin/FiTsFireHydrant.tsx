import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFireHydrant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,15c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm8,3v-4h-2v-3c0-2.608-1.672-4.831-4-5.657V0h-4v2.343c-2.328.825-4,3.049-4,5.657v3h-2v4h2v8h-2v1h16v-1h-2v-8h2Zm-1-3v2h-1v-2h1Zm-2,8H7v-11h10v11ZM11,1h2v1.084c-.325-.055-.659-.084-1-.084s-.675.029-1,.084v-1.084Zm1,2c2.757,0,5,2.243,5,5H7c0-2.757,2.243-5,5-5Zm-7,11v-2h1v2h-1Zm2,9v-2h10v2H7Z"/>
</svg>

);
