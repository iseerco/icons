import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGreaterThan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.501,24c-.594,0-1.156-.354-1.392-.938-.311-.768.061-1.643.829-1.952l19.155-7.735c.859-.348.927-1.14.927-1.375,0-.234-.067-1.026-.927-1.373L.938,2.891C.17,2.581-.201,1.707.109.938.418.17,1.292-.205,2.062.109l19.155,7.736c1.702.687,2.803,2.318,2.804,4.154,0,1.837-1.101,3.468-2.803,4.156L2.062,23.891c-.184.074-.374.109-.561.109Z"/>
</svg>

);
