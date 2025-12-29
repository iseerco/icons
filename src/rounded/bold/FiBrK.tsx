import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrK = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.845,12.917L21.756,2.319c.453-.694,.257-1.623-.437-2.076-.694-.454-1.624-.256-2.076,.437l-6.73,10.319H5V1.5c-.033-1.972-2.967-1.971-3,0V22.5c.034,1.972,2.967,1.971,3,0V14h6.878l7.445,9.43c.516,.654,1.461,.758,2.107,.248,.65-.514,.761-1.457,.248-2.107l-6.832-8.654Z"/></svg>

);
