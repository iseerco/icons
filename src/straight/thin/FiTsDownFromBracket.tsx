import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDownFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,4H7V13H.326l9.833,10.23,.006,.006c.489,.492,1.141,.763,1.835,.764h.001c.694,0,1.346-.271,1.842-.769l9.83-10.231h-6.674V4Zm4.326,10l-8.197,8.532c-.301,.302-.702,.468-1.128,.468h0c-.425,0-.823-.166-1.124-.466L2.674,14h5.326V5h8V14h5.326Zm2.674-11.5v6.5h-1V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5v6.5H0V2.5C0,1.122,1.122,0,2.5,0H21.5c1.378,0,2.5,1.122,2.5,2.5Z"/>
</svg>

);
