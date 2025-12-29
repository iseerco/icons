import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowsHCopy: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.465,22.777V1.223l3.766,3.766,.707-.707L13.146,.489c-.315-.315-.734-.489-1.181-.489h0c-.445,0-.864,.174-1.179,.489l-3.793,3.792,.707,.707,3.766-3.765V22.776l-3.766-3.765-.707,.707,3.793,3.792c.314,.315,.733,.489,1.179,.489h0c.446,0,.865-.174,1.181-.489l3.792-3.792-.707-.707-3.766,3.766Z"/></svg>
);

FiTsArrowsHCopy.displayName = 'FiTsArrowsHCopy';
