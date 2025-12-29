import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrExamB = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.707 0h-10.207c-1.378 0-2.5 1.122-2.5 2.5v21.5h20v-16.707zm.293 1.707 5.293 5.293h-5.293zm-12 21.293v-20.5c0-.827.673-1.5 1.5-1.5h9.5v7h7v15zm13-8h2v1h-2v2h-1v-2h-2v-1h2v-2h1zm-6.102.429c.371-.363.602-.87.602-1.429 0-1.103-.897-2-2-2h-2.5v8h2.5c1.378 0 2.5-1.122 2.5-2.5 0-.861-.438-1.622-1.102-2.071zm-2.898-2.429h1.5c.551 0 1 .449 1 1s-.449 1-1 1h-1.5zm1.5 6h-1.5v-3h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z"/></svg>
);
