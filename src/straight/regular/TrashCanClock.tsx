import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashCanClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,10c-3.859,0-7,3.141-7,7s3.141,7,7,7,7-3.141,7-7-3.141-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm1-5.414l1.707,1.707-1.414,1.414-2.293-2.293v-3.414h2v2.586Zm-8.482,5.414h-4.518c-.552,0-1-.448-1-1V6h12v2h2v-2h2v-2h-5v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H0v2h2v15c0,1.654,1.346,3,3,3h6.349c-.706-.571-1.325-1.244-1.831-2ZM7,2h6v2h-6v-2Zm-1,17v-10h2v10h-2Z"/>
</svg>

);
