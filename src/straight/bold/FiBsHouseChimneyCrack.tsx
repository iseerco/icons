import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHouseChimneyCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.657,7.396l-.657-.514V1h-3v3.533L14.157,.744c-1.271-.994-3.045-.994-4.314,0L1.344,7.395c-.854,.668-1.344,1.672-1.344,2.756v13.849H24V10.151c0-1.084-.489-2.088-1.343-2.756Zm-1.657,13.604h-6.047l2.007-5.81c.179-.592-.264-1.19-.883-1.19h-3.904l1.827-5h-2l-4.848,7.594c-.399,.602,.032,1.406,.754,1.406h3.23l-1.152,3H3V10.151c0-.152,.071-.299,.192-.394L11.692,3.106c.182-.142,.434-.142,.615,0l8.501,6.652c.12,.094,.191,.241,.191,.393v10.849Z"/></svg>

);
