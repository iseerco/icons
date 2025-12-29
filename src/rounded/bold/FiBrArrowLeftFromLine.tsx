import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowLeftFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,1.5V22.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm-6.5,9H4.25l3.33-3.46c.57-.6,.56-1.55-.04-2.12-.6-.58-1.55-.56-2.12,.04L1.03,9.52c-.66,.66-1.03,1.54-1.03,2.48s.36,1.81,1.01,2.45l4.41,4.59c.29,.31,.69,.46,1.08,.46s.75-.14,1.04-.42c.6-.57,.62-1.52,.04-2.12l-3.33-3.46h13.25c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"/></svg>

);
