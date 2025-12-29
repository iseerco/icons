import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleQuarter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,13H3.04c-.93,0-1.8-.42-2.38-1.15-.58-.73-.8-1.68-.59-2.6H.08C1.12,4.72,4.72,1.12,9.26,.08c.92-.21,1.86,0,2.6,.59,.73,.58,1.15,1.45,1.15,2.38V12c0,.55-.45,1-1,1Z"/></svg>

);
