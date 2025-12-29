import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentDollar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm11,23H12c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v11Zm-7-13.5v.5h-1v-.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5,.673-1.5,1.5,0,.876,.628,1.612,1.492,1.751l3.174,.51c1.353,.217,2.334,1.369,2.334,2.739,0,1.378-1.121,2.5-2.5,2.5h-1v2h-1v-2h-1c-1.379,0-2.5-1.122-2.5-2.5v-.5h1v.5c0,.827,.673,1.5,1.5,1.5h3c.827,0,1.5-.673,1.5-1.5,0-.876-.628-1.612-1.492-1.751l-3.174-.51c-1.353-.217-2.334-1.369-2.334-2.739,0-1.378,1.121-2.5,2.5-2.5h1v-2h1v2h1c1.379,0,2.5,1.122,2.5,2.5Z"/></svg>

);
