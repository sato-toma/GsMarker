import type { ApiContext } from 'types';
import { fetcher } from './../../utils';

/**
 * sign out
 * @param context API context
 * @returns sign out message
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signout`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
    );
};

export default signout;
