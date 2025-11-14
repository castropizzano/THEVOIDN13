import { useEditableContent } from '@/hooks/useContentEditor';
import { ReactNode } from 'react';

interface EditableTextProps {
  id: string;
  defaultValue: string;
  label: string;
  type?: 'text' | 'textarea' | 'heading';
  page: string;
  section?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  children?: (value: string) => ReactNode;
}

export const EditableText = ({
  id,
  defaultValue,
  label,
  type = 'text',
  page,
  section,
  className = '',
  as: Component = 'p',
  children,
}: EditableTextProps) => {
  const value = useEditableContent(id, defaultValue, {
    label,
    type,
    page,
    section,
  });

  if (children) {
    return <>{children(value)}</>;
  }

  return <Component className={className}>{value}</Component>;
};

// Convenience components with pre-configured types
export const EditableHeading = (props: Omit<EditableTextProps, 'type'>) => (
  <EditableText {...props} type="heading" />
);

export const EditableParagraph = (props: Omit<EditableTextProps, 'type'>) => (
  <EditableText {...props} type="textarea" />
);

export const EditableCaption = (props: Omit<EditableTextProps, 'type'>) => (
  <EditableText {...props} type="text" />
);
