import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBracketsRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,12c0,6.98,4.77,11.08,4.82,11.12,.21,.18,.24,.49,.06,.7-.1,.12-.24,.18-.38,.18-.11,0-.23-.04-.32-.12-.21-.18-5.18-4.42-5.18-11.88S4.97,.29,5.18,.12c.21-.18,.53-.15,.7,.06,.18,.21,.15,.53-.06,.7-.05,.04-4.82,4.13-4.82,11.12ZM18.82,.12c-.21-.18-.53-.15-.7,.06-.18,.21-.15,.53,.06,.7,.05,.04,4.82,4.13,4.82,11.12s-4.77,11.08-4.82,11.12c-.21,.18-.24,.49-.06,.7,.1,.12,.24,.18,.38,.18,.11,0,.23-.04,.32-.12,.21-.18,5.18-4.42,5.18-11.88S19.03,.29,18.82,.12Z"/></svg>

);
