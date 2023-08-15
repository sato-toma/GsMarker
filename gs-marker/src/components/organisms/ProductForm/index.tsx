import { Controller, useForm } from 'react-hook-form';
import type { Category, Condition } from 'types';
import InputImages, { FileData } from './../..//molecules/InputImages';
import Button from './../../atoms/Button';
import Input from './../../atoms/Input';
import Text from './../../atoms/Text';
import TextArea from './../../atoms/TextArea';
import Box from './../../layout/Box';
import Dropdown from './../../molecules/Dropdown';

export type ProductFormData = {
    image: FileData[];
    title: string;
    description: string;
    category: Category;
    condition: Condition;
    price: string;
};

interface ProductFormProps {
    onProductSave?: (data: ProductFormData) => void;
}

const ProductForm = ({ onProductSave }: ProductFormProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ProductFormData>();
    const onSubmit = (data: ProductFormData) => {
        onProductSave && onProductSave(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box marginBottom={3}>
                <Box marginBottom={2}>
                    <Text as="label" variant="mediumLarge" fontWeight="bold">
                        Product Photos
                    </Text>
                </Box>
                <Controller
                    control={control}
                    name="image"
                    rules={{ required: true }}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <InputImages
                            images={value ?? []}
                            onChange={onChange}
                            maximumNumber={1}
                            hasError={!!error}
                        />
                    )}
                />
                {errors.image && (
                    <Text color="danger" variant="small" paddingLeft={1}>
                        Product image is required
                    </Text>
                )}
            </Box>

            <Box marginBottom={3}>
                <Box marginBottom={2}>
                    <Text as="label" variant="mediumLarge" fontWeight="bold">
                        Product Information
                    </Text>
                </Box>
                <Box marginBottom={1}>
                    <Text as="label" variant="medium">
                        title
                    </Text>
                    <Input
                        {...register('title', { required: true })}
                        name="title"
                        type="text"
                        placeholder="Product Title"
                        hasError={!!errors.title}
                    />
                    {errors.title && (
                        <Text color="danger" variant="small" paddingLeft={1}>
                            Filling a title is required
                        </Text>
                    )}
                </Box>
                <Box marginBottom={1}>
                    <Text as="label" variant="medium">
                        summary
                    </Text>
                    <Controller
                        control={control}
                        name="description"
                        rules={{ required: true }}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <TextArea
                                placeholder="Best product!"
                                hasError={!!error}
                                onChange={onChange}
                            >
                                {value}
                            </TextArea>
                        )}
                    />
                    {errors.description && (
                        <Text color="danger" variant="small" paddingLeft={1}>
                            Filling out the summary is required
                        </Text>
                    )}
                </Box>
                <Box marginBottom={1}>
                    <Text as="label" variant="medium">
                        category
                    </Text>
                    <Controller
                        control={control}
                        name="category"
                        rules={{ required: true }}
                        defaultValue="shoes"
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <Dropdown
                                options={[
                                    { value: 'shoes', label: 'シューズ' },
                                    { value: 'clothes', label: 'トップス' },
                                    { value: 'book', label: '本' },
                                ]}
                                hasError={!!error}
                                value={value}
                                placeholder="Please select a category"
                                onChange={(v) => onChange(v?.value)}
                            />
                        )}
                    />
                    {errors.category && (
                        <Text color="danger" variant="small" paddingLeft={1}>
                            Category selection is mandatory
                        </Text>
                    )}
                </Box>
                <Box marginBottom={1}>
                    <Text as="label" variant="medium">
                        Product Condition
                    </Text>
                    <Controller
                        control={control}
                        name="condition"
                        rules={{ required: true }}
                        defaultValue="used"
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <Dropdown
                                options={[
                                    { value: 'used', label: '中古' },
                                    { value: 'new', label: '新品' },
                                ]}
                                hasError={!!error}
                                value={value ?? 'used'}
                                placeholder="Please select condition"
                                onChange={(v) => onChange(v?.value)}
                            />
                        )}
                    />
                    {errors.condition && (
                        <Text color="danger" variant="small" paddingLeft={1}>
                            Entering the condition of the item is mandatory
                        </Text>
                    )}
                </Box>
                <Box>
                    <Text as="label" variant="medium">
                        Price (yen)
                    </Text>
                    <Input
                        {...register('price', { required: true })}
                        name="price"
                        type="number"
                        placeholder="88"
                        hasError={!!errors.price}
                    />
                    {errors.price && (
                        <Text color="danger" variant="small" paddingLeft={1}>
                            Price input is required
                        </Text>
                    )}
                </Box>
            </Box>
            <Button width="100%" type="submit">
                exhibiting
            </Button>
        </form>
    );
};

export default ProductForm;
