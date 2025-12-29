import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAngleCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z"/><path d="M14.475,9.343c-.197-.197-.5-.474-.817-.756-.944-.838-2.368-.839-3.314,0-.317,.282-.62,.559-.814,.753l-2.879,2.828c-.197,.193-.199,.51-.006,.707,.194,.197,.51,.2,.707,.006l2.882-2.831c.188-.188,.475-.448,.774-.715,.566-.502,1.42-.502,1.986,0,.3,.267,.587,.527,.777,.718l2.879,2.828c.098,.096,.224,.144,.351,.144,.13,0,.259-.05,.356-.149,.193-.197,.191-.514-.006-.707l-2.876-2.825Z"/></svg>

);
