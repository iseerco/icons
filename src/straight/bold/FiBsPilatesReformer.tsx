import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPilatesReformer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 2v2.371l-6.48 4.629h-6.52v2h-.858l-2.308-3.626c.102-.273.166-.565.166-.874 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.312 1.014 2.376 2.3 2.48l1.286 2.02h-3.586v11h3v-3h18v3h3v-20zm0 6.058v2.942h-4.119zm-18 7.942v-2h18v2z"/></svg>
);
