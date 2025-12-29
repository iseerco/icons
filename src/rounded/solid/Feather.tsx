import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Feather = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.82 19.306c.054.044.116.074.171.117l-4.284 4.284a1 1 0 0 1 -1.414-1.414l4.285-4.285a7.841 7.841 0 0 0 1.242 1.298zm4.18-6.72 6.293-6.293a1 1 0 1 1 1.414 1.414l-3.293 3.293h7.186a30.726 30.726 0 0 0 2.28-6.075 3.992 3.992 0 0 0 -4.84-4.806 31.838 31.838 0 0 0 -9.04 3.988zm2.5.414c-.025 0-.047-.013-.072-.014l-6.437 6.437a7.446 7.446 0 0 0 4.598 1.577 8.184 8.184 0 0 0 5.9-2.545 28.716 28.716 0 0 0 4.044-5.455zm-4.5 1.5v-8.993a26.454 26.454 0 0 0 -2.744 2.362 7.757 7.757 0 0 0 -2.247 5.831 7.646 7.646 0 0 0 1.569 4.3l3.436-3.437c-.001-.016-.014-.038-.014-.063z"/></svg>
);
