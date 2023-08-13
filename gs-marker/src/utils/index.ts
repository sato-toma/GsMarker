export const fetcher = async (
    resource: RequestInfo,
    init?: RequestInit,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
    const response = await fetch(resource, init);

    if (!response.ok) {
        const errorResponse = await response.json();
        const error = new Error(
            errorResponse.message ?? 'An error occurred during the API request',
        );

        throw error;
    }

    return response.json();
};
