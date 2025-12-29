import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.268 10.082c-2.205-3.396-5.018-6.255-8.359-8.5-1.16-.778-2.656-.778-3.816 0-3.343 2.245-6.156 5.105-8.361 8.5-.757 1.165-.757 2.671 0 3.836 2.205 3.396 5.018 6.255 8.359 8.5.58.389 1.244.584 1.908.584s1.328-.195 1.908-.584c3.342-2.245 6.154-5.104 8.359-8.5.757-1.165.757-2.671 0-3.836z" opacity=".5"/></svg>
);
