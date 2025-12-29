import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.682,7.697L.439,10.939c-.585,.585-.585,1.536,0,2.121l3.243,3.243,.707-.707-3.096-3.097H11.5v10.242l-3.096-3.096-.707,.707,3.243,3.242c.292,.292,.676,.438,1.061,.438s.768-.146,1.061-.438l3.243-3.242-.707-.707-3.096,3.096V12.5h10.207l-3.096,3.097,.707,.707,3.243-3.243c.585-.585,.585-1.536,0-2.121l-3.243-3.243-.707,.707,3.096,3.096H12.5V1.293l3.096,3.096,.707-.707L13.061,.439c-.585-.585-1.536-.585-2.121,0l-3.243,3.243,.707,.707,3.096-3.096V11.5H1.293l3.096-3.096-.707-.707Z"/></svg>

);
