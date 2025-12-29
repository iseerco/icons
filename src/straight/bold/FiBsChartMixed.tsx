import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,11.62L-.06,6.56l2.12-2.12,2.94,2.94L12,.38l5,5L21.94,.44l2.12,2.12-7.06,7.06-5-5-7,7Zm3,3.38h-3v9h3V15Zm-5-2H0v11H3V13Zm10-4h-3v15h3V9Zm5,3h-3v12h3V12Zm5-3h-3v15h3V9Z"/></svg>

);
