import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.11,9.851L14.149.891c-1.147-1.148-3.151-1.148-4.299,0L.89,9.851c-1.185,1.186-1.185,3.113,0,4.299l8.96,8.96c.574.574,1.337.891,2.149.891s1.576-.316,2.149-.891l8.96-8.96c1.185-1.186,1.185-3.113,0-4.299Zm-.707,3.592l-8.96,8.96c-.771.771-2.114.771-2.885,0L1.597,13.442c-.795-.795-.795-2.09,0-2.885L10.558,1.598c.771-.771,2.114-.771,2.885,0l8.96,8.96c.795.795.795,2.09,0,2.885Z"/>
</svg>

);
