import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShirtLongSleeve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6.136c0-2.116-1.119-4.032-2.922-5-1.403-.753-2.88-1.136-4.388-1.136H7.31c-1.509,0-2.985.382-4.388,1.136C1.12,2.104,0,4.02,0,6.136v14.864h4v3h16v-3.024h4V6.136ZM15.464,1c-.243,1.694-1.704,3-3.464,3s-3.221-1.306-3.464-3h6.928Zm7.536,18.976h-3V7h-1v16H5V7h-1v13H1V6.136c0-1.748.917-3.326,2.395-4.119,1.256-.674,2.573-1.017,3.915-1.017h.218c.25,2.247,2.16,4,4.472,4s4.223-1.753,4.472-4h.218c1.341,0,2.658.342,3.915,1.017,1.477.793,2.395,2.372,2.395,4.119v13.84Z"/>
</svg>

);
