import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.976,23.969l-.741-.561,2.845-7.588L0,11.97v-.97H7.739L9.966,3h1.068l2.227,8h7.739v.97l-6.079,3.851,2.852,7.604-.787,.544-6.486-4.928-6.523,4.929Zm6.525-6.183l5.718,4.344-2.521-6.72,5.385-3.41h-6.582l-2.001-7.189-2.001,7.189H1.917l5.384,3.41-2.507,6.687,5.707-4.311Zm11.533-9.073l-2.533-1.643-2.533,1.643-.637-.485,.809-2.702-2.137-1.722v-.739l.5-.064h2.544l1.052-3h.709l.214,.334,.935,2.666h3.044v.803l-2.137,1.722,.808,2.702-.637,.485Zm-2.533-2.835l1.767,1.146-.555-1.856,1.449-1.168h-1.915l-.745-2.126-.746,2.126h-1.915l1.449,1.168-.555,1.855,1.766-1.146Z"/></svg>

);
