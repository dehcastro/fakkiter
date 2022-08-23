import qs from 'qs';
import {apiConn} from './api';
import {User} from './auth';

export interface Fakitter {
  id: number;
  text: string;
  user: User;
}

interface PostFakkitData {
  data: {
    text: string;
    user: number;
  };
}

interface GetFakittersResponse {
  id: number;
  attributes: {
    text: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    user: {
      data: {
        id: number;
        attributes: {
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          createdAt: Date;
          updatedAt: Date;
          name: string;
        };
      };
    };
  };
}

interface GenericPaginationResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const fakitterMapper = (response: GetFakittersResponse): Fakitter => {
  const {attributes, id} = response;

  return {
    text: attributes.text,
    id,
    createdAt: attributes.createdAt,
    user: {
      id: attributes.user.data.id,
      username: attributes.user.data.attributes.username,
      email: attributes.user.data.attributes.email,
      name: attributes.user.data.attributes.name,
    },
  };
};

export const getFakittersService = async (): Promise<Fakitter[]> => {
  const {data} = await apiConn().get<
    GenericPaginationResponse<GetFakittersResponse>
  >('fakitters', {
    params: {
      populate: '*',
      sort: 'createdAt:desc',
    },
  });

  return data.data.map(fakitterMapper);
};

export const getFakittersByUserIdService = async (
  userId: number,
): Promise<Fakitter[]> => {
  const {data} = await apiConn().get<
    GenericPaginationResponse<GetFakittersResponse>
  >(
    `fakitters?${qs.stringify(
      {
        populate: '*',
        sort: 'createdAt:desc',
        filters: {
          user: {
            id: {
              $eq: userId,
            },
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      },
    )}`,
  );

  return data.data.map(fakitterMapper);
};

export const postFakkit = async (fakkitData: PostFakkitData): Promise<any> => {
  const response = await apiConn().post('fakitters', fakkitData);

  return response;
};
