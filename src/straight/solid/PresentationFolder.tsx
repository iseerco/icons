import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PresentationFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 6.5v1.5h-10v-2.5c0-.276.224-.5.5-.5h2.272l1.409 1h5.319c.276 0 .5.224.5.5zm7-6.5v2h-1v13c0 1.654-1.346 3-3 3h-7v2.277c.595.346 1 .984 1 1.723 0 1.105-.895 2-2 2s-2-.895-2-2c0-.738.405-1.376 1-1.723v-2.277h-7c-1.654 0-3-1.346-3-3v-13h-1v-2zm-5 6.5c0-1.378-1.122-2.5-2.5-2.5h-4.681l-1.409-1h-2.91c-1.378 0-2.5 1.122-2.5 2.5v9.5h14zm-12 6.5h10v-3h-10z"/></svg>
);
