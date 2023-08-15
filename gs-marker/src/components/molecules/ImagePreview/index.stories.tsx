import { Meta, StoryFn } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Dropzone from './../../molecules/Dropzone';
import ImagePreview from './';

export default {
    title: 'Molecules/ImagePreview',
    argTypes: {
        src: {
            control: { type: 'text' },
            description: 'URL',
            table: {
                type: { summary: 'string' },
            },
        },
        alt: {
            control: { type: 'text' },
            description: 'alt text',
            table: {
                type: { summary: 'string' },
            },
        },
        height: {
            control: { type: 'number' },
            description: 'height',
            table: {
                type: { summary: 'number' },
            },
        },
        width: {
            control: { type: 'number' },
            description: 'width',
            table: {
                type: { summary: 'number' },
            },
        },
        onRemove: {
            description: 'onRemove event handler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof ImagePreview>;

const Container = Styled.div`
    width: 288px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
`;

interface Image {
    file?: File;
    src?: string;
}

const Template: StoryFn<typeof ImagePreview> = (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        const newImages = [...images];

        for (const f of files) {
            const index = newImages.findIndex((img: Image) => img.file === f);

            if (index === -1) {
                newImages.push({
                    file: f,
                    src: URL.createObjectURL(f),
                });
            }
        }
        setImages(newImages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files]);

    const handleRemove = (src: string) => {
        const image = images.find((img: Image) => img.src === src);

        if (image !== undefined) {
            setImages((images) =>
                images.filter((img) => img.src !== image.src),
            );
            setFiles((files) =>
                files.filter((file: File) => file !== image.file),
            );
        }

        args && args.onRemove && args.onRemove(src);
    };

    return (
        <Container>
            <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
            {images.map((image, i) => (
                <ImagePreview
                    key={i}
                    src={image.src}
                    width="100px"
                    {...args}
                    onRemove={handleRemove}
                />
            ))}
        </Container>
    );
};

export const WithDropzone = Template.bind({});
WithDropzone.args = {};
