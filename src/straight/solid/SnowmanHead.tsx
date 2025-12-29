import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SnowmanHead = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,8V3c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3v5H2v2H22v-2h-3Zm1.483,4H3.517c-.339,.958-.517,1.974-.517,3,0,4.963,4.038,9,9,9s9-4.037,9-9c0-1.026-.178-2.042-.517-3Zm-11.983,5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm3.5,5s-1.5-2.672-1.5-3.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-1.5,3.5-1.5,3.5Zm3.5-5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>

);
