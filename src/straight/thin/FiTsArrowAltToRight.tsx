import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.39,10.645l-6.39-5.77v6.625H0v1H16v6.625l6.387-5.767c.39-.345,.613-.84,.613-1.358s-.223-1.011-.61-1.355Zm-.669,1.968l-4.721,4.263V7.125l4.721,4.263,.004,.003c.178,.157,.275,.374,.275,.609s-.098,.452-.279,.612Zm2.279-9.612V21h-1V3h1Z"/></svg>

);
