import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLessonClass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4.5,5c1.379,0,2.5-1.122,2.5-2.5S5.879,0,4.5,0s-2.5,1.122-2.5,2.5,1.121,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm1.5,8h1v15h-1v-7h-3v7h-1v-7H0v-8.5c0-1.378,1.121-2.5,2.5-2.5h12.5v1H2.5c-.827,0-1.5.673-1.5,1.5v7.5h5v-7ZM21.5,0h-13.26c.206.308.37.644.494,1h12.766c.827,0,1.5.673,1.5,1.5v11.5h-3v-2h-5v2h-6v1h15V2.5c0-1.378-1.121-2.5-2.5-2.5Zm-5.5,13h3v1h-3v-1Z"/>
</svg>

);
