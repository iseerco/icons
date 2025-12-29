import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWaveSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.499,22h-4.5c-1.378,0-2.5-1.122-2.5-2.5V4.5c0-.827-.673-1.5-1.5-1.5h-4.5c-.827,0-1.5.673-1.5,1.5v8.5H0v-1h3v-7.5c0-1.378,1.122-2.5,2.5-2.5h4.5c1.378,0,2.5,1.122,2.5,2.5v15c0,.827.673,1.5,1.5,1.5h4.5c.827,0,1.5-.673,1.5-1.5v-8.5h4v1h-3v7.5c0,1.378-1.122,2.5-2.5,2.5Z"/></svg>

);
