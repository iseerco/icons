import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VanFront = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 10c0 1.105-.895 2-2 2h-20c-1.105 0-2-.895-2-2 0-.641.5-1 1-1h1.431l.345-3.968c.188-2.168 1.744-3.954 3.871-4.444 3.391-.779 7.315-.779 10.706 0 2.127.49 3.684 2.276 3.871 4.445l.345 3.967h1.431c.5 0 1 .513 1 1zm-22 4h20v7.5c0 1.379-1.121 2.5-2.5 2.5-1.208 0-2.217-.86-2.449-2h-10.102c-.232 1.14-1.242 2-2.449 2-1.379 0-2.5-1.121-2.5-2.5zm15 4c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-13 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5z"/></svg>
);
