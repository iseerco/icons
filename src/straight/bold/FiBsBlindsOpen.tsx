import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBlindsOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,9H0v-3H17v3Zm0,3H0v3H17v-3Zm5,5.337V3.5c0-1.93-1.57-3.5-3.5-3.5H0V3H18.5c.275,0,.5,.224,.5,.5v13.837c-1.182,.562-2,1.767-2,3.163,0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5c0-1.396-.818-2.601-2-3.163ZM0,18v3H15.025c-.015-.165-.025-.331-.025-.5,0-.901,.221-1.749,.605-2.5H0Z"/></svg>

);
