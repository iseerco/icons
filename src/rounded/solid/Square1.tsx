import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-6,17c0,.552-.448,1-1,1s-1-.448-1-1v-7.586l-.737,.737c-.391,.391-1.023,.391-1.414,0s-.391-1.023,0-1.414l2.444-2.444c.286-.286,.714-.372,1.09-.217,.374,.155,.617,.52,.617,.924v10Z"/></svg>

);
