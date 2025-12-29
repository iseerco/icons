import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiaryBookmarkDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H4.5c-1.379,0-2.5,1.121-2.5,2.5v19c0,1.379,1.121,2.5,2.5,2.5h.5v-1h-.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h2.5v4l2.5-2.5,2.5,2.5v-4h9v2.5c0,.275-.225.5-.5.5h-6.5v1h6.5c.827,0,1.5-.673,1.5-1.5V1.5c0-.827-.673-1.5-1.5-1.5ZM3,19.501V2.5c0-.827.673-1.5,1.5-1.5h1.5v18h-1.5c-.562,0-1.082.187-1.5.501Zm18-.501H7V1h13.5c.275,0,.5.225.5.5v17.5Z"/>
</svg>

);
