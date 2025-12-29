import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HairConditioner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2 19h10v2.5c0 1.381-1.119 2.5-2.5 2.5h-5c-1.381 0-2.5-1.119-2.5-2.5zm-2-18c0 4.545 1.308 12.914 1.817 16h10.365c.509-3.086 1.817-11.455 1.817-16v-1h-13.999zm14.827 12c-.23 1.583-.45 2.972-.618 4h3.791c1.626 0 3-1.341 3-2.929 0-1.072-.304-1.518-.902-2.323l-1.302-1.748-.914 1.438c-.16.258-.882 1.562-2.382 1.562zm6.673 6h-7.5v2.5c0 .925-.282 1.784-.762 2.5h8.262c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z"/></svg>
);
