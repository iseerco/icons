import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCursorTextAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 17.751v-11.502a3.249 3.249 0 1 0 -4.249-4.249h-11.502a3.249 3.249 0 1 0 -4.249 4.249v11.5a3.249 3.249 0 1 0 4.249 4.251h11.5a3.249 3.249 0 1 0 4.251-4.249zm-17 .268v-12.038a3.255 3.255 0 0 0 .981-.981h12.038a3.255 3.255 0 0 0 .981.981v12.038a3.255 3.255 0 0 0 -.981.981h-12.038a3.255 3.255 0 0 0 -.981-.981zm8.5-4.019v.5a.5.5 0 0 0 .5.5h.5a1.5 1.5 0 0 1 0 3h-.5a3.48 3.48 0 0 1 -2-.635 3.48 3.48 0 0 1 -2 .635h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 .5-.5v-.5a1.5 1.5 0 0 1 0-3v-1.5a.5.5 0 0 0 -.5-.5h-.5a1.5 1.5 0 0 1 0-3h.5a3.48 3.48 0 0 1 2 .635 3.48 3.48 0 0 1 2-.635h.5a1.5 1.5 0 0 1 0 3h-.5a.5.5 0 0 0 -.5.5v1.5a1.5 1.5 0 0 1 0 3z"/></svg>
);
