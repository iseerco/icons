import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleSmallRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M19.1,10.586,13.811,5.293,12.4,6.707,17.689,12,12.4,17.293l1.415,1.414L19.1,13.414A2,2,0,0,0,19.1,10.586Z"/><path d="M12.811,11.293l-6-6L5.4,6.707,10.689,12,5.4,17.293l1.415,1.414,6-6A1,1,0,0,0,12.811,11.293Z"/></g></svg>

);
