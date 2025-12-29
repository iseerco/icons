import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWorkflowSettingAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,18h6v6h-6v-6ZM0,24h6v-6H0v6Zm18-6v6h6v-6h-6Zm-13.5-1H1.5v-5h9v-1.757c-.527-.187-1.009-.469-1.425-.826l-1.525.878-1.498-2.6,1.523-.877c-.049-.265-.075-.539-.075-.818s.026-.553.075-.818l-1.523-.877,1.498-2.6,1.525.878c.416-.357.898-.639,1.425-.826V0h3v1.757c.527.187,1.009.469,1.425.826l1.525-.878,1.498,2.6-1.523.877c.049.265.075.539.075.818s-.026.553-.075.818l1.523.877-1.498,2.6-1.525-.878c-.416.357-.898.639-1.425.826v1.757h9v5h-3v-2h-6v2h-3v-2h-6v2Zm6-11c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5,1.5Z"/>
</svg>

);
