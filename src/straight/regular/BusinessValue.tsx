import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BusinessValue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 4h-3v-2c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v2h-3c-1.654 0-3 1.346-3 3v17h15.364l-1.713-2h-11.651v-8h9.75l1.5-2h-11.25v-5c0-.551.448-1 1-1h18c.552 0 1 .449 1 1v4h2v-4c0-1.654-1.346-3-3-3zm-13-2h8v2h-8zm13 10.999 3 4s-6 7.001-6 7.001l2.06-6h-4.121l2.06 6-5.998-7.001 3-4h2.126l-1.126 3h4l-1.126-3h2.126z"/></svg>
);
