import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TravelerCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 14h-8c-2.757 0-5 2.243-5 5v5h5v-4.5c0-.828.672-1.5 1.5-1.5h.5l.5-1h3l.5 1h.5c.828 0 1.499.672 1.499 1.5v4.5h5.001v-5c0-2.757-2.243-5-5-5zm-2.5 7c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-9.5-16v-2h2.47l.276-1.106c.278-1.113 1.278-1.894 2.425-1.894h5.657c1.147 0 2.147.781 2.425 1.894l.276 1.106h2.469v2zm13.91 2c-.478 2.833-2.942 5-5.91 5s-5.431-2.167-5.91-5h11.819z"/></svg>
);
