import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,9h7v1H0v-1Zm0,5h7v-1H0v1Zm9-4h6v-1h-6v1Zm0,4h6v-1h-6v1Zm8-4h7v-1h-7v1Zm0,4h7v-1h-7v1ZM0,18h7v-1H0v1Zm9,0h6v-1h-6v1Zm8,0h7v-1h-7v1ZM0,22h7v-1H0v1Zm9,0h6v-1h-6v1Zm8,0h7v-1h-7v1Zm-1.5-18.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5Zm-1,0c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5,1.121,2.5,2.5,2.5,2.5-1.122,2.5-2.5Zm-7.5,0c0,1.93-1.57,3.5-3.5,3.5S0,5.43,0,3.5,1.57,0,3.5,0s3.5,1.57,3.5,3.5Zm-1,0c0-1.378-1.121-2.5-2.5-2.5S1,2.122,1,3.5s1.121,2.5,2.5,2.5,2.5-1.122,2.5-2.5Zm11,0c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5Zm1,0c0,1.378,1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.122-2.5,2.5Z"/>
</svg>

);
