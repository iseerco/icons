import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1,13c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm3-5v8h4v-1h-3v-7h-1Zm18,1v-1h-4v8h4v-1h-3v-2.5h3v-1h-3v-2.5h3Zm-13-1v8h1v-8h-1Zm7.718,0h-.995l-1.723,6.18-1.743-6.18h-1.001l2.237,8h1.027l2.197-8Zm4.782-5H2.5c-1.378,0-2.5,1.122-2.5,2.5v3.684c.314-.112.647-.184,1-.184v-3.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v14.5H1v-5c-.353,0-.686-.072-1-.184v6.184h24V5.5c0-1.378-1.121-2.5-2.5-2.5Z"/>
</svg>

);
