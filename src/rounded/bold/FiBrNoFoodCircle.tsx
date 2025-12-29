import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrNoFoodCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.03 18h-4.174c-1.253 0-2.313-.928-2.478-2.171l-.687-5.168zm10.97-6c0 6.617-5.383 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zm-12-9c-1.941 0-3.735.624-5.206 1.672l2.991 2.991.114-.911c.125-.999.978-1.752 1.984-1.752h1.117c.552 0 1 .448 1 1s-.448 1-1 1h-1.117l-.125 1h.738c1.172 0 2.073 1.038 1.908 2.198l-.114.802h2.21c1.381 0 2.5 1.119 2.5 2.5v.5h-2.879l3.206 3.206c1.049-1.472 1.672-3.266 1.672-5.206 0-4.962-4.038-9-9-9zm0 18c1.941 0 3.735-.624 5.206-1.672l-12.534-12.534c-1.049 1.472-1.672 3.266-1.672 5.206 0 4.962 4.038 9 9 9z"/></svg>
);
