import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShelves = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,0c-1.654,0-3,1.346-3,3v4H3V0H0v24h3v-2h18v2h3V0h-7Zm0,3h4v4h-4V3ZM3,15h4v4H3v-4Zm11,4h-4v-4h4v4Zm3,0v-4c0-1.654-1.346-3-3-3h-4c-.549,0-1.057.159-1.5.417-.443-.258-.951-.417-1.5-.417H3v-2h18v9h-4Z"/>
</svg>

);
