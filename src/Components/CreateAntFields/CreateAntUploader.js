import React from "react";
import { Form, Upload, Icon, Button, message } from "antd";
import { FieldContainer } from './styled';

const FormItem = Form.Item;

const CreateAntUploader = () => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onChange = info => {if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === 'done') {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
    // form.setFieldValue(field.name, value);
  };
  const onRemove = value => {form.setFieldValue(field.name, '')};
  // const onBlur = () => form.setFieldTouched(field.name, true);
  return (
    <FieldContainer>
      <FormItem
        label={label}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <Upload
          {...field}
          {...props}
          onRemove={onRemove}
          //TODO: add custom logic for upload request
        //   onBlur={onBlur}
          onChange={onChange}
          accept='image/*'
        >
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </FormItem>
    </FieldContainer>
  );
};

export const AntUpload = CreateAntUploader();
