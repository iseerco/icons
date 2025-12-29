import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmileyCommentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H4C1.79,0,0,1.79,0,4v12c0,2.21,1.79,4,4,4h2.92l3.75,3.16c.38,.34,.86,.51,1.34,.51s.93-.16,1.29-.49l3.85-3.18h2.85c2.21,0,4-1.79,4-4V4c0-2.21-1.79-4-4-4Zm-4.5,6c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm-7,0c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm9.17,6.75c-.1,.09-2.56,2.25-5.67,2.25s-5.56-2.16-5.67-2.25c-.41-.37-.45-1-.08-1.41,.37-.41,1-.45,1.41-.08,.02,.02,2,1.75,4.33,1.75s4.32-1.73,4.34-1.75c.41-.37,1.05-.33,1.41,.08,.37,.41,.33,1.04-.08,1.41Z"/></svg>

);
