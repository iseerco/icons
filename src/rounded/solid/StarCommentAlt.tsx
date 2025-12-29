import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarCommentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H4C1.79,0,0,1.79,0,4v12c0,2.21,1.79,4,4,4h2.92l3.75,3.16c.38,.34,.86,.51,1.34,.51s.93-.16,1.29-.49l3.85-3.18h2.85c2.21,0,4-1.79,4-4V4c0-2.21-1.79-4-4-4Zm-2.83,9.62l-2.17,1.77,.9,2.73c.12,.37,0,.78-.31,1.01-.31,.24-.73,.25-1.06,.04l-2.52-1.64-2.48,1.66c-.15,.1-.33,.15-.51,.15-.19,0-.39-.06-.55-.18-.31-.23-.44-.64-.32-1.01l.86-2.76-2.18-1.77c-.29-.25-.4-.65-.27-1.01,.13-.36,.48-.6,.86-.6h2.75l.97-2.61c.13-.36,.48-.6,.86-.6s.73,.24,.86,.6l.97,2.61h2.75c.38,0,.73,.24,.86,.6,.13,.36,.02,.77-.27,1.02Z"/></svg>

);
