import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBracketCurlyRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.56,13.06l-1.83,1.83c-.47,.47-.73,1.11-.73,1.77v1.84c0,3.03-2.47,5.5-5.5,5.5-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5c1.38,0,2.5-1.12,2.5-2.5v-1.84c0-1.47,.57-2.85,1.61-3.89l.77-.77-.77-.77c-1.04-1.04-1.61-2.42-1.61-3.89v-1.84c0-1.38-1.12-2.5-2.5-2.5-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5c3.03,0,5.5,2.47,5.5,5.5v1.84c0,.66,.27,1.3,.73,1.77l1.83,1.83c.59,.59,.59,1.54,0,2.12Z"/></svg>

);
