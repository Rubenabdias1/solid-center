import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
};

export type Category = {
  __typename?: 'Category';
  _count?: Maybe<CategoryCount>;
  id: Scalars['Int'];
  imgURL: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  products: Scalars['Int'];
};

export type CategoryOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  imgURL?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  Id = 'id',
  ImgUrl = 'imgURL',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  id?: InputMaybe<IntFilter>;
  imgURL?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneOrder: Order;
  createPaymentIntent?: Maybe<PaymentIntentResponse>;
};


export type MutationCreateOneOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreatePaymentIntentArgs = {
  amount: Scalars['Float'];
  id: PaymentMethodTypes;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  _count?: Maybe<OrderCount>;
  chargeId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  customerId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderCount = {
  __typename?: 'OrderCount';
  details: Scalars['Int'];
};

export type OrderCreateInput = {
  chargeId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customer: UserCreateNestedOneWithoutOrdersInput;
  details?: InputMaybe<OrderDetailCreateNestedManyWithoutOrderInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderDetailCreateManyOrderInput = {
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderDetailCreateManyOrderInputEnvelope = {
  data: Array<OrderDetailCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderDetailCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<OrderDetailWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderDetailCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderDetailCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderDetailCreateManyOrderInputEnvelope>;
};

export type OrderDetailCreateOrConnectWithoutOrderInput = {
  create: OrderDetailCreateWithoutOrderInput;
  where: OrderDetailWhereUniqueInput;
};

export type OrderDetailCreateWithoutOrderInput = {
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type PaymentIntentResponse = {
  __typename?: 'PaymentIntentResponse';
  success?: Maybe<Scalars['Boolean']>;
};

/** The acceptable Payment Methods */
export enum PaymentMethodTypes {
  AcssDebit = 'acss_debit',
  Affirm = 'affirm',
  AfterpayClearpay = 'afterpay_clearpay',
  Alipay = 'alipay',
  AuBecsDebit = 'au_becs_debit',
  BacsDebit = 'bacs_debit',
  Bancontact = 'bancontact',
  Blik = 'blik',
  Boleto = 'boleto',
  Card = 'card',
  CardPresent = 'card_present',
  CustomerBalance = 'customer_balance',
  Eps = 'eps',
  Fpx = 'fpx',
  Giropay = 'giropay',
  Grabpay = 'grabpay',
  Ideal = 'ideal',
  InteracPresent = 'interac_present',
  Klarna = 'klarna',
  Konbini = 'konbini',
  Link = 'link',
  Oxxo = 'oxxo',
  P24 = 'p24',
  Paynow = 'paynow',
  Pix = 'pix',
  Promptpay = 'promptpay',
  SepaDebit = 'sepa_debit',
  Sofort = 'sofort',
  UsBankAccount = 'us_bank_account',
  WechatPay = 'wechat_pay'
}

export type Product = {
  __typename?: 'Product';
  categoryId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  imgURL: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imgURL?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ProductScalarFieldEnum {
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Id = 'id',
  ImgUrl = 'imgURL',
  Name = 'name',
  Price = 'price',
  UpdatedAt = 'updatedAt'
}

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  imgURL?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<UserCreateWithoutOrdersInput>;
};

export type UserCreateOrConnectWithoutOrdersInput = {
  create: UserCreateWithoutOrdersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutOrdersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: number, name: string, price: any, imgURL: string } | null };

export type ProductsQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string, price: any, categoryId: number, imgURL: string, createdAt: any, updatedAt: any }> };


export const ProductDocument = gql`
    query Product($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    id
    name
    price
    imgURL
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($where: ProductWhereInput, $take: Int) {
  products(where: $where, take: $take) {
    id
    name
    price
    categoryId
    imgURL
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;