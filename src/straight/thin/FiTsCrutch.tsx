import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCrutch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.937,9.063L14.937.063l-.707.707,1.318,1.318-5.681,5.681c-1.849,1.848-2.867,4.307-2.867,6.922v1.602L.035,23.258l.707.707,6.965-6.965h1.603c2.615,0,5.073-1.018,6.922-2.867l5.68-5.68,1.318,1.318.707-.707Zm-15.937,6.937v-1.309c0-2.181.789-4.239,2.231-5.851l4.93,4.929c-1.612,1.442-3.671,2.231-5.851,2.231h-1.31Zm7.878-2.928l-4.95-4.95,5.327-5.327,4.95,4.95-5.327,5.327Z"/></svg>

);
