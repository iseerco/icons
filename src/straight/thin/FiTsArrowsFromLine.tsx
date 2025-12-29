import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5v1H0v-1H24ZM11.5,1.223v7.777h1V1.223l3.766,3.765,.707-.707L13.18,.489c-.63-.631-1.73-.631-2.361,0l-3.792,3.792,.707,.707,3.766-3.766Zm1,21.554v-7.777h-1v7.777l-3.766-3.766-.707,.707,3.792,3.792c.315,.315,.735,.489,1.181,.489s.865-.174,1.18-.489l3.792-3.792-.707-.707-3.766,3.765Z"/></svg>

);
