import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiaryBookmarkDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H5C2.794,0,1,1.794,1,4v16c0,2.206,1.794,4,4,4v-3c-.552,0-1-.448-1-1s.448-1,1-1h2v5l2.5-2.5,2.5,2.5v-5h8v2h-6v3h9V2.5c0-1.379-1.121-2.5-2.5-2.5ZM4,16.126V4c0-.552.448-1,1-1h2v13h-2c-.345,0-.68.044-1,.126Zm6-.126V3h10v13h-10Z"/>
</svg>

);
