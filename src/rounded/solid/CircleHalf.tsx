import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.99,24c-.22,0-.44-.02-.65-.07C3.93,22.75,0,17.74,0,12S3.93,1.25,9.33,.07c.9-.2,1.83,.02,2.55,.6,.71,.57,1.12,1.42,1.12,2.33V21c0,.91-.41,1.76-1.12,2.33-.54,.44-1.21,.67-1.9,.67Z"/></svg>

);
