import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseKey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.001,10c-2.761,0-5,2.239-5,5,0,.572,.116,1.112,.293,1.624l-.315,.304v2.072h-2v2h-1.978v3h2.604l4.412-4.413c.609,.264,1.278,.413,1.983,.413,2.761,0,5-2.239,5-5s-2.239-5-5-5h0Zm1,2.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm-12,11.5H0V10.043c0-.929,.42-1.791,1.151-2.363L10.151,.637c1.05-.821,2.647-.821,3.697,0l9,7.043c.731,.572,1.151,1.434,1.151,2.363v.067c-1.271-1.3-3.041-2.11-4.999-2.11-3.86,0-7,3.14-7,7,0,.328-.022,2-.022,2h-2v2h-1.978v5Z"/>
</svg>

);
