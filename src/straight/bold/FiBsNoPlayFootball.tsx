import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNoPlayFootball = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.5 14.989c.835 0 1.511.677 1.511 1.511s-.677 1.511-1.511 1.511-1.511-.677-1.511-1.511.677-1.511 1.511-1.511zm4.5 1.887-2-2v4.124h2zm-4.532-4.532-1.436-1.436-1.105.773 1.146 1.639 1.394-.976zm4.032-8.344c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm12.5 8c0 6.617-5.383 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zm-6.794 7.328-12.534-12.534c-1.049 1.472-1.672 3.266-1.672 5.206 0 4.962 4.038 9 9 9 1.941 0 3.735-.624 5.206-1.672zm3.794-7.328c0-4.962-4.038-9-9-9-1.941 0-3.735.624-5.206 1.672l3.328 3.328h7.879v2h-3.882l1.5 3h3.382v2h-1.879l2.206 2.206c1.049-1.472 1.672-3.266 1.672-5.206z"/></svg>
);
