import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ObjectExclude = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,13v3h-3c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h6c2.76,0,5,2.24,5,5v3h-3c-2.76,0-5,2.24-5,5Zm11-5h-3v3c0,2.76-2.24,5-5,5h-3v3c0,2.76,2.24,5,5,5h6c2.76,0,5-2.24,5-5v-6c0-2.76-2.24-5-5-5Z"/></svg>

);
