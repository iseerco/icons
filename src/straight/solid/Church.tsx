import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Church = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,19v5h-2v-5c0-.551.449-1,1-1s1,.449,1,1Zm-2-13.009l-4,2.909v15.1h2v-5c0-1.654,1.346-3,3-3s3,1.346,3,3v5h2v-15.1l-4-2.909v-1.991h2v-2h-2V0h-2v2h-2v2h2v1.991Zm8,4.364v13.646h5v-10.009l-5-3.636Zm-14,0L0,13.991v10.009h5v-13.646Z"/>
</svg>

);
