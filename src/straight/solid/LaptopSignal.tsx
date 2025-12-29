import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopSignal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 9h-2v-9h2zm-4-7h-2v7h2zm-4 2h-2v5h2zm-7.009 17-.846-1h-8.145v1c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3v-1h-8.14l-.846 1zm3.009-10v-5h-10v12h7.082l.846 1h4.157l.846-1h7.068v-7h-10z"/></svg>
);
