import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,3c0,1.657-1.343,3-3,3s-3-1.343-3-3S2.343,0,4,0s3,1.343,3,3ZM12,0c-1.657,0-3,1.343-3,3s1.343,3,3,3,3-1.343,3-3-1.343-3-3-3Zm8,6c1.657,0,3-1.343,3-3s-1.343-3-3-3-3,1.343-3,3,1.343,3,3,3ZM1,11h6v-3H1v3Zm0,6h6v-3H1v3Zm8-6h6v-3h-6v3Zm0,6h6v-3h-6v3Zm8-6h6v-3h-6v3Zm0,6h6v-3h-6v3ZM1,23h6v-3H1v3Zm8,0h6v-3h-6v3Zm8,0h6v-3h-6v3Z"/>
</svg>

);
