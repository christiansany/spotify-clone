import { GraphQLResolveInfo } from 'graphql';
import { SongDocument } from '../src/domains/song/data-sources/song.types';
import { ArtistDocument } from '../src/domains/artist/data-sources/artist.types';
import { UserDocument } from '../src/domains/user/data-sources/user.types';
import { Context } from '../src/server/types';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  songs?: Maybe<Array<Maybe<Song>>>;
};


export type ArtistSongsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  userLogin: UserLoginPaylaod;
  userRegister: UserRegisterPaylaod;
};


export type MutationUserLoginArgs = {
  input: UserRegisterInput;
};


export type MutationUserRegisterArgs = {
  input: UserRegisterInput;
};

export type Query = {
  __typename?: 'Query';
  artist?: Maybe<Artist>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  me?: Maybe<User>;
  song?: Maybe<Song>;
  songs?: Maybe<Array<Maybe<Song>>>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtistsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerySongArgs = {
  id: Scalars['ID'];
};


export type QuerySongsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Song = {
  __typename?: 'Song';
  artist?: Maybe<Artist>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  track: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserError = {
  __typename?: 'UserError';
  field: Array<Scalars['String']>;
  message: Scalars['String'];
};

export type UserLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserLoginPaylaod = {
  __typename?: 'UserLoginPaylaod';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userErrors: Array<UserError>;
};

export type UserRegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserRegisterPaylaod = {
  __typename?: 'UserRegisterPaylaod';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userErrors: Array<UserError>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Artist: ResolverTypeWrapper<ArtistDocument>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Song: ResolverTypeWrapper<SongDocument>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<UserDocument>;
  UserError: ResolverTypeWrapper<UserError>;
  UserLoginInput: UserLoginInput;
  UserLoginPaylaod: ResolverTypeWrapper<Omit<UserLoginPaylaod, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  UserRegisterInput: UserRegisterInput;
  UserRegisterPaylaod: ResolverTypeWrapper<Omit<UserRegisterPaylaod, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Artist: ArtistDocument;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Song: SongDocument;
  String: Scalars['String'];
  User: UserDocument;
  UserError: UserError;
  UserLoginInput: UserLoginInput;
  UserLoginPaylaod: Omit<UserLoginPaylaod, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  UserRegisterInput: UserRegisterInput;
  UserRegisterPaylaod: Omit<UserRegisterPaylaod, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
};

export type ArtistResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType, RequireFields<ArtistSongsArgs, 'skip' | 'take'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  userLogin?: Resolver<ResolversTypes['UserLoginPaylaod'], ParentType, ContextType, RequireFields<MutationUserLoginArgs, 'input'>>;
  userRegister?: Resolver<ResolversTypes['UserRegisterPaylaod'], ParentType, ContextType, RequireFields<MutationUserRegisterArgs, 'input'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>;
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType, RequireFields<QueryArtistsArgs, 'skip' | 'take'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  song?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<QuerySongArgs, 'id'>>;
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType, RequireFields<QuerySongsArgs, 'skip' | 'take'>>;
};

export type SongResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = {
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  track?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  field?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLoginPaylaodResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserLoginPaylaod'] = ResolversParentTypes['UserLoginPaylaod']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRegisterPaylaodResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserRegisterPaylaod'] = ResolversParentTypes['UserRegisterPaylaod']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Artist?: ArtistResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
  UserLoginPaylaod?: UserLoginPaylaodResolvers<ContextType>;
  UserRegisterPaylaod?: UserRegisterPaylaodResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
