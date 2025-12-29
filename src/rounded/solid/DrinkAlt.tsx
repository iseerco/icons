import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DrinkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.994,10H2.362L2.056,7.556A3.021,3.021,0,0,1,5,4h7.66Zm1,9.11a1,1,0,1,1-1.988-.22L11.772,12H2.613l.955,7.622A5.008,5.008,0,0,0,8.529,24H15.47a5.01,5.01,0,0,0,4.962-4.379L21.384,12h-7.6ZM21.634,10l.293-2.347A3,3,0,0,0,19,4H14.673l-.666,6ZM14.8,2.89A1,1,0,0,1,15.79,2H20a1,1,0,0,0,0-2H15.79a3,3,0,0,0-2.981,2.669L12.661,4h2.012Z"/></svg>

);
