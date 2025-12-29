import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Witness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5 9c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm7.5 9h-15c-.552 0-1 .448-1 1s.448 1 1 1v3c0 .552.448 1 1 1h13c.553 0 1-.448 1-1v-3c.553 0 1-.448 1-1s-.447-1-1-1zm.365-8.003c-.735.01-1.376-.639-1.364-1.375v-6.12c-.001-1.381 1.118-2.5 2.498-2.5h4c1.381-.001 2.501 1.118 2.501 2.499v2.999c0 1.381-1.119 2.5-2.5 2.5h-2.147l-2.127 1.711c-.274.192-.571.286-.86.286zm-1.547 6.003c-.68-2.862-3.251-5-6.318-5s-5.638 2.138-6.318 5h12.637z"/></svg>
);
