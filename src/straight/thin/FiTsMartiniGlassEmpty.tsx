import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMartiniGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.068.039v.5C.068,2.008.691,3.418,1.778,4.407l9.79,8.899v9.733h-5.5v1h12v-1h-5.5v-9.733l9.789-8.899c1.087-.989,1.711-2.399,1.711-3.868V.039H.068Zm21.616,3.628l-9.616,8.742L2.451,3.667c-.755-.687-1.233-1.624-1.354-2.628h21.94c-.12,1.003-.599,1.941-1.354,2.628Z"/>
</svg>

);
