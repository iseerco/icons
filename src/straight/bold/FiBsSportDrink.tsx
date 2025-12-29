import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSportDrink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 8.5c0-1.758-1.308-3.204-3-3.449v-2.051h-3.5v-3h-3v3h-3.5v2.051c-1.692.245-3 1.691-3 3.449v3c0 .744.238 1.432.635 2-.398.568-.635 1.256-.635 2v8.5h16v-8.5c0-.744-.238-1.432-.635-2 .398-.568.635-1.256.635-2zm-3 12.5h-10v-5.5c0-.275.224-.5.5-.5h5.5v-3h-5.5c-.276 0-.5-.225-.5-.5v-3c0-.275.224-.5.5-.5h9c.276 0 .5.225.5.5v3c0 .275-.224.5-.5.5h-1.5v3h1.5c.276 0 .5.225.5.5z"/></svg>
);
