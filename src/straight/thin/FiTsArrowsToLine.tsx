import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsToLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5v1H0v-1H24Zm-12-2.5c.446,0,.865-.174,1.18-.489l3.792-3.792-.707-.707-3.766,3.765V0h-1V7.777l-3.766-3.766-.707,.707,3.792,3.792c.315,.315,.735,.489,1.181,.489Zm-1.181,6.489l-3.792,3.792,.707,.707,3.766-3.766v7.777h1v-7.777l3.766,3.765,.707-.707-3.792-3.792c-.63-.631-1.73-.631-2.361,0Z"/></svg>

);
