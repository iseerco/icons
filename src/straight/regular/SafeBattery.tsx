import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SafeBattery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 7.5c-.782 0-1.477.267-2 .718-.523-.451-1.218-.718-2-.718-1.654 0-3 1.417-3 3.16.228 3.133 3.803 5.36 5 6.257 1.193-.892 4.776-3.129 5-6.257 0-1.743-1.346-3.16-3-3.16zm-2 6.958c-1.395-1.087-3-2.746-3-3.797 0-.64.449-1.16 1-1.16.461 0 1 .252 1 .964v.536h2v-.536c0-.711.539-.964 1-.964.551 0 1 .521 1 1.16 0 1.048-1.605 2.708-3 3.797zm11-6.458v-1c0-1.654-1.346-3-3-3h-19v16h19c1.654 0 3-1.346 3-3v-1h2v-8zm-2 9c0 .551-.449 1-1 1h-17v-12h17c.551 0 1 .449 1 1z"/></svg>
);
