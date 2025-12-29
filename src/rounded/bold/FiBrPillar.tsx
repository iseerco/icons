import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPillar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 5c0-2.757-2.243-5-5-5h-14c-2.757 0-5 2.243-5 5s2.243 5 5 5v11h-1.5c-.829 0-1.5.671-1.5 1.5s.671 1.5 1.5 1.5h17c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5h-1.5v-11c2.757 0 5-2.243 5-5zm-21 0c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2s-.897 2-2 2c-.989 0-1.84-.736-1.979-1.712-.118-.82-.881-1.39-1.697-1.272-.82.117-1.39.877-1.272 1.697.065.456.21.881.39 1.288h-4.881c.18-.406.325-.832.39-1.288.117-.82-.452-1.58-1.272-1.697-.818-.112-1.58.453-1.697 1.272-.14.976-.991 1.712-1.979 1.712-1.103 0-2-.897-2-2zm10.5 16v-7.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5v7.5h-2.5v-11h8v11z"/></svg>
);
