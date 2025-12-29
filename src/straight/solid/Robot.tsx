import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Robot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,10v-3c0-1.654-1.346-3-3-3h-6V1h-2v3h-6c-1.654,0-3,1.346-3,3v3H0v6h2v6h20v-6h2v-6h-2Zm-14,8h-3v-2h3v2Zm-.5-6c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm6.5,6h-4v-2h4v2Zm1-7.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm4,7.5h-3v-2h3v2Z"/>
</svg>

);
