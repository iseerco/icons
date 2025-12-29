import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiaryBookmarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,7c.552,0,1-.448,1-1v-3c0-.552-.448-1-1-1h-1v-.5c0-.827-.673-1.5-1.5-1.5H4.5c-1.379,0-2.5,1.121-2.5,2.5v19c0,1.379,1.121,2.5,2.5,2.5h16c.827,0,1.5-.673,1.5-1.5v-3.538h1c.552,0,1-.448,1-1v-3c0-.552-.448-1-1-1h-1v-1h1c.552,0,1-.448,1-1v-3c0-.552-.448-1-1-1h-1v-.962h1Zm0-4v3h-1v-3h1ZM4.5,1h1.5v18h-1.5c-.565,0-1.081.195-1.5.512V2.5c0-.827.673-1.5,1.5-1.5Zm16.5,21.5c0,.275-.225.5-.5.5H4.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h16.5v2.5Zm2-7.538v3h-1v-3h1Zm0-6v3h-1v-3h1Zm-2,10.038H7V1h13.5c.275,0,.5.225.5.5v17.5Z"/>
</svg>

);
