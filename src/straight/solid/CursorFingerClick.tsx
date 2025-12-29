import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorFingerClick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 5h-2v-5h2zm6.773-1.376-1.421-1.407-3.518 3.553 1.421 1.407zm2.232 7.364-.01-2-5 .024.01 2zm-12.839-5.218-3.518-3.553-1.421 1.407 3.518 3.553zm-2.161 3.243-5-.024-.01 2 5 .024zm6.995 1.095c0-.996-.681-1.92-1.664-2.08-1.253-.204-2.336.758-2.336 1.973v10.317c-1.076-.886-2.111-1.67-2.145-1.702-.922-.861-2.373-.813-3.235.109-.863.923-.819 2.372.098 3.23l2.34 2.046h16.942s0-4.538 0-4.538l-10-4z"/></svg>
);
