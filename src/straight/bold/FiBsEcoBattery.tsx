import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEcoBattery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 17c.347 0 .679-.058 1-.141v2.141h-2v-2.141c.321.083.653.141 1 .141zm0-10c-1.263 1.263-4 3.684-4 6 0 1.862 1.278 3.413 3 3.859v-4.859h2v4.859c1.722-.447 3-1.997 3-3.859 0-2.316-2.737-4.737-4-6zm8-1.5v18.5h-16v-18.5c0-1.93 1.57-3.5 3.5-3.5h.5v-2h8v2h.5c1.93 0 3.5 1.57 3.5 3.5zm-3 0c0-.276-.225-.5-.5-.5h-9c-.276 0-.5.224-.5.5v15.5h10z"/></svg>
);
