import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSortAmountDownAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.104,18.604l-4.104,4.104V0h-1V22.707L.896,18.604l-.707,.707,4.25,4.25c.292,.292,.677,.438,1.061,.438s.769-.146,1.061-.438l4.25-4.25-.707-.707ZM24,2v1H10v-1h14ZM10,6h11v1H10v-1Zm0,4h8v1H10v-1Zm0,4h5v1h-5v-1Z"/></svg>

);
