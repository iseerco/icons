import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.38,24,0,18.62,0,12S5.38,0,12,0s12,5.38,12,12-5.38,12-12,12Zm0-21C7.04,3,3,7.04,3,12s4.04,9,9,9,9-4.04,9-9S16.96,3,12,3Zm3.7,10.68c.38-.63,.4-1.42,.05-2.07-.37-.68-1.08-1.11-1.85-1.11h-2.31l2.24-4.31-2.66-1.39-3.08,5.96c-.19,.64-.07,1.34,.33,1.87,.4,.54,1.03,.85,1.7,.85h2.3l-2.24,4.31,2.66,1.39,2.87-5.51Z"/></svg>

);
