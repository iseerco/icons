import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsSplitUpAndLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,23v1H14.5c-1.378,0-2.5-1.122-2.5-2.5V13H1.25l4.605,4.648-.71,.704L.468,13.631c-.623-.623-.623-1.64,.001-2.264L5.145,6.648l.71,.704L1.25,12H12V1.25L7.352,5.855l-.704-.71L11.369,.468c.623-.624,1.639-.623,2.264,.001l4.719,4.676-.704,.71L13,1.25V21.5c0,.827,.673,1.5,1.5,1.5h9.5Z"/>
</svg>

);
