import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowUpSquareTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,1H14V10h9V1Zm-1,8h-7V2h7v7Zm-3.5,4.451l-5.177,9.549h10.354l-5.177-9.549Zm0,2.099l3.497,6.451h-6.994l3.497-6.451ZM7.595,.439l4.717,4.717-.707,.707L6.987,1.246V23.981h-1V1.247L1.37,5.864l-.707-.707L5.38,.439c.591-.592,1.623-.592,2.214,0Z"/></svg>

);
