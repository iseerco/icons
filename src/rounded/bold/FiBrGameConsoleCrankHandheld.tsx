import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGameConsoleCrankHandheld = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.5 4h-1c-.829 0-1.5.671-1.5 1.5v5.5h-1v-3.5c0-3.033-2.467-5.5-5.5-5.5h-8c-3.033 0-5.5 2.467-5.5 5.5v9c0 3.032 2.467 5.5 5.5 5.5h8c3.033 0 5.5-2.468 5.5-5.5v-2.5h1.5c1.378 0 2.5-1.122 2.5-2.5v-4.585c.583-.206 1-.761 1-1.415 0-.829-.671-1.5-1.5-1.5zm-6.5 12.5c0 1.379-1.122 2.5-2.5 2.5h-8c-1.378 0-2.5-1.121-2.5-2.5v-9c0-1.378 1.122-2.5 2.5-2.5h8c1.378 0 2.5 1.122 2.5 2.5zm-6.5-1.5c0 .553-.448 1-1 1h-.5v.5c0 .553-.448 1-1 1s-1-.447-1-1v-.5h-.5c-.552 0-1-.447-1-1s.448-1 1-1h.5v-.5c0-.552.448-1 1-1s1 .448 1 1v.5h.5c.552 0 1 .447 1 1zm4.5-.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm0-6.5v2c0 .552-.448 1-1 1h-7c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1h7c.552 0 1 .448 1 1z"/></svg>
);
