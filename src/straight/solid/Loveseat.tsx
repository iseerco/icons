import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Loveseat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,21h-7v2h-2v-2H0v-11h2c1.105,0,2,.895,2,2v5h5c1.103,0,2,.897,2,2v2Zm-5-9v3h3c1.201,0,2.266.542,3,1.382.734-.84,1.799-1.382,3-1.382h3v-3c0-2.209,1.791-4,4-4v-2c0-2.761-2.239-5-5-5H7c-2.761,0-5,2.239-5,5v2c2.209,0,4,1.791,4,4Zm16-2c-1.105,0-2,.895-2,2v5h-5c-1.103,0-2,.897-2,2v2h7v2h2v-2h2v-11h-2Z"/>
</svg>

);
