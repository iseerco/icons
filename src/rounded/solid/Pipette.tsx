import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pipette = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.678 7.393c-.916.916-.707 2.838.025 4.167a2.489 2.489 0 0 1 -3.961 2.924l-7.226-7.226a2.489 2.489 0 0 1 2.924-3.958c1.329.731 3.251.941 4.167.025l2.479-2.482a2.947 2.947 0 0 1 4.071 0 2.88 2.88 0 0 1 0 4.075zm-18.709 9.954a3.307 3.307 0 0 0 -.585 3.853l-1.091 1.093a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l1.093-1.091a3.264 3.264 0 0 0 3.855-.586l7.4-7.4-4.682-4.686z"/></svg>
);
