import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartLineUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,22H24v2H3c-1.654,0-3-1.346-3-3V0H2V21c0,.551,.449,1,1,1ZM17,5v2h3.586l-5.586,5.586-4-4-6.707,6.707,1.414,1.414,5.293-5.293,4,4,7-7v3.586h2V5h-7Z"/></svg>

);
