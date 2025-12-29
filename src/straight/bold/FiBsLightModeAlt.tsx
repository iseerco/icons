import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLightModeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 16c0 4.411-3.589 8-8 8h-8c-4.411 0-8-3.589-8-8 0-3.659 2.473-6.741 5.833-7.689.599 1.113 1.494 2.04 2.576 2.689h-.408c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c2.757 0 5-2.243 5-5s-2.243-5-5-5h-.408c1.081-.648 1.975-1.574 2.574-2.686 3.359.948 5.834 4.028 5.834 7.686zm-8 3c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm-7.891-10.705 1.443-.798c.4.392.898.675 1.448.84v1.663h2v-1.663c.55-.165 1.048-.449 1.448-.84l1.443.798.968-1.75-1.443-.798c.11-.479.11-1.015 0-1.494l1.443-.798-.968-1.75-1.443.798c-.4-.392-.898-.675-1.448-.84v-1.663h-2v1.663c-.55.165-1.048.448-1.448.84l-1.443-.798-.968 1.75 1.443.798c-.11.479-.11 1.015 0 1.494l-1.443.798z"/></svg>
);
