import { Form } from "antd";
import { Rule } from "antd/es/form";
import InputError from "./InputError";
import RichTextEditor, { RichTextEditorProps } from "./RichTextEditor";

interface FormRichTextEditorProps
  extends Omit<RichTextEditorProps, "onChange" | "value"> {
  name: string;
  label?: string;
  rules?: Rule[];
  placeholder?: string;
  fieldError?: Record<string, string>;
  setFieldError?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export const FormRichTextEditor = ({
  name,
  label,
  rules,
  placeholder,
  fieldError = {},
  setFieldError = () => {},
  ...rest
}: FormRichTextEditorProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      {({ value, onChange }: any) => (
        <>
          <RichTextEditor
            value={typeof value === "string" ? value : ""}
            placeholder={placeholder}
            onChange={(val) => {
              setFieldError?.((prev) => ({ ...prev, [name]: "" }));
              onChange?.(val);
            }}
            {...rest}
          />
          {fieldError?.[name] ? (
            <InputError>{fieldError[name]}</InputError>
          ) : null}
        </>
      )}
    </Form.Item>
  );
};
