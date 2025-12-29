import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlobeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 19.939v2.061h4v2h-10v-2h4v-2.051a11.993 11.993 0 0 1 -7.9-20l1.485 1.34a10 10 0 1 0 15.671 12.354l1.651 1.13a11.992 11.992 0 0 1 -8.907 5.166zm-9-11.939a8 8 0 1 1 8 8 8.009 8.009 0 0 1 -8-8zm2 0a6 6 0 1 0 6-6 6.006 6.006 0 0 0 -6 6z"/></svg>
);
