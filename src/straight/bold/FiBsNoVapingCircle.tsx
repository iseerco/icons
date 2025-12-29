import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNoVapingCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.062 18h-5.062v-5.062zm10.938-6c0 6.617-5.383 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zm-12-9c-1.941 0-3.735.624-5.206 1.672l3.328 3.328h1.879v-2h1v-1h2v1h1v7.879l3.328 3.328c1.049-1.472 1.672-3.266 1.672-5.206 0-4.962-4.038-9-9-9zm0 18c1.941 0 3.735-.624 5.206-1.672l-12.534-12.534c-1.049 1.472-1.672 3.266-1.672 5.206 0 4.962 4.038 9 9 9z"/></svg>
);
