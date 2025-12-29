import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.5 16c-3.908 0-7.201 3.042-7.497 6.924-.021.278.074.552.264.756s.455.32.733.32h13c.278 0 .544-.116.733-.32s.285-.478.264-.756c-.296-3.882-3.589-6.924-7.497-6.924zm0-2c3.032 0 5.5-2.467 5.5-5.5s-2.468-5.5-5.5-5.5-5.5 2.467-5.5 5.5 2.468 5.5 5.5 5.5zm16.5-9c0 .552-.447 1-1 1h-4.816l1.523 1.523c.391.391.391 1.023 0 1.414s-1.023.391-1.414 0l-2.862-2.862c-.277-.278-.431-.647-.431-1.04s.153-.762.431-1.04l2.862-2.862c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-1.452 1.452h4.745c.553 0 1 .448 1 1z"/></svg>
);
