import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDashboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 1a11.945 11.945 0 0 0 -6.859 21.728l.387.272h12.944l.387-.272a11.945 11.945 0 0 0 -6.859-21.728zm5.5 19h-11a8.95 8.95 0 1 1 11 0zm-3.511-6.921a2 2 0 1 1 -2.182-2.06l3.6-3.605 2.121 2.121zm-4.283 3.193-1.725 2.456a6.986 6.986 0 0 1 5.2-12.62l-4.172 4.263a3.965 3.965 0 0 0 .7 5.9zm9.294-3.272a7.013 7.013 0 0 1 -2.981 5.728l-1.725-2.456c.316-.222 4.584-4.544 4.584-4.544a6.926 6.926 0 0 1 .122 1.272z"/></svg>
);
