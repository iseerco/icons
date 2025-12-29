import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ParagraphLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,12h4v4h2V2h2v14h2V2h2V0h-12C5.691,0,3,2.691,3,6s2.691,6,6,6Zm14,8H4l2.551,2.552-1.414,1.414-3.551-3.552c-.78-.779-.78-2.049,0-2.828l3.551-3.552,1.414,1.414-2.551,2.552h19v2Z"/></svg>

);
