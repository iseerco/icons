import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cloud = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.303 10.071c-.089-4.032-3.337-7.284-7.316-7.284-4.035 0-7.317 3.344-7.317 7.454 0 .27.014.54.042.807-2.151.612-3.712 2.622-3.712 4.986 0 2.855 2.283 5.178 5.09 5.178h11.264c3.113 0 5.646-2.578 5.646-5.747 0-2.428-1.512-4.575-3.697-5.395z" opacity=".5"/></svg>
);
