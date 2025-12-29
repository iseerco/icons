import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDescriptionAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,13c0,1.657-1.343,3-3,3s-3-1.343-3-3,1.343-3,3-3,3,1.343,3,3Zm-3,5c-1.657,0-3,1.343-3,3s1.343,3,3,3,3-1.343,3-3-1.343-3-3-3ZM0,14.5h16v-3H0v3Zm0,8h16v-3H0v3ZM24,3.5v4.5H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5.224-.5.5v1.5h18v-1.5Z"/>
</svg>

);
