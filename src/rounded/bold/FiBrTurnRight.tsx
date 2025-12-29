import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTurnRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9.5c0,1.203-.468,2.333-1.319,3.182l-5.146,4.904c-.291.276-.663.414-1.035.414-.396,0-.791-.156-1.086-.465-.571-.601-.548-1.55.051-2.121l4.633-4.414H5.5c-1.378,0-2.5,1.122-2.5,2.5v7c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-7c0-3.033,2.467-5.5,5.5-5.5h14.599l-4.634-4.414c-.6-.571-.623-1.521-.051-2.121.571-.601,1.52-.623,2.121-.051l5.121,4.879c.876.875,1.344,2.004,1.344,3.207Z"/>
</svg>

);
