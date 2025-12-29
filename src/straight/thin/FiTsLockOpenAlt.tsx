import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLockOpenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,18h-1v-3h1v3Zm15-12.5v.5h-1v-.5c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v3.5h3v12.5c0,1.379-1.122,2.5-2.5,2.5H2.5c-1.378,0-2.5-1.121-2.5-2.5v-12.5h13v-3.5c0-3.032,2.467-5.5,5.5-5.5s5.5,2.468,5.5,5.5Zm-8,4.5H1v11.5c0,.827.673,1.5,1.5,1.5h12c.827,0,1.5-.673,1.5-1.5v-11.5Z"/>
</svg>

);
