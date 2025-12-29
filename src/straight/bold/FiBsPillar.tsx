import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPillar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 5c0-2.757-2.243-5-5-5h-14c-2.757 0-5 2.243-5 5s2.243 5 5 5v11h-3v3h20v-3h-3v-11c2.757 0 5-2.243 5-5zm-21 0c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2h-3c0 .712.154 1.386.424 2h-4.848c.269-.614.424-1.288.424-2h-3c0 1.103-.897 2-2 2s-2-.897-2-2zm10.5 16v-9h-3v9h-2.5v-11h8v11z"/></svg>
);
