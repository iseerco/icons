import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMemberSearch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-11c2.757,0,5,2.243,5,5s-2.243,5-5,5-5-2.243-5-5S6.243,1,9,1Zm14.605,21.898l-3.605-3.605c.616-.77,1-1.733,1-2.793,0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5c1.06,0,2.023-.384,2.793-1l3.605,3.605,.707-.707Zm-7.105-2.898c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Zm-6-6c-.134,.321-.237,.656-.319,1H4.5c-1.93,0-3.5,1.57-3.5,3.5v5.5H0v-5.5c0-2.481,2.019-4.5,4.5-4.5h6Z"/>
</svg>

);
