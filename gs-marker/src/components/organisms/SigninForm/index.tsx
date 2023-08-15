import { useForm } from 'react-hook-form';
import Button from './../..//atoms/Button';
import Input from './../../atoms/Input';
import Text from './../../atoms/Text';
import Box from './../../layout/Box';

export type SigninFormData = {
    username: string;
    password: string;
};

interface SigninFormProps {
    onSignin?: (username: string, password: string) => void;
}

const SigninForm = ({ onSignin }: SigninFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninFormData>();
    const onSubmit = (data: SigninFormData) => {
        const { username, password } = data;

        onSignin && onSignin(username, password);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box marginBottom={1}>
                <Input
                    {...register('username', { required: true })}
                    name="username"
                    type="text"
                    placeholder="username"
                    hasError={!!errors.username}
                />
                {errors.username && (
                    <Text color="danger" variant="small" paddingLeft={1}>
                        User name is required
                    </Text>
                )}
            </Box>
            <Box marginBottom={2}>
                <Input
                    {...register('password', { required: true })}
                    name="password"
                    type="password"
                    placeholder="password"
                    hasError={!!errors.password}
                />
                {errors.password && (
                    <Text color="danger" variant="small" paddingLeft={1}>
                        Password is required
                    </Text>
                )}
            </Box>
            <Button width="100%" type="submit">
                sign in
            </Button>
        </form>
    );
};

export default SigninForm;
