import { baseApi } from '../../api/baseApi';

const mediaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (payload) => ({
        url: '/media',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['media'],
    }),
    mediaList: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: { name: string; value: any }) => {
            params.append(item?.name, item?.value);
          });
        }
        return {
          url: '/media',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['media'],
    }),
    deleteMedia: builder.mutation({
      query: (name) => {
        return {
          url: `/media/${name}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['media'],
    }),
    renameMedia: builder.mutation({
      query: ({ oldName, newName }) => ({
        url: '/media/rename',
        method: 'PATCH',
        body: { oldName, newName },
      }),
      invalidatesTags: ['media'],
    }),
  }),
});

export const {
  useMediaListQuery,
  useUploadImageMutation,
  useDeleteMediaMutation,
  useRenameMediaMutation,
} = mediaApi;
