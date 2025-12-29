import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pennant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.812 2.949c0-1.221-.724-1.949-1.937-1.949s-1.937.729-1.937 1.949c0 .833.337 1.437.937 1.736v17.315c0 .553.448 1 1 1s1-.447 1-1v-17.315c.6-.299.937-.903.937-1.736z"/><path d="m20.746 10.691-.778-.729c-4.098-3.84-9.207-6.258-14.773-6.991-.288-.04-.498.703-.498.991v14.918c0 .288.126 1 .367 1 .043 0 .087-.003.13-.009 5.566-.732 10.675-3.149 14.774-6.99l.778-.73c.201-.189.315-.453.315-.729s-.114-.541-.316-.729z" opacity=".5"/></svg>
);
