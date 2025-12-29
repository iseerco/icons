import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCareerPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,10h-3V0h3l4,2.5-4,2.5v5Zm-9,8v6H0v-6c0-1.105.895-2,2-2h1v-.5c0-.828.672-1.5,1.5-1.5h2c.828,0,1.5.672,1.5,1.5v.5h1c1.105,0,2,.895,2,2Zm-4,0h-3v2h3v-2Zm12.5-5h-5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h.5v-3h-.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h5c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5h-6.5v3h6.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Z"/>
</svg>

);
