import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SettingsSliders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 6.091h-12c-.552 0-1-.448-1-1s.448-1 1-1h12c.552 0 1 .448 1 1s-.448 1-1 1z" opacity=".5"/><path d="m4.542 6.091h-2.542c-.552 0-1-.448-1-1s.448-1 1-1h2.542c.552 0 1 .448 1 1s-.448 1-1 1z" opacity=".5"/><path d="m7.292 1.522c-2.339 0-3.525 1.201-3.525 3.568s1.186 3.568 3.525 3.568 3.525-1.201 3.525-3.568-1.186-3.568-3.525-3.568z"/><path d="m13.958 13h-11.958c-.552 0-1-.448-1-1s.448-1 1-1h11.958c.552 0 1 .448 1 1s-.448 1-1 1z" opacity=".5"/><path d="m22 13h-2.553c-.552 0-1-.448-1-1s.448-1 1-1h2.553c.552 0 1 .448 1 1s-.448 1-1 1z" opacity=".5"/><path d="m16.708 8.432c-2.339 0-3.525 1.201-3.525 3.568s1.186 3.568 3.525 3.568 3.525-1.2 3.525-3.568-1.186-3.568-3.525-3.568z"/><path d="m22 19.909h-11.936c-.552 0-1-.447-1-1s.448-1 1-1h11.936c.552 0 1 .447 1 1s-.448 1-1 1z" opacity=".5"/><path d="m4.575 19.909h-2.575c-.552 0-1-.447-1-1s.448-1 1-1h2.575c.552 0 1 .447 1 1s-.448 1-1 1z" opacity=".5"/><path d="m7.292 15.341c-2.339 0-3.525 1.2-3.525 3.568s1.186 3.568 3.525 3.568 3.525-1.2 3.525-3.568-1.186-3.568-3.525-3.568z"/></svg>
);
