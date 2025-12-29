import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSortAmountDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,14v1H10v-1h14Zm-3-3H10v-1h11v1Zm-3-4H10v-1h8v1Zm-3-4h-5v-1h5v1Zm-4.896,15.604l-4.104,4.104V0h-1V22.707L.896,18.604l-.707,.707,4.25,4.25c.292,.292,.677,.438,1.061,.438s.769-.146,1.061-.438l4.25-4.25-.707-.707Z"/></svg>

);
