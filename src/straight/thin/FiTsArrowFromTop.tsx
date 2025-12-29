import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.02,1V0H5.019V1h6.5V22.707l-5.646-5.646-.707,.707,5.793,5.793c.276,.275,.642,.432,1.032,.439h.029c.401,0,.776-.155,1.061-.439l5.793-5.793-.707-.707-5.647,5.647V1h6.5Z"/></svg>

);
