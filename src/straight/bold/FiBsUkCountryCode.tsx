import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUkCountryCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 3h-17c-1.929 0-3.5 1.57-3.5 3.5v14.5h24v-14.5c0-1.93-1.57-3.5-3.5-3.5zm.5 15h-18v-11.5c0-.276.225-.5.5-.5h17c.275 0 .5.224.5.5zm-11.5-10h1.6v5.7c0 1.269-1.031 2.3-2.3 2.3s-2.3-1.031-2.3-2.3v-5.7h1.6v5.7c0 .386.314.7.7.7s.7-.314.7-.7zm8 0-1.5 4 1.5 4h-1.744l-1.172-3h-.484v3h-1.6v-8h1.6v3h.484l1.172-3z"/></svg>
);
