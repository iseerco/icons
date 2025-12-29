import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Telescope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.09,10.876l1.843-.777L19.716.099l-1.843.777.751,1.781L3.163,9.287l.969,2.298L-.015,13.333l.777,1.844,4.147-1.748.974,2.308,5.344-2.292-4.635,10.555h2.185l4.724-10.756,4.724,10.756h2.185l-5.356-12.196,6.292-2.698.746,1.77Z"/></svg>

);
