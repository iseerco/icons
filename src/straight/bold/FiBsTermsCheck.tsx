import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTermsCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.144,21l2.754,3H0V3.5C0,1.57,1.57,0,3.5,0H14.5C16.429,0,18,1.57,18,3.5V15.735s-2.184,2.184-2.184,2.184l-.815-.889V3.5c0-.276-.225-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21h6.144ZM13,5H5v3H13v-3Zm0,5H5v3H13v-3ZM5,18h4v-3H5v3Zm16.889-3.326l-6.137,6.136-2.992-3.262-2.211,2.027,3.368,3.67c.502,.502,1.162,.753,1.821,.753s1.319-.251,1.821-.753l6.45-6.45-2.121-2.121Z"/>
</svg>

);
