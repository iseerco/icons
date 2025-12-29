import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UkCountryCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 3h-18c-1.654 0-3 1.346-3 3v15h24v-15c0-1.654-1.346-3-3-3zm-9.9 10.7c0 1.269-1.031 2.3-2.3 2.3s-2.3-1.031-2.3-2.3v-5.7h1.6v5.7c0 .386.314.7.7.7s.7-.314.7-.7v-5.7h1.6zm6.4 2.3h-1.744l-1.172-3h-.484v3h-1.6v-8h1.6v3h.484l1.172-3h1.744l-1.5 4z"/></svg>
);
