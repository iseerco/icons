import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketCurlyRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,24h-1c-.55,0-1-.45-1-1s.45-1,1-1h1c1.65,0,3-1.35,3-3v-2.34c0-1.34,.52-2.59,1.46-3.54l1.12-1.12-1.12-1.12c-.94-.94-1.46-2.2-1.46-3.54v-2.34c0-1.65-1.35-3-3-3h-1c-.55,0-1-.45-1-1s.45-1,1-1h1c2.76,0,5,2.24,5,5v2.34c0,.79,.32,1.56,.88,2.12l1.83,1.83c.39,.39,.39,1.02,0,1.41l-1.83,1.83c-.56,.56-.88,1.33-.88,2.12v2.34c0,2.76-2.24,5-5,5Z"/></svg>

);
