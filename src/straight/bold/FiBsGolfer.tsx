import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGolfer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.907 3.471c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm11.601-2.322c-.434-.96-1.578-1.405-2.544-.993l-2.324.986 1.172 2.762 1.348-.572 2.312 5.669h-1.755l-6.276-1.855c-.908-.315-1.912-.104-2.616.552s-.985 1.641-.712 2.646l1.656 5.05-4.769 8.606h3.492l4.424-8.009.084.253v7.757h3v-8.244l-1.53-4.589 2.812.832h5.717v-2.294z"/></svg>
);
