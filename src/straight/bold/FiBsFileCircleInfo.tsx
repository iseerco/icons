import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileCircleInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,11c-3.59,0-6.5,2.91-6.5,6.5s2.91,6.5,6.5,6.5,6.5-2.91,6.5-6.5-2.91-6.5-6.5-6.5Zm1.5,10h-3v-4h3v4Zm0-5h-3v-3h3v3Zm-9.86,3c.19,1.09,.59,2.1,1.16,3H0V3.5C0,1.57,1.57,0,3.5,0H12.38l5.62,5.66v3.36c-.17,0-.33-.03-.5-.03-.87,0-1.71,.13-2.5,.38v-1.38h-5V3H3.5c-.28,0-.5,.22-.5,.5v15.5h6.14Z"/></svg>

);
