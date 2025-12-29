import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCaretSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,19.135V4.865l6.487,5.937c.337,.302,.533,.74,.533,1.199s-.196,.897-.538,1.203l-6.482,5.933Zm1-12v9.729l4.812-4.403c.137-.122,.209-.285,.209-.461s-.072-.339-.204-.458l-4.816-4.407Zm13,16.865H0V2.5C0,1.122,1.121,0,2.5,0H21.5c1.379,0,2.5,1.122,2.5,2.5V24ZM1,23H23V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23Z"/></svg>

);
