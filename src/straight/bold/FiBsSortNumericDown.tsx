import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortNumericDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,5.1v4.9h3V0h-2.211l-3.861,3.951,2.145,2.098,.928-.949Zm5,10.9v1.5c0,3.706-3.01,6.5-7,6.5v-3c1.056,0,2.119-.339,2.883-1.002-2.152-.062-3.883-1.831-3.883-3.998,0-2.206,1.794-4,4-4s4,1.794,4,4Zm-4,1.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5Zm-5.982,1.018l-4.75,4.75c-.487,.487-1.127,.731-1.768,.731s-1.28-.244-1.768-.731L-.018,18.518l2.121-2.121,2.896,2.896V0h3V19.293l2.896-2.896,2.121,2.121Z"/></svg>

);
