import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,19v3H0v-3h24Zm-.063-2H.063L12,1.546l11.937,15.454Zm-17.766-3h11.657l-5.829-7.546-5.829,7.546Z"/></svg>

);
