import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSlidersV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.5,7.5c0,1.396-.818,2.601-2,3.163v13.337h-3v-13.337c-1.182-.562-2-1.767-2-3.163s.818-2.601,2-3.163V0h3v4.337c1.182.562,2,1.767,2,3.163Zm6,5.837V0h-3v13.337c-1.182.562-2,1.767-2,3.163s.818,2.601,2,3.163v4.337h3v-4.337c1.182-.562,2-1.767,2-3.163s-.818-2.601-2-3.163Zm10-5.837c0-1.396-.818-2.601-2-3.163V0h-3v4.337c-1.182.562-2,1.767-2,3.163s.818,2.601,2,3.163v13.337h3v-13.337c1.182-.562,2-1.767,2-3.163Z"/></svg>

);
