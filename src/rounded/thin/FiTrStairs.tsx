import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrStairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,.499c0,.276-.223.5-.498.501l-2.991.009h-.005c-.139,0-.264.051-.357.145-.096.094-.148.221-.148.355v2.991c0,.276-.224.5-.5.5h-3.5c-.552,0-1,.449-1,1v3.5c0,.276-.224.5-.5.5h-3.5c-.551,0-1,.449-1,1v3.5c0,.276-.224.5-.5.5h-3.5c-.551,0-1,.449-1,1v3.5c0,.276-.224.5-.5.5h-2.5c-.551,0-1,.449-1,1v2.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2.5c0-1.103.897-2,2-2h2v-3c0-1.103.897-2,2-2h3v-3c0-1.103.897-2,2-2h3v-3c0-1.103.897-2,2-2h3V1.509c0-.403.157-.781.444-1.065.286-.283.662-.401,1.068-.435l2.985-.009h.002c.275,0,.499.223.5.499Z"/>
</svg>

);
