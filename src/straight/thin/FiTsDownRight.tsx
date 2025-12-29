import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDownRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,23H6.81l4.86-4.96L.96,7.33,7.33,.96l10.71,10.71,4.96-4.86v13.68c0,.67-.25,1.3-.73,1.77-.47,.47-1.1,.73-1.77,.73Zm-11.31-1h11.31c.4,0,.78-.16,1.06-.44,.28-.29,.44-.66,.44-1.07V9.19s-3.98,3.89-3.98,3.89L7.33,2.38,2.38,7.33l10.7,10.7-3.89,3.97Z"/></svg>

);
