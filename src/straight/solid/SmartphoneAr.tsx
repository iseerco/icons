import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmartphoneAr = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.514 5.34.986-.578v1.859l-1.508.878-1.492-.875v-1.861l.986.578c.316.186.712.186 1.028 0zm11.486 1.069v1.265l-4 2.471v-2.351l-7.973 4.925-8.027-4.958v2.351l-4-2.471v-1.103l4-2.567v-3.971h16v3.938zm-8.5-2.678-2.48-1.455c-.628-.367-1.41-.369-2.04 0l-2.48 1.455v4.038l2.48 1.455c.314.184.667.276 1.02.276s.706-.092 1.02-.277l2.48-1.455zm-11.5 14.269h16v3c0 1.654-1.346 3-3 3h-10c-1.654 0-3-1.346-3-3zm6 4h4v-2h-4zm-6-11.888v5.888h16v-5.855l-7.973 4.925z"/></svg>
);
