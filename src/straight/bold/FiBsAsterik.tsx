import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAsterik = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 24h-8v-4.663l-3.639 2.345-4.334-6.724 4.59-2.958-4.59-2.958 4.334-6.724 3.639 2.345v-4.663h8v4.663l3.639-2.345 4.334 6.724-4.59 2.958 4.59 2.958-4.334 6.724-3.639-2.345zm-5-3h2v-7.166l5.742 3.7 1.084-1.682-5.98-3.852 5.98-3.854-1.084-1.682-5.742 3.702v-7.166h-2v7.166l-5.742-3.7-1.084 1.68 5.98 3.854-5.98 3.854 1.084 1.682 5.742-3.702z"/></svg>
);
