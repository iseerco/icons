import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowsRepeat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,11H0C0,6.589,3.589,3,8,3h12V0l3.707,3.793c.39,.391,.39,1.024,0,1.414l-3.707,3.793v-3H8c-2.757,0-5,2.243-5,5Zm13,7H4v-3L.293,18.793c-.39,.391-.39,1.024,0,1.414l3.707,3.793v-3h12c4.411,0,8-3.589,8-8h-3c0,2.757-2.243,5-5,5Z"/></svg>

);
