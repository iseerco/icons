import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleDoubleSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,13.033c-.445,0-.864-.173-1.178-.488L4.951,6.674l2.121-2.121,4.928,4.928,4.928-4.928,2.121,2.121-5.87,5.871c-.315,.315-.733,.488-1.179,.488Zm1.725,6.278l5.345-5.344-2.121-2.121-4.991,4.991-4.896-4.896-2.121,2.121,5.25,5.25c.472,.472,1.1,.732,1.768,.732s1.296-.26,1.768-.732Z"/></svg>

);
