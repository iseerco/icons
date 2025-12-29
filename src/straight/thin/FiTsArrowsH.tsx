import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.719,7.027l-.707,.707,3.765,3.766H1.223l3.765-3.766-.707-.707L.489,10.82c-.315,.315-.489,.734-.489,1.18s.174,.865,.489,1.181l3.792,3.792,.707-.707-3.766-3.766H22.777l-3.766,3.766,.707,.707,3.792-3.792c.315-.315,.489-.735,.489-1.181s-.174-.865-.489-1.18l-3.792-3.792Z"/></svg>

);
