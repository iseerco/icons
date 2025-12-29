import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartLineUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22.5c0,.829-.671,1.5-1.5,1.5H3.5c-1.93,0-3.5-1.57-3.5-3.5V1.5C.033-.472,2.967-.471,3,1.5V20.5c0,.276,.224,.5,.5,.5H22.5c.829,0,1.5,.671,1.5,1.5Zm-3.5-17.5h-3c-1.972,.033-1.971,2.967,0,3h1.348l-2.909,2.854c-.195,.195-.512,.195-.708,0-.06-.06-1.276-.929-1.276-.929-1.371-1.264-3.513-1.231-4.806,.062l-3.671,3.414c-.606,.564-.641,1.514-.077,2.12,.566,.608,1.514,.64,2.12,.077l3.71-3.452c.195-.194,.512-.195,.708,0,.06,.06,1.276,.929,1.276,.929,1.373,1.264,3.515,1.23,4.835-.09l2.95-2.893v1.409c.033,1.972,2.967,1.971,3,0v-3c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>

);
