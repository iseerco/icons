import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,13v-2h-1v2h-6.5V4.25c0-1.792,1.458-3.25,3.25-3.25s3.25,1.458,3.25,3.25v.75h1v-.75c0-2.343-1.906-4.25-4.25-4.25s-4.25,1.907-4.25,4.25v8.75h-6.5v-2h-1v2H0v3.5c0,4.136,3.364,7.5,7.5,7.5h9c4.136,0,7.5-3.364,7.5-7.5v-3.5h-4Zm3,3.5c0,3.584-2.916,6.5-6.5,6.5H7.5c-3.584,0-6.5-2.916-6.5-6.5v-2.5h22v2.5Z"/>
</svg>

);
