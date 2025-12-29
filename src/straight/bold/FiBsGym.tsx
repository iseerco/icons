import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGym = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.975 7.268-2.061-2.061 2.147-2.146-2.122-2.122-2.146 2.147-2.061-2.061a3.505 3.505 0 0 0 -4.95 0l-3.182 3.182 4.535 4.536-4.407 4.407-4.521-4.521-3.182 3.182a3.5 3.5 0 0 0 0 4.949l2.047 2.047-2.133 2.132 2.122 2.122 2.132-2.133 2.075 2.072a3.5 3.5 0 0 0 4.95 0l3.182-3.179-4.55-4.55 4.408-4.407 4.535 4.536 3.182-3.182a3.5 3.5 0 0 0 0-4.95zm-12.875 13.614a.5.5 0 0 1 -.708 0l-6.246-6.243a.5.5 0 0 1 0-.707l1.061-1.061 6.95 6.95zm10.754-10.782-1.061 1.061-6.95-6.95 1.057-1.065a.5.5 0 0 1 .708 0l6.246 6.244a.5.5 0 0 1 0 .706z"/></svg>
);
