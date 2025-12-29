import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ResponsiveDesign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2 22h8v2h-10v-21c0-1.654 1.346-3 3-3h12c1.654 0 3 1.346 3 3v2h-2v-2c0-.552-.449-1-1-1h-12c-.551 0-1 .448-1 1zm19-15h-6c-1.02 0-1.921.514-2.463 1.295l1.504 1.504c.096-.452.479-.798.959-.798h6c.551 0 1 .448 1 1v12h-8v-2h-2v4h12v-14.001c0-1.654-1.346-3-3-3zm-11-3h-4c-1.103 0-2 .897-2 2v4h2v-2.586l8.586 8.586h-2.586v2h4c1.103 0 2-.897 2-2v-4h-2v2.586l-8.586-8.586h2.586zm-3 16h3v-2h-3z"/></svg>
);
