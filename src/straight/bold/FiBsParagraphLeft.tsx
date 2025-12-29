import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsParagraphLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,12h3v4h3V3h2v13h3V3h2V0h-13C5.691,0,3,2.691,3,6s2.691,6,6,6Zm0-9h3v6h-3c-1.654,0-3-1.346-3-3s1.346-3,3-3Zm14,18H5v3l-3.707-3.793c-.39-.39-.39-1.024,0-1.414l3.707-3.793v3h18v3Z"/></svg>

);
