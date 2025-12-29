import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Vihara = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,14H4c-.298,1.353-1.799,4-4,4v2h24v-2c-2.208,0-3.665-2.547-4-4Zm-13,10H2v-2h5v2Zm2-2h6v2h-6v-2Zm8,0h5v2h-5v-2Zm3-10H4v-2h16v2Zm-1.831-9.214l-.169-.768V0h-2v2h-8s0-2,0-2h-2v2.016l-.169.77c-.011.052-1.221,3.214-3.831,3.214v2h20v-2c-2.61,0-3.819-3.162-3.831-3.214Z"/>
</svg>

);
