import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bomb = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.333,5.333l-1.333,2.667-1.333-2.667L0,4l2.667-1.333L4,0l1.333,2.667,2.667,1.333-2.667,1.333Zm15.667,9.667c0-1.341-.305-2.667-.886-3.879l1.71-1.711-4.242-4.242-1.713,1.713c-1.209-.578-2.532-.881-3.869-.881C7.038,6,3,10.038,3,15s4.038,9,9,9,9-4.038,9-9Zm1.034-8.62c1.312-1.312,1.312-3.448,0-4.76C20.976,.562,19.527-.013,18.037,.034c-5.128,.175-9.068,.953-9.233,.986l.392,1.961c.039-.008,3.954-.779,8.909-.948,.937-.033,1.847,.334,2.515,1.001,.532,.533,.532,1.399,0,1.932l-.327,.327,1.414,1.414,.327-.327Z"/></svg>

);
