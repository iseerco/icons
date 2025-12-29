import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCaretRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,19.305V4.75l6.344,5.804c.407.366.646.891.656,1.438.011.575-.229,1.126-.658,1.512l-6.342,5.802Zm1-12.285v10.016l4.67-4.273c.217-.194.336-.467.33-.752-.005-.276-.12-.529-.326-.714l-.004-.003-4.67-4.273Z"/>
</svg>

);
