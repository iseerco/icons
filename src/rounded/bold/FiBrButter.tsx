import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrButter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,17.5c0-.653-.418-1.208-1-1.414V7.5c0-3.032-2.468-5.5-5.5-5.5H6.5C3.468,2,1,4.468,1,7.5v8.586c-.582.206-1,.761-1,1.414,0,.662.43,1.224,1.026,1.423.209,1.731,1.688,3.077,3.474,3.077h15c1.787,0,3.265-1.346,3.474-3.077.596-.199,1.026-.761,1.026-1.423Zm-4-10v8.5h-2V7.5c0-.9-.217-1.749-.602-2.5h.102c1.379,0,2.5,1.121,2.5,2.5Zm-13.5-2.5h6c1.379,0,2.5,1.121,2.5,2.5v8.5H4V7.5c0-1.379,1.121-2.5,2.5-2.5Z"/>
</svg>

);
