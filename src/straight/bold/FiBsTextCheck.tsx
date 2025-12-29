import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTextCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="13 24.121 6.939 18.061 9.061 15.939 13 19.879 21.939 10.939 24.061 13.061 13 24.121"/><path d="M12.146,15H15.5L8,0,.5,15H3.854l1-2h6.292ZM6.354,10,8,6.708,9.646,10Z"/></svg>

);
