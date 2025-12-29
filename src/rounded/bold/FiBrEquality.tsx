import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrEquality = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,13.5c.219,6.249,9.441,5.76,8.937-.431l-2.572-8.575c-.447-1.492-1.795-2.494-3.353-2.494h-4.512v-.5c-.034-1.972-2.967-1.971-3,0v.5H5.988c-1.558,0-2.905,1.002-3.353,2.494L.063,13.069c-.396,2.599,1.85,4.953,4.436,4.931,2.585,.021,4.821-2.323,4.44-4.92L6.583,5h3.917V21H5.5c-1.972,.034-1.971,2.967,0,3h13c1.972-.034,1.971-2.967,0-3h-5V5h3.917l-2.357,8.08c-.039,.136-.06,.278-.06,.42ZM4.521,8.646l1.27,4.354H3.216l1.306-4.354Zm16.263,4.354h-2.576l1.27-4.354,1.306,4.354Z"/></svg>

);
