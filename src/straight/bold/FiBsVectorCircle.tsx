import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVectorCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9h-1.416c-1.038-3.658-3.926-6.546-7.584-7.584V0h-6v1.416c-3.658,1.038-6.546,3.926-7.584,7.584H0v6h1.416c1.038,3.658,3.926,6.546,7.584,7.584v1.416h6v-1.416c3.658-1.038,6.546-3.926,7.584-7.584h1.416v-6Zm-9,10.416v-1.416h-6v1.416c-2.002-.813-3.603-2.414-4.416-4.416h1.416v-6h-1.416c.813-2.002,2.414-3.603,4.416-4.416v1.416h6v-1.416c2.002.813,3.603,2.414,4.416,4.416h-1.416v6h1.416c-.813,2.002-2.414,3.603-4.416,4.416Z"/>
</svg>

);
