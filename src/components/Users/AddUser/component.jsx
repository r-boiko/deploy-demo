import { useForm, Controller } from "react-hook-form";
import { Button, Input, Space, Alert } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const AddUser = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form>
      <Space direction={"vertical"}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <Input placeholder="Joe Doe" {...field} />
              {errors[field.name] && (
                <Alert message={errors[field.name].message} type="error" />
              )}
            </>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <Input placeholder="joedoe@example.com" {...field} />
              {errors[field.name] && (
                <Alert message={errors[field.name].message} type="error" />
              )}
            </>
          )}
        />
        <Button
          type="primary"
          onClick={handleSubmit((values) => {
            onSubmit(values);
            reset();
          })}
        >
          Add user
        </Button>
      </Space>
    </form>
  );
};

export default AddUser;
