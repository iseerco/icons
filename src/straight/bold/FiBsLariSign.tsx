import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLariSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,21h11v3H1v-3h3.46c-2.13-2.01-3.46-4.85-3.46-8C1,8.35,3.91,4.36,8,2.75V0h3V2.05c.33-.03,.66-.05,1-.05s.67,.02,1,.05V0h3V2.75c4.09,1.6,7,5.59,7,10.25h-3c0-2.95-1.61-5.54-4-6.93v5.93h-3V5.06c-.33-.04-.66-.06-1-.06s-.67,.02-1,.06v6.94h-3V6.07c-2.39,1.39-4,3.97-4,6.93,0,4.41,3.59,8,8,8Z"/></svg>

);
