import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScalpel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.828,2.172c-1.559-1.561-4.096-1.56-5.656,0L0,19.326v3.646s3.56.027,3.56.027c3.999-.159,7.436-1.564,9.937-4.066l.328-.328.409-2.181,8.595-8.596c1.56-1.56,1.56-4.097,0-5.656Zm-11.778,14.95c-2.374,2.171-5.328,2.769-7.475,2.873l6.18-6.173,1.629,1.521-.334,1.778Zm9.657-11.415l-7.362,7.362-1.467-1.368,7.415-7.408c.391-.389,1.023-.389,1.414,0,.39.39.39,1.024,0,1.414Z"/></svg>

);
