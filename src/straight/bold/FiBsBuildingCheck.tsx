import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBuildingCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 15h3v3h-3zm3-5h-3v3h3zm2 3h3v-3h-3zm-2-8h-3v3h3zm5 0h-3v3h3zm8.946 9.932-5.948 5.867-3.45-3.371-2.097 2.145 3.781 3.695c.488.488 1.13.732 1.771.732s1.274-.242 1.758-.725l6.239-6.207-2.054-2.137zm-18.946 6.068v-17.5c0-.275.224-.5.5-.5h11c.275 0 .5.225.5.5v13.527l.991.969 2.009-1.981v-12.515c0-1.93-1.57-3.5-3.5-3.5h-11c-1.93 0-3.5 1.57-3.5 3.5v20.5h12.121l-3.07-3z"/></svg>
);
