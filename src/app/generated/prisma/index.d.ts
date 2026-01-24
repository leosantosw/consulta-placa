
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model email_verification_tokens
 * 
 */
export type email_verification_tokens = $Result.DefaultSelection<Prisma.$email_verification_tokensPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model wallet_transactions
 * 
 */
export type wallet_transactions = $Result.DefaultSelection<Prisma.$wallet_transactionsPayload>
/**
 * Model wallets
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wallets = $Result.DefaultSelection<Prisma.$walletsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Email_verification_tokens
 * const email_verification_tokens = await prisma.email_verification_tokens.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Email_verification_tokens
   * const email_verification_tokens = await prisma.email_verification_tokens.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.email_verification_tokens`: Exposes CRUD operations for the **email_verification_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_verification_tokens
    * const email_verification_tokens = await prisma.email_verification_tokens.findMany()
    * ```
    */
  get email_verification_tokens(): Prisma.email_verification_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet_transactions`: Exposes CRUD operations for the **wallet_transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallet_transactions
    * const wallet_transactions = await prisma.wallet_transactions.findMany()
    * ```
    */
  get wallet_transactions(): Prisma.wallet_transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallets`: Exposes CRUD operations for the **wallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallets.findMany()
    * ```
    */
  get wallets(): Prisma.walletsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    email_verification_tokens: 'email_verification_tokens',
    users: 'users',
    wallet_transactions: 'wallet_transactions',
    wallets: 'wallets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "email_verification_tokens" | "users" | "wallet_transactions" | "wallets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      email_verification_tokens: {
        payload: Prisma.$email_verification_tokensPayload<ExtArgs>
        fields: Prisma.email_verification_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_verification_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_verification_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          findFirst: {
            args: Prisma.email_verification_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_verification_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          findMany: {
            args: Prisma.email_verification_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>[]
          }
          create: {
            args: Prisma.email_verification_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          createMany: {
            args: Prisma.email_verification_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.email_verification_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>[]
          }
          delete: {
            args: Prisma.email_verification_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          update: {
            args: Prisma.email_verification_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          deleteMany: {
            args: Prisma.email_verification_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_verification_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.email_verification_tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>[]
          }
          upsert: {
            args: Prisma.email_verification_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verification_tokensPayload>
          }
          aggregate: {
            args: Prisma.Email_verification_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_verification_tokens>
          }
          groupBy: {
            args: Prisma.email_verification_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_verification_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_verification_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Email_verification_tokensCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      wallet_transactions: {
        payload: Prisma.$wallet_transactionsPayload<ExtArgs>
        fields: Prisma.wallet_transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wallet_transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wallet_transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>
          }
          findFirst: {
            args: Prisma.wallet_transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wallet_transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>
          }
          findMany: {
            args: Prisma.wallet_transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>[]
          }
          create: {
            args: Prisma.wallet_transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>
          }
          createMany: {
            args: Prisma.wallet_transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.wallet_transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>[]
          }
          delete: {
            args: Prisma.wallet_transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>
          }
          update: {
            args: Prisma.wallet_transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>
          }
          deleteMany: {
            args: Prisma.wallet_transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wallet_transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.wallet_transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>[]
          }
          upsert: {
            args: Prisma.wallet_transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_transactionsPayload>
          }
          aggregate: {
            args: Prisma.Wallet_transactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet_transactions>
          }
          groupBy: {
            args: Prisma.wallet_transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Wallet_transactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.wallet_transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<Wallet_transactionsCountAggregateOutputType> | number
          }
        }
      }
      wallets: {
        payload: Prisma.$walletsPayload<ExtArgs>
        fields: Prisma.walletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.walletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.walletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findFirst: {
            args: Prisma.walletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.walletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findMany: {
            args: Prisma.walletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          create: {
            args: Prisma.walletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          createMany: {
            args: Prisma.walletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.walletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          delete: {
            args: Prisma.walletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          update: {
            args: Prisma.walletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          deleteMany: {
            args: Prisma.walletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.walletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.walletsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          upsert: {
            args: Prisma.walletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          aggregate: {
            args: Prisma.WalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallets>
          }
          groupBy: {
            args: Prisma.walletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.walletsCountArgs<ExtArgs>
            result: $Utils.Optional<WalletsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    email_verification_tokens?: email_verification_tokensOmit
    users?: usersOmit
    wallet_transactions?: wallet_transactionsOmit
    wallets?: walletsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    email_verification_tokens: number
    wallet_transactions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email_verification_tokens?: boolean | UsersCountOutputTypeCountEmail_verification_tokensArgs
    wallet_transactions?: boolean | UsersCountOutputTypeCountWallet_transactionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmail_verification_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verification_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWallet_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_transactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model email_verification_tokens
   */

  export type AggregateEmail_verification_tokens = {
    _count: Email_verification_tokensCountAggregateOutputType | null
    _avg: Email_verification_tokensAvgAggregateOutputType | null
    _sum: Email_verification_tokensSumAggregateOutputType | null
    _min: Email_verification_tokensMinAggregateOutputType | null
    _max: Email_verification_tokensMaxAggregateOutputType | null
  }

  export type Email_verification_tokensAvgAggregateOutputType = {
    id: number | null
  }

  export type Email_verification_tokensSumAggregateOutputType = {
    id: bigint | null
  }

  export type Email_verification_tokensMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Email_verification_tokensMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Email_verification_tokensCountAggregateOutputType = {
    id: number
    user_id: number
    token_hash: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type Email_verification_tokensAvgAggregateInputType = {
    id?: true
  }

  export type Email_verification_tokensSumAggregateInputType = {
    id?: true
  }

  export type Email_verification_tokensMinAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    created_at?: true
  }

  export type Email_verification_tokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    created_at?: true
  }

  export type Email_verification_tokensCountAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type Email_verification_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verification_tokens to aggregate.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_verification_tokens
    **/
    _count?: true | Email_verification_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Email_verification_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Email_verification_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_verification_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_verification_tokensMaxAggregateInputType
  }

  export type GetEmail_verification_tokensAggregateType<T extends Email_verification_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_verification_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_verification_tokens[P]>
      : GetScalarType<T[P], AggregateEmail_verification_tokens[P]>
  }




  export type email_verification_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verification_tokensWhereInput
    orderBy?: email_verification_tokensOrderByWithAggregationInput | email_verification_tokensOrderByWithAggregationInput[]
    by: Email_verification_tokensScalarFieldEnum[] | Email_verification_tokensScalarFieldEnum
    having?: email_verification_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_verification_tokensCountAggregateInputType | true
    _avg?: Email_verification_tokensAvgAggregateInputType
    _sum?: Email_verification_tokensSumAggregateInputType
    _min?: Email_verification_tokensMinAggregateInputType
    _max?: Email_verification_tokensMaxAggregateInputType
  }

  export type Email_verification_tokensGroupByOutputType = {
    id: bigint
    user_id: string
    token_hash: string
    expires_at: Date
    created_at: Date
    _count: Email_verification_tokensCountAggregateOutputType | null
    _avg: Email_verification_tokensAvgAggregateOutputType | null
    _sum: Email_verification_tokensSumAggregateOutputType | null
    _min: Email_verification_tokensMinAggregateOutputType | null
    _max: Email_verification_tokensMaxAggregateOutputType | null
  }

  type GetEmail_verification_tokensGroupByPayload<T extends email_verification_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_verification_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_verification_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_verification_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Email_verification_tokensGroupByOutputType[P]>
        }
      >
    >


  export type email_verification_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification_tokens"]>

  export type email_verification_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification_tokens"]>

  export type email_verification_tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification_tokens"]>

  export type email_verification_tokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type email_verification_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token_hash" | "expires_at" | "created_at", ExtArgs["result"]["email_verification_tokens"]>
  export type email_verification_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type email_verification_tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type email_verification_tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $email_verification_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_verification_tokens"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      token_hash: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["email_verification_tokens"]>
    composites: {}
  }

  type email_verification_tokensGetPayload<S extends boolean | null | undefined | email_verification_tokensDefaultArgs> = $Result.GetResult<Prisma.$email_verification_tokensPayload, S>

  type email_verification_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_verification_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_verification_tokensCountAggregateInputType | true
    }

  export interface email_verification_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_verification_tokens'], meta: { name: 'email_verification_tokens' } }
    /**
     * Find zero or one Email_verification_tokens that matches the filter.
     * @param {email_verification_tokensFindUniqueArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_verification_tokensFindUniqueArgs>(args: SelectSubset<T, email_verification_tokensFindUniqueArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_verification_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_verification_tokensFindUniqueOrThrowArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_verification_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, email_verification_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensFindFirstArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_verification_tokensFindFirstArgs>(args?: SelectSubset<T, email_verification_tokensFindFirstArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensFindFirstOrThrowArgs} args - Arguments to find a Email_verification_tokens
     * @example
     * // Get one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_verification_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, email_verification_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_verification_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findMany()
     * 
     * // Get first 10 Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const email_verification_tokensWithIdOnly = await prisma.email_verification_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends email_verification_tokensFindManyArgs>(args?: SelectSubset<T, email_verification_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_verification_tokens.
     * @param {email_verification_tokensCreateArgs} args - Arguments to create a Email_verification_tokens.
     * @example
     * // Create one Email_verification_tokens
     * const Email_verification_tokens = await prisma.email_verification_tokens.create({
     *   data: {
     *     // ... data to create a Email_verification_tokens
     *   }
     * })
     * 
     */
    create<T extends email_verification_tokensCreateArgs>(args: SelectSubset<T, email_verification_tokensCreateArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_verification_tokens.
     * @param {email_verification_tokensCreateManyArgs} args - Arguments to create many Email_verification_tokens.
     * @example
     * // Create many Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_verification_tokensCreateManyArgs>(args?: SelectSubset<T, email_verification_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Email_verification_tokens and returns the data saved in the database.
     * @param {email_verification_tokensCreateManyAndReturnArgs} args - Arguments to create many Email_verification_tokens.
     * @example
     * // Create many Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Email_verification_tokens and only return the `id`
     * const email_verification_tokensWithIdOnly = await prisma.email_verification_tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends email_verification_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, email_verification_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email_verification_tokens.
     * @param {email_verification_tokensDeleteArgs} args - Arguments to delete one Email_verification_tokens.
     * @example
     * // Delete one Email_verification_tokens
     * const Email_verification_tokens = await prisma.email_verification_tokens.delete({
     *   where: {
     *     // ... filter to delete one Email_verification_tokens
     *   }
     * })
     * 
     */
    delete<T extends email_verification_tokensDeleteArgs>(args: SelectSubset<T, email_verification_tokensDeleteArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_verification_tokens.
     * @param {email_verification_tokensUpdateArgs} args - Arguments to update one Email_verification_tokens.
     * @example
     * // Update one Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_verification_tokensUpdateArgs>(args: SelectSubset<T, email_verification_tokensUpdateArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_verification_tokens.
     * @param {email_verification_tokensDeleteManyArgs} args - Arguments to filter Email_verification_tokens to delete.
     * @example
     * // Delete a few Email_verification_tokens
     * const { count } = await prisma.email_verification_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_verification_tokensDeleteManyArgs>(args?: SelectSubset<T, email_verification_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_verification_tokensUpdateManyArgs>(args: SelectSubset<T, email_verification_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verification_tokens and returns the data updated in the database.
     * @param {email_verification_tokensUpdateManyAndReturnArgs} args - Arguments to update many Email_verification_tokens.
     * @example
     * // Update many Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Email_verification_tokens and only return the `id`
     * const email_verification_tokensWithIdOnly = await prisma.email_verification_tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends email_verification_tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, email_verification_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email_verification_tokens.
     * @param {email_verification_tokensUpsertArgs} args - Arguments to update or create a Email_verification_tokens.
     * @example
     * // Update or create a Email_verification_tokens
     * const email_verification_tokens = await prisma.email_verification_tokens.upsert({
     *   create: {
     *     // ... data to create a Email_verification_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_verification_tokens we want to update
     *   }
     * })
     */
    upsert<T extends email_verification_tokensUpsertArgs>(args: SelectSubset<T, email_verification_tokensUpsertArgs<ExtArgs>>): Prisma__email_verification_tokensClient<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensCountArgs} args - Arguments to filter Email_verification_tokens to count.
     * @example
     * // Count the number of Email_verification_tokens
     * const count = await prisma.email_verification_tokens.count({
     *   where: {
     *     // ... the filter for the Email_verification_tokens we want to count
     *   }
     * })
    **/
    count<T extends email_verification_tokensCountArgs>(
      args?: Subset<T, email_verification_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_verification_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_verification_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Email_verification_tokensAggregateArgs>(args: Subset<T, Email_verification_tokensAggregateArgs>): Prisma.PrismaPromise<GetEmail_verification_tokensAggregateType<T>>

    /**
     * Group by Email_verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verification_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends email_verification_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_verification_tokensGroupByArgs['orderBy'] }
        : { orderBy?: email_verification_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, email_verification_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_verification_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_verification_tokens model
   */
  readonly fields: email_verification_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_verification_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_verification_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the email_verification_tokens model
   */
  interface email_verification_tokensFieldRefs {
    readonly id: FieldRef<"email_verification_tokens", 'BigInt'>
    readonly user_id: FieldRef<"email_verification_tokens", 'String'>
    readonly token_hash: FieldRef<"email_verification_tokens", 'String'>
    readonly expires_at: FieldRef<"email_verification_tokens", 'DateTime'>
    readonly created_at: FieldRef<"email_verification_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * email_verification_tokens findUnique
   */
  export type email_verification_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens findUniqueOrThrow
   */
  export type email_verification_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens findFirst
   */
  export type email_verification_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verification_tokens.
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verification_tokens.
     */
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * email_verification_tokens findFirstOrThrow
   */
  export type email_verification_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verification_tokens.
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verification_tokens.
     */
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * email_verification_tokens findMany
   */
  export type email_verification_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter, which email_verification_tokens to fetch.
     */
    where?: email_verification_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verification_tokens to fetch.
     */
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_verification_tokens.
     */
    cursor?: email_verification_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verification_tokens.
     */
    skip?: number
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * email_verification_tokens create
   */
  export type email_verification_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a email_verification_tokens.
     */
    data: XOR<email_verification_tokensCreateInput, email_verification_tokensUncheckedCreateInput>
  }

  /**
   * email_verification_tokens createMany
   */
  export type email_verification_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_verification_tokens.
     */
    data: email_verification_tokensCreateManyInput | email_verification_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_verification_tokens createManyAndReturn
   */
  export type email_verification_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * The data used to create many email_verification_tokens.
     */
    data: email_verification_tokensCreateManyInput | email_verification_tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_verification_tokens update
   */
  export type email_verification_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a email_verification_tokens.
     */
    data: XOR<email_verification_tokensUpdateInput, email_verification_tokensUncheckedUpdateInput>
    /**
     * Choose, which email_verification_tokens to update.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens updateMany
   */
  export type email_verification_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_verification_tokens.
     */
    data: XOR<email_verification_tokensUpdateManyMutationInput, email_verification_tokensUncheckedUpdateManyInput>
    /**
     * Filter which email_verification_tokens to update
     */
    where?: email_verification_tokensWhereInput
    /**
     * Limit how many email_verification_tokens to update.
     */
    limit?: number
  }

  /**
   * email_verification_tokens updateManyAndReturn
   */
  export type email_verification_tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * The data used to update email_verification_tokens.
     */
    data: XOR<email_verification_tokensUpdateManyMutationInput, email_verification_tokensUncheckedUpdateManyInput>
    /**
     * Filter which email_verification_tokens to update
     */
    where?: email_verification_tokensWhereInput
    /**
     * Limit how many email_verification_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_verification_tokens upsert
   */
  export type email_verification_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the email_verification_tokens to update in case it exists.
     */
    where: email_verification_tokensWhereUniqueInput
    /**
     * In case the email_verification_tokens found by the `where` argument doesn't exist, create a new email_verification_tokens with this data.
     */
    create: XOR<email_verification_tokensCreateInput, email_verification_tokensUncheckedCreateInput>
    /**
     * In case the email_verification_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_verification_tokensUpdateInput, email_verification_tokensUncheckedUpdateInput>
  }

  /**
   * email_verification_tokens delete
   */
  export type email_verification_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    /**
     * Filter which email_verification_tokens to delete.
     */
    where: email_verification_tokensWhereUniqueInput
  }

  /**
   * email_verification_tokens deleteMany
   */
  export type email_verification_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verification_tokens to delete
     */
    where?: email_verification_tokensWhereInput
    /**
     * Limit how many email_verification_tokens to delete.
     */
    limit?: number
  }

  /**
   * email_verification_tokens without action
   */
  export type email_verification_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    email_verified: boolean | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    email_verified: boolean | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    email_verified: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    email_verified?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    email_verified?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    email_verified?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    email_verified: boolean
    active: boolean
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    email_verified?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    email_verification_tokens?: boolean | users$email_verification_tokensArgs<ExtArgs>
    wallet_transactions?: boolean | users$wallet_transactionsArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    email_verified?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    email_verified?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    email_verified?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "email_verified" | "active" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email_verification_tokens?: boolean | users$email_verification_tokensArgs<ExtArgs>
    wallet_transactions?: boolean | users$wallet_transactionsArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      email_verification_tokens: Prisma.$email_verification_tokensPayload<ExtArgs>[]
      wallet_transactions: Prisma.$wallet_transactionsPayload<ExtArgs>[]
      wallets: Prisma.$walletsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      email_verified: boolean
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    email_verification_tokens<T extends users$email_verification_tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$email_verification_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verification_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallet_transactions<T extends users$wallet_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$wallet_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallets<T extends users$walletsArgs<ExtArgs> = {}>(args?: Subset<T, users$walletsArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly email_verified: FieldRef<"users", 'Boolean'>
    readonly active: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.email_verification_tokens
   */
  export type users$email_verification_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification_tokens
     */
    select?: email_verification_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification_tokens
     */
    omit?: email_verification_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verification_tokensInclude<ExtArgs> | null
    where?: email_verification_tokensWhereInput
    orderBy?: email_verification_tokensOrderByWithRelationInput | email_verification_tokensOrderByWithRelationInput[]
    cursor?: email_verification_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_verification_tokensScalarFieldEnum | Email_verification_tokensScalarFieldEnum[]
  }

  /**
   * users.wallet_transactions
   */
  export type users$wallet_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    where?: wallet_transactionsWhereInput
    orderBy?: wallet_transactionsOrderByWithRelationInput | wallet_transactionsOrderByWithRelationInput[]
    cursor?: wallet_transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wallet_transactionsScalarFieldEnum | Wallet_transactionsScalarFieldEnum[]
  }

  /**
   * users.wallets
   */
  export type users$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    where?: walletsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model wallet_transactions
   */

  export type AggregateWallet_transactions = {
    _count: Wallet_transactionsCountAggregateOutputType | null
    _avg: Wallet_transactionsAvgAggregateOutputType | null
    _sum: Wallet_transactionsSumAggregateOutputType | null
    _min: Wallet_transactionsMinAggregateOutputType | null
    _max: Wallet_transactionsMaxAggregateOutputType | null
  }

  export type Wallet_transactionsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type Wallet_transactionsSumAggregateOutputType = {
    id: bigint | null
    amount: number | null
  }

  export type Wallet_transactionsMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    amount: number | null
    type: string | null
    reference_id: string | null
    created_at: Date | null
  }

  export type Wallet_transactionsMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    amount: number | null
    type: string | null
    reference_id: string | null
    created_at: Date | null
  }

  export type Wallet_transactionsCountAggregateOutputType = {
    id: number
    user_id: number
    amount: number
    type: number
    reference_id: number
    created_at: number
    _all: number
  }


  export type Wallet_transactionsAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type Wallet_transactionsSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type Wallet_transactionsMinAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    type?: true
    reference_id?: true
    created_at?: true
  }

  export type Wallet_transactionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    type?: true
    reference_id?: true
    created_at?: true
  }

  export type Wallet_transactionsCountAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    type?: true
    reference_id?: true
    created_at?: true
    _all?: true
  }

  export type Wallet_transactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet_transactions to aggregate.
     */
    where?: wallet_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_transactions to fetch.
     */
    orderBy?: wallet_transactionsOrderByWithRelationInput | wallet_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wallet_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallet_transactions
    **/
    _count?: true | Wallet_transactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wallet_transactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wallet_transactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wallet_transactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wallet_transactionsMaxAggregateInputType
  }

  export type GetWallet_transactionsAggregateType<T extends Wallet_transactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet_transactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet_transactions[P]>
      : GetScalarType<T[P], AggregateWallet_transactions[P]>
  }




  export type wallet_transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_transactionsWhereInput
    orderBy?: wallet_transactionsOrderByWithAggregationInput | wallet_transactionsOrderByWithAggregationInput[]
    by: Wallet_transactionsScalarFieldEnum[] | Wallet_transactionsScalarFieldEnum
    having?: wallet_transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wallet_transactionsCountAggregateInputType | true
    _avg?: Wallet_transactionsAvgAggregateInputType
    _sum?: Wallet_transactionsSumAggregateInputType
    _min?: Wallet_transactionsMinAggregateInputType
    _max?: Wallet_transactionsMaxAggregateInputType
  }

  export type Wallet_transactionsGroupByOutputType = {
    id: bigint
    user_id: string
    amount: number
    type: string
    reference_id: string | null
    created_at: Date
    _count: Wallet_transactionsCountAggregateOutputType | null
    _avg: Wallet_transactionsAvgAggregateOutputType | null
    _sum: Wallet_transactionsSumAggregateOutputType | null
    _min: Wallet_transactionsMinAggregateOutputType | null
    _max: Wallet_transactionsMaxAggregateOutputType | null
  }

  type GetWallet_transactionsGroupByPayload<T extends wallet_transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wallet_transactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wallet_transactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wallet_transactionsGroupByOutputType[P]>
            : GetScalarType<T[P], Wallet_transactionsGroupByOutputType[P]>
        }
      >
    >


  export type wallet_transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    reference_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_transactions"]>

  export type wallet_transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    reference_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_transactions"]>

  export type wallet_transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    reference_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_transactions"]>

  export type wallet_transactionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount?: boolean
    type?: boolean
    reference_id?: boolean
    created_at?: boolean
  }

  export type wallet_transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount" | "type" | "reference_id" | "created_at", ExtArgs["result"]["wallet_transactions"]>
  export type wallet_transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type wallet_transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type wallet_transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $wallet_transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallet_transactions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      amount: number
      type: string
      reference_id: string | null
      created_at: Date
    }, ExtArgs["result"]["wallet_transactions"]>
    composites: {}
  }

  type wallet_transactionsGetPayload<S extends boolean | null | undefined | wallet_transactionsDefaultArgs> = $Result.GetResult<Prisma.$wallet_transactionsPayload, S>

  type wallet_transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wallet_transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Wallet_transactionsCountAggregateInputType | true
    }

  export interface wallet_transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallet_transactions'], meta: { name: 'wallet_transactions' } }
    /**
     * Find zero or one Wallet_transactions that matches the filter.
     * @param {wallet_transactionsFindUniqueArgs} args - Arguments to find a Wallet_transactions
     * @example
     * // Get one Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wallet_transactionsFindUniqueArgs>(args: SelectSubset<T, wallet_transactionsFindUniqueArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet_transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wallet_transactionsFindUniqueOrThrowArgs} args - Arguments to find a Wallet_transactions
     * @example
     * // Get one Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wallet_transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, wallet_transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_transactionsFindFirstArgs} args - Arguments to find a Wallet_transactions
     * @example
     * // Get one Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wallet_transactionsFindFirstArgs>(args?: SelectSubset<T, wallet_transactionsFindFirstArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet_transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_transactionsFindFirstOrThrowArgs} args - Arguments to find a Wallet_transactions
     * @example
     * // Get one Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wallet_transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, wallet_transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallet_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.findMany()
     * 
     * // Get first 10 Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wallet_transactionsWithIdOnly = await prisma.wallet_transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends wallet_transactionsFindManyArgs>(args?: SelectSubset<T, wallet_transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet_transactions.
     * @param {wallet_transactionsCreateArgs} args - Arguments to create a Wallet_transactions.
     * @example
     * // Create one Wallet_transactions
     * const Wallet_transactions = await prisma.wallet_transactions.create({
     *   data: {
     *     // ... data to create a Wallet_transactions
     *   }
     * })
     * 
     */
    create<T extends wallet_transactionsCreateArgs>(args: SelectSubset<T, wallet_transactionsCreateArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallet_transactions.
     * @param {wallet_transactionsCreateManyArgs} args - Arguments to create many Wallet_transactions.
     * @example
     * // Create many Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wallet_transactionsCreateManyArgs>(args?: SelectSubset<T, wallet_transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallet_transactions and returns the data saved in the database.
     * @param {wallet_transactionsCreateManyAndReturnArgs} args - Arguments to create many Wallet_transactions.
     * @example
     * // Create many Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallet_transactions and only return the `id`
     * const wallet_transactionsWithIdOnly = await prisma.wallet_transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends wallet_transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, wallet_transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet_transactions.
     * @param {wallet_transactionsDeleteArgs} args - Arguments to delete one Wallet_transactions.
     * @example
     * // Delete one Wallet_transactions
     * const Wallet_transactions = await prisma.wallet_transactions.delete({
     *   where: {
     *     // ... filter to delete one Wallet_transactions
     *   }
     * })
     * 
     */
    delete<T extends wallet_transactionsDeleteArgs>(args: SelectSubset<T, wallet_transactionsDeleteArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet_transactions.
     * @param {wallet_transactionsUpdateArgs} args - Arguments to update one Wallet_transactions.
     * @example
     * // Update one Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wallet_transactionsUpdateArgs>(args: SelectSubset<T, wallet_transactionsUpdateArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallet_transactions.
     * @param {wallet_transactionsDeleteManyArgs} args - Arguments to filter Wallet_transactions to delete.
     * @example
     * // Delete a few Wallet_transactions
     * const { count } = await prisma.wallet_transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wallet_transactionsDeleteManyArgs>(args?: SelectSubset<T, wallet_transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallet_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wallet_transactionsUpdateManyArgs>(args: SelectSubset<T, wallet_transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallet_transactions and returns the data updated in the database.
     * @param {wallet_transactionsUpdateManyAndReturnArgs} args - Arguments to update many Wallet_transactions.
     * @example
     * // Update many Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallet_transactions and only return the `id`
     * const wallet_transactionsWithIdOnly = await prisma.wallet_transactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends wallet_transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, wallet_transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet_transactions.
     * @param {wallet_transactionsUpsertArgs} args - Arguments to update or create a Wallet_transactions.
     * @example
     * // Update or create a Wallet_transactions
     * const wallet_transactions = await prisma.wallet_transactions.upsert({
     *   create: {
     *     // ... data to create a Wallet_transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet_transactions we want to update
     *   }
     * })
     */
    upsert<T extends wallet_transactionsUpsertArgs>(args: SelectSubset<T, wallet_transactionsUpsertArgs<ExtArgs>>): Prisma__wallet_transactionsClient<$Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallet_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_transactionsCountArgs} args - Arguments to filter Wallet_transactions to count.
     * @example
     * // Count the number of Wallet_transactions
     * const count = await prisma.wallet_transactions.count({
     *   where: {
     *     // ... the filter for the Wallet_transactions we want to count
     *   }
     * })
    **/
    count<T extends wallet_transactionsCountArgs>(
      args?: Subset<T, wallet_transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wallet_transactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wallet_transactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wallet_transactionsAggregateArgs>(args: Subset<T, Wallet_transactionsAggregateArgs>): Prisma.PrismaPromise<GetWallet_transactionsAggregateType<T>>

    /**
     * Group by Wallet_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends wallet_transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wallet_transactionsGroupByArgs['orderBy'] }
        : { orderBy?: wallet_transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, wallet_transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallet_transactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallet_transactions model
   */
  readonly fields: wallet_transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallet_transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wallet_transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallet_transactions model
   */
  interface wallet_transactionsFieldRefs {
    readonly id: FieldRef<"wallet_transactions", 'BigInt'>
    readonly user_id: FieldRef<"wallet_transactions", 'String'>
    readonly amount: FieldRef<"wallet_transactions", 'Int'>
    readonly type: FieldRef<"wallet_transactions", 'String'>
    readonly reference_id: FieldRef<"wallet_transactions", 'String'>
    readonly created_at: FieldRef<"wallet_transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wallet_transactions findUnique
   */
  export type wallet_transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which wallet_transactions to fetch.
     */
    where: wallet_transactionsWhereUniqueInput
  }

  /**
   * wallet_transactions findUniqueOrThrow
   */
  export type wallet_transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which wallet_transactions to fetch.
     */
    where: wallet_transactionsWhereUniqueInput
  }

  /**
   * wallet_transactions findFirst
   */
  export type wallet_transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which wallet_transactions to fetch.
     */
    where?: wallet_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_transactions to fetch.
     */
    orderBy?: wallet_transactionsOrderByWithRelationInput | wallet_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallet_transactions.
     */
    cursor?: wallet_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallet_transactions.
     */
    distinct?: Wallet_transactionsScalarFieldEnum | Wallet_transactionsScalarFieldEnum[]
  }

  /**
   * wallet_transactions findFirstOrThrow
   */
  export type wallet_transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which wallet_transactions to fetch.
     */
    where?: wallet_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_transactions to fetch.
     */
    orderBy?: wallet_transactionsOrderByWithRelationInput | wallet_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallet_transactions.
     */
    cursor?: wallet_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallet_transactions.
     */
    distinct?: Wallet_transactionsScalarFieldEnum | Wallet_transactionsScalarFieldEnum[]
  }

  /**
   * wallet_transactions findMany
   */
  export type wallet_transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which wallet_transactions to fetch.
     */
    where?: wallet_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_transactions to fetch.
     */
    orderBy?: wallet_transactionsOrderByWithRelationInput | wallet_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallet_transactions.
     */
    cursor?: wallet_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_transactions.
     */
    skip?: number
    distinct?: Wallet_transactionsScalarFieldEnum | Wallet_transactionsScalarFieldEnum[]
  }

  /**
   * wallet_transactions create
   */
  export type wallet_transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a wallet_transactions.
     */
    data: XOR<wallet_transactionsCreateInput, wallet_transactionsUncheckedCreateInput>
  }

  /**
   * wallet_transactions createMany
   */
  export type wallet_transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallet_transactions.
     */
    data: wallet_transactionsCreateManyInput | wallet_transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallet_transactions createManyAndReturn
   */
  export type wallet_transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many wallet_transactions.
     */
    data: wallet_transactionsCreateManyInput | wallet_transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet_transactions update
   */
  export type wallet_transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a wallet_transactions.
     */
    data: XOR<wallet_transactionsUpdateInput, wallet_transactionsUncheckedUpdateInput>
    /**
     * Choose, which wallet_transactions to update.
     */
    where: wallet_transactionsWhereUniqueInput
  }

  /**
   * wallet_transactions updateMany
   */
  export type wallet_transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallet_transactions.
     */
    data: XOR<wallet_transactionsUpdateManyMutationInput, wallet_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which wallet_transactions to update
     */
    where?: wallet_transactionsWhereInput
    /**
     * Limit how many wallet_transactions to update.
     */
    limit?: number
  }

  /**
   * wallet_transactions updateManyAndReturn
   */
  export type wallet_transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * The data used to update wallet_transactions.
     */
    data: XOR<wallet_transactionsUpdateManyMutationInput, wallet_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which wallet_transactions to update
     */
    where?: wallet_transactionsWhereInput
    /**
     * Limit how many wallet_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet_transactions upsert
   */
  export type wallet_transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the wallet_transactions to update in case it exists.
     */
    where: wallet_transactionsWhereUniqueInput
    /**
     * In case the wallet_transactions found by the `where` argument doesn't exist, create a new wallet_transactions with this data.
     */
    create: XOR<wallet_transactionsCreateInput, wallet_transactionsUncheckedCreateInput>
    /**
     * In case the wallet_transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wallet_transactionsUpdateInput, wallet_transactionsUncheckedUpdateInput>
  }

  /**
   * wallet_transactions delete
   */
  export type wallet_transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
    /**
     * Filter which wallet_transactions to delete.
     */
    where: wallet_transactionsWhereUniqueInput
  }

  /**
   * wallet_transactions deleteMany
   */
  export type wallet_transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet_transactions to delete
     */
    where?: wallet_transactionsWhereInput
    /**
     * Limit how many wallet_transactions to delete.
     */
    limit?: number
  }

  /**
   * wallet_transactions without action
   */
  export type wallet_transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_transactions
     */
    select?: wallet_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_transactions
     */
    omit?: wallet_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_transactionsInclude<ExtArgs> | null
  }


  /**
   * Model wallets
   */

  export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  export type WalletsAvgAggregateOutputType = {
    balance: number | null
  }

  export type WalletsSumAggregateOutputType = {
    balance: number | null
  }

  export type WalletsMinAggregateOutputType = {
    user_id: string | null
    balance: number | null
    updated_at: Date | null
  }

  export type WalletsMaxAggregateOutputType = {
    user_id: string | null
    balance: number | null
    updated_at: Date | null
  }

  export type WalletsCountAggregateOutputType = {
    user_id: number
    balance: number
    updated_at: number
    _all: number
  }


  export type WalletsAvgAggregateInputType = {
    balance?: true
  }

  export type WalletsSumAggregateInputType = {
    balance?: true
  }

  export type WalletsMinAggregateInputType = {
    user_id?: true
    balance?: true
    updated_at?: true
  }

  export type WalletsMaxAggregateInputType = {
    user_id?: true
    balance?: true
    updated_at?: true
  }

  export type WalletsCountAggregateInputType = {
    user_id?: true
    balance?: true
    updated_at?: true
    _all?: true
  }

  export type WalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to aggregate.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletsMaxAggregateInputType
  }

  export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallets[P]>
      : GetScalarType<T[P], AggregateWallets[P]>
  }




  export type walletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletsWhereInput
    orderBy?: walletsOrderByWithAggregationInput | walletsOrderByWithAggregationInput[]
    by: WalletsScalarFieldEnum[] | WalletsScalarFieldEnum
    having?: walletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletsCountAggregateInputType | true
    _avg?: WalletsAvgAggregateInputType
    _sum?: WalletsSumAggregateInputType
    _min?: WalletsMinAggregateInputType
    _max?: WalletsMaxAggregateInputType
  }

  export type WalletsGroupByOutputType = {
    user_id: string
    balance: number
    updated_at: Date
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  type GetWalletsGroupByPayload<T extends walletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletsGroupByOutputType[P]>
        }
      >
    >


  export type walletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    balance?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    balance?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    balance?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectScalar = {
    user_id?: boolean
    balance?: boolean
    updated_at?: boolean
  }

  export type walletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "balance" | "updated_at", ExtArgs["result"]["wallets"]>
  export type walletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type walletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type walletsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $walletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallets"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      balance: number
      updated_at: Date
    }, ExtArgs["result"]["wallets"]>
    composites: {}
  }

  type walletsGetPayload<S extends boolean | null | undefined | walletsDefaultArgs> = $Result.GetResult<Prisma.$walletsPayload, S>

  type walletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<walletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletsCountAggregateInputType | true
    }

  export interface walletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallets'], meta: { name: 'wallets' } }
    /**
     * Find zero or one Wallets that matches the filter.
     * @param {walletsFindUniqueArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends walletsFindUniqueArgs>(args: SelectSubset<T, walletsFindUniqueArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {walletsFindUniqueOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends walletsFindUniqueOrThrowArgs>(args: SelectSubset<T, walletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends walletsFindFirstArgs>(args?: SelectSubset<T, walletsFindFirstArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends walletsFindFirstOrThrowArgs>(args?: SelectSubset<T, walletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallets.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallets.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const walletsWithUser_idOnly = await prisma.wallets.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends walletsFindManyArgs>(args?: SelectSubset<T, walletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallets.
     * @param {walletsCreateArgs} args - Arguments to create a Wallets.
     * @example
     * // Create one Wallets
     * const Wallets = await prisma.wallets.create({
     *   data: {
     *     // ... data to create a Wallets
     *   }
     * })
     * 
     */
    create<T extends walletsCreateArgs>(args: SelectSubset<T, walletsCreateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {walletsCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends walletsCreateManyArgs>(args?: SelectSubset<T, walletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {walletsCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `user_id`
     * const walletsWithUser_idOnly = await prisma.wallets.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends walletsCreateManyAndReturnArgs>(args?: SelectSubset<T, walletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallets.
     * @param {walletsDeleteArgs} args - Arguments to delete one Wallets.
     * @example
     * // Delete one Wallets
     * const Wallets = await prisma.wallets.delete({
     *   where: {
     *     // ... filter to delete one Wallets
     *   }
     * })
     * 
     */
    delete<T extends walletsDeleteArgs>(args: SelectSubset<T, walletsDeleteArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallets.
     * @param {walletsUpdateArgs} args - Arguments to update one Wallets.
     * @example
     * // Update one Wallets
     * const wallets = await prisma.wallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends walletsUpdateArgs>(args: SelectSubset<T, walletsUpdateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {walletsDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends walletsDeleteManyArgs>(args?: SelectSubset<T, walletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends walletsUpdateManyArgs>(args: SelectSubset<T, walletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {walletsUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `user_id`
     * const walletsWithUser_idOnly = await prisma.wallets.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends walletsUpdateManyAndReturnArgs>(args: SelectSubset<T, walletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallets.
     * @param {walletsUpsertArgs} args - Arguments to update or create a Wallets.
     * @example
     * // Update or create a Wallets
     * const wallets = await prisma.wallets.upsert({
     *   create: {
     *     // ... data to create a Wallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallets we want to update
     *   }
     * })
     */
    upsert<T extends walletsUpsertArgs>(args: SelectSubset<T, walletsUpsertArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallets.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletsCountArgs>(
      args?: Subset<T, walletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletsAggregateArgs>(args: Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>

    /**
     * Group by Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends walletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: walletsGroupByArgs['orderBy'] }
        : { orderBy?: walletsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, walletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallets model
   */
  readonly fields: walletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__walletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallets model
   */
  interface walletsFieldRefs {
    readonly user_id: FieldRef<"wallets", 'String'>
    readonly balance: FieldRef<"wallets", 'Int'>
    readonly updated_at: FieldRef<"wallets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wallets findUnique
   */
  export type walletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findUniqueOrThrow
   */
  export type walletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findFirst
   */
  export type walletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findFirstOrThrow
   */
  export type walletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findMany
   */
  export type walletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets create
   */
  export type walletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to create a wallets.
     */
    data: XOR<walletsCreateInput, walletsUncheckedCreateInput>
  }

  /**
   * wallets createMany
   */
  export type walletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: walletsCreateManyInput | walletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallets createManyAndReturn
   */
  export type walletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * The data used to create many wallets.
     */
    data: walletsCreateManyInput | walletsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallets update
   */
  export type walletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to update a wallets.
     */
    data: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
    /**
     * Choose, which wallets to update.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets updateMany
   */
  export type walletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
  }

  /**
   * wallets updateManyAndReturn
   */
  export type walletsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallets upsert
   */
  export type walletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The filter to search for the wallets to update in case it exists.
     */
    where: walletsWhereUniqueInput
    /**
     * In case the wallets found by the `where` argument doesn't exist, create a new wallets with this data.
     */
    create: XOR<walletsCreateInput, walletsUncheckedCreateInput>
    /**
     * In case the wallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
  }

  /**
   * wallets delete
   */
  export type walletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter which wallets to delete.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets deleteMany
   */
  export type walletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to delete.
     */
    limit?: number
  }

  /**
   * wallets without action
   */
  export type walletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Email_verification_tokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type Email_verification_tokensScalarFieldEnum = (typeof Email_verification_tokensScalarFieldEnum)[keyof typeof Email_verification_tokensScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    email_verified: 'email_verified',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Wallet_transactionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount: 'amount',
    type: 'type',
    reference_id: 'reference_id',
    created_at: 'created_at'
  };

  export type Wallet_transactionsScalarFieldEnum = (typeof Wallet_transactionsScalarFieldEnum)[keyof typeof Wallet_transactionsScalarFieldEnum]


  export const WalletsScalarFieldEnum: {
    user_id: 'user_id',
    balance: 'balance',
    updated_at: 'updated_at'
  };

  export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type email_verification_tokensWhereInput = {
    AND?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    OR?: email_verification_tokensWhereInput[]
    NOT?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    id?: BigIntFilter<"email_verification_tokens"> | bigint | number
    user_id?: UuidFilter<"email_verification_tokens"> | string
    token_hash?: StringFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    created_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type email_verification_tokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type email_verification_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    token_hash?: string
    AND?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    OR?: email_verification_tokensWhereInput[]
    NOT?: email_verification_tokensWhereInput | email_verification_tokensWhereInput[]
    user_id?: UuidFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    created_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "token_hash">

  export type email_verification_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: email_verification_tokensCountOrderByAggregateInput
    _avg?: email_verification_tokensAvgOrderByAggregateInput
    _max?: email_verification_tokensMaxOrderByAggregateInput
    _min?: email_verification_tokensMinOrderByAggregateInput
    _sum?: email_verification_tokensSumOrderByAggregateInput
  }

  export type email_verification_tokensScalarWhereWithAggregatesInput = {
    AND?: email_verification_tokensScalarWhereWithAggregatesInput | email_verification_tokensScalarWhereWithAggregatesInput[]
    OR?: email_verification_tokensScalarWhereWithAggregatesInput[]
    NOT?: email_verification_tokensScalarWhereWithAggregatesInput | email_verification_tokensScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"email_verification_tokens"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"email_verification_tokens"> | string
    token_hash?: StringWithAggregatesFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeWithAggregatesFilter<"email_verification_tokens"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"email_verification_tokens"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    email_verified?: BoolFilter<"users"> | boolean
    active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    email_verification_tokens?: Email_verification_tokensListRelationFilter
    wallet_transactions?: Wallet_transactionsListRelationFilter
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email_verification_tokens?: email_verification_tokensOrderByRelationAggregateInput
    wallet_transactions?: wallet_transactionsOrderByRelationAggregateInput
    wallets?: walletsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    email_verified?: BoolFilter<"users"> | boolean
    active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    email_verification_tokens?: Email_verification_tokensListRelationFilter
    wallet_transactions?: Wallet_transactionsListRelationFilter
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    email_verified?: BoolWithAggregatesFilter<"users"> | boolean
    active?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type wallet_transactionsWhereInput = {
    AND?: wallet_transactionsWhereInput | wallet_transactionsWhereInput[]
    OR?: wallet_transactionsWhereInput[]
    NOT?: wallet_transactionsWhereInput | wallet_transactionsWhereInput[]
    id?: BigIntFilter<"wallet_transactions"> | bigint | number
    user_id?: UuidFilter<"wallet_transactions"> | string
    amount?: IntFilter<"wallet_transactions"> | number
    type?: StringFilter<"wallet_transactions"> | string
    reference_id?: StringNullableFilter<"wallet_transactions"> | string | null
    created_at?: DateTimeFilter<"wallet_transactions"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type wallet_transactionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type wallet_transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: wallet_transactionsWhereInput | wallet_transactionsWhereInput[]
    OR?: wallet_transactionsWhereInput[]
    NOT?: wallet_transactionsWhereInput | wallet_transactionsWhereInput[]
    user_id?: UuidFilter<"wallet_transactions"> | string
    amount?: IntFilter<"wallet_transactions"> | number
    type?: StringFilter<"wallet_transactions"> | string
    reference_id?: StringNullableFilter<"wallet_transactions"> | string | null
    created_at?: DateTimeFilter<"wallet_transactions"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type wallet_transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: wallet_transactionsCountOrderByAggregateInput
    _avg?: wallet_transactionsAvgOrderByAggregateInput
    _max?: wallet_transactionsMaxOrderByAggregateInput
    _min?: wallet_transactionsMinOrderByAggregateInput
    _sum?: wallet_transactionsSumOrderByAggregateInput
  }

  export type wallet_transactionsScalarWhereWithAggregatesInput = {
    AND?: wallet_transactionsScalarWhereWithAggregatesInput | wallet_transactionsScalarWhereWithAggregatesInput[]
    OR?: wallet_transactionsScalarWhereWithAggregatesInput[]
    NOT?: wallet_transactionsScalarWhereWithAggregatesInput | wallet_transactionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"wallet_transactions"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"wallet_transactions"> | string
    amount?: IntWithAggregatesFilter<"wallet_transactions"> | number
    type?: StringWithAggregatesFilter<"wallet_transactions"> | string
    reference_id?: StringNullableWithAggregatesFilter<"wallet_transactions"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"wallet_transactions"> | Date | string
  }

  export type walletsWhereInput = {
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    user_id?: UuidFilter<"wallets"> | string
    balance?: IntFilter<"wallets"> | number
    updated_at?: DateTimeFilter<"wallets"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type walletsOrderByWithRelationInput = {
    user_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type walletsWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    balance?: IntFilter<"wallets"> | number
    updated_at?: DateTimeFilter<"wallets"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id">

  export type walletsOrderByWithAggregationInput = {
    user_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
    _count?: walletsCountOrderByAggregateInput
    _avg?: walletsAvgOrderByAggregateInput
    _max?: walletsMaxOrderByAggregateInput
    _min?: walletsMinOrderByAggregateInput
    _sum?: walletsSumOrderByAggregateInput
  }

  export type walletsScalarWhereWithAggregatesInput = {
    AND?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    OR?: walletsScalarWhereWithAggregatesInput[]
    NOT?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"wallets"> | string
    balance?: IntWithAggregatesFilter<"wallets"> | number
    updated_at?: DateTimeWithAggregatesFilter<"wallets"> | Date | string
  }

  export type email_verification_tokensCreateInput = {
    id?: bigint | number
    token_hash: string
    expires_at: Date | string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutEmail_verification_tokensInput
  }

  export type email_verification_tokensUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    token_hash: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type email_verification_tokensUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutEmail_verification_tokensNestedInput
  }

  export type email_verification_tokensUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensCreateManyInput = {
    id?: bigint | number
    user_id: string
    token_hash: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type email_verification_tokensUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    email_verification_tokens?: email_verification_tokensCreateNestedManyWithoutUsersInput
    wallet_transactions?: wallet_transactionsCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    email_verification_tokens?: email_verification_tokensUncheckedCreateNestedManyWithoutUsersInput
    wallet_transactions?: wallet_transactionsUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification_tokens?: email_verification_tokensUpdateManyWithoutUsersNestedInput
    wallet_transactions?: wallet_transactionsUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification_tokens?: email_verification_tokensUncheckedUpdateManyWithoutUsersNestedInput
    wallet_transactions?: wallet_transactionsUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type wallet_transactionsCreateInput = {
    id?: bigint | number
    amount: number
    type: string
    reference_id?: string | null
    created_at?: Date | string
    users: usersCreateNestedOneWithoutWallet_transactionsInput
  }

  export type wallet_transactionsUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    amount: number
    type: string
    reference_id?: string | null
    created_at?: Date | string
  }

  export type wallet_transactionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutWallet_transactionsNestedInput
  }

  export type wallet_transactionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type wallet_transactionsCreateManyInput = {
    id?: bigint | number
    user_id: string
    amount: number
    type: string
    reference_id?: string | null
    created_at?: Date | string
  }

  export type wallet_transactionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type wallet_transactionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type walletsCreateInput = {
    balance?: number
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateInput = {
    user_id: string
    balance?: number
    updated_at?: Date | string
  }

  export type walletsUpdateInput = {
    balance?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type walletsCreateManyInput = {
    user_id: string
    balance?: number
    updated_at?: Date | string
  }

  export type walletsUpdateManyMutationInput = {
    balance?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type walletsUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type email_verification_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_verification_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type email_verification_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_verification_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_verification_tokensSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Email_verification_tokensListRelationFilter = {
    every?: email_verification_tokensWhereInput
    some?: email_verification_tokensWhereInput
    none?: email_verification_tokensWhereInput
  }

  export type Wallet_transactionsListRelationFilter = {
    every?: wallet_transactionsWhereInput
    some?: wallet_transactionsWhereInput
    none?: wallet_transactionsWhereInput
  }

  export type WalletsNullableScalarRelationFilter = {
    is?: walletsWhereInput | null
    isNot?: walletsWhereInput | null
  }

  export type email_verification_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type wallet_transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type wallet_transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
  }

  export type wallet_transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type wallet_transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
  }

  export type wallet_transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
  }

  export type wallet_transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type walletsCountOrderByAggregateInput = {
    user_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
  }

  export type walletsAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type walletsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
  }

  export type walletsMinOrderByAggregateInput = {
    user_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
  }

  export type walletsSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type usersCreateNestedOneWithoutEmail_verification_tokensInput = {
    create?: XOR<usersCreateWithoutEmail_verification_tokensInput, usersUncheckedCreateWithoutEmail_verification_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmail_verification_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutEmail_verification_tokensNestedInput = {
    create?: XOR<usersCreateWithoutEmail_verification_tokensInput, usersUncheckedCreateWithoutEmail_verification_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmail_verification_tokensInput
    upsert?: usersUpsertWithoutEmail_verification_tokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEmail_verification_tokensInput, usersUpdateWithoutEmail_verification_tokensInput>, usersUncheckedUpdateWithoutEmail_verification_tokensInput>
  }

  export type email_verification_tokensCreateNestedManyWithoutUsersInput = {
    create?: XOR<email_verification_tokensCreateWithoutUsersInput, email_verification_tokensUncheckedCreateWithoutUsersInput> | email_verification_tokensCreateWithoutUsersInput[] | email_verification_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUsersInput | email_verification_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: email_verification_tokensCreateManyUsersInputEnvelope
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
  }

  export type wallet_transactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<wallet_transactionsCreateWithoutUsersInput, wallet_transactionsUncheckedCreateWithoutUsersInput> | wallet_transactionsCreateWithoutUsersInput[] | wallet_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wallet_transactionsCreateOrConnectWithoutUsersInput | wallet_transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: wallet_transactionsCreateManyUsersInputEnvelope
    connect?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
  }

  export type walletsCreateNestedOneWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    connect?: walletsWhereUniqueInput
  }

  export type email_verification_tokensUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<email_verification_tokensCreateWithoutUsersInput, email_verification_tokensUncheckedCreateWithoutUsersInput> | email_verification_tokensCreateWithoutUsersInput[] | email_verification_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUsersInput | email_verification_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: email_verification_tokensCreateManyUsersInputEnvelope
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
  }

  export type wallet_transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<wallet_transactionsCreateWithoutUsersInput, wallet_transactionsUncheckedCreateWithoutUsersInput> | wallet_transactionsCreateWithoutUsersInput[] | wallet_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wallet_transactionsCreateOrConnectWithoutUsersInput | wallet_transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: wallet_transactionsCreateManyUsersInputEnvelope
    connect?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
  }

  export type walletsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    connect?: walletsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type email_verification_tokensUpdateManyWithoutUsersNestedInput = {
    create?: XOR<email_verification_tokensCreateWithoutUsersInput, email_verification_tokensUncheckedCreateWithoutUsersInput> | email_verification_tokensCreateWithoutUsersInput[] | email_verification_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUsersInput | email_verification_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: email_verification_tokensUpsertWithWhereUniqueWithoutUsersInput | email_verification_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: email_verification_tokensCreateManyUsersInputEnvelope
    set?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    disconnect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    delete?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    update?: email_verification_tokensUpdateWithWhereUniqueWithoutUsersInput | email_verification_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: email_verification_tokensUpdateManyWithWhereWithoutUsersInput | email_verification_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
  }

  export type wallet_transactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<wallet_transactionsCreateWithoutUsersInput, wallet_transactionsUncheckedCreateWithoutUsersInput> | wallet_transactionsCreateWithoutUsersInput[] | wallet_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wallet_transactionsCreateOrConnectWithoutUsersInput | wallet_transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: wallet_transactionsUpsertWithWhereUniqueWithoutUsersInput | wallet_transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: wallet_transactionsCreateManyUsersInputEnvelope
    set?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    disconnect?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    delete?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    connect?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    update?: wallet_transactionsUpdateWithWhereUniqueWithoutUsersInput | wallet_transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: wallet_transactionsUpdateManyWithWhereWithoutUsersInput | wallet_transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: wallet_transactionsScalarWhereInput | wallet_transactionsScalarWhereInput[]
  }

  export type walletsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    upsert?: walletsUpsertWithoutUsersInput
    disconnect?: walletsWhereInput | boolean
    delete?: walletsWhereInput | boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutUsersInput, walletsUpdateWithoutUsersInput>, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type email_verification_tokensUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<email_verification_tokensCreateWithoutUsersInput, email_verification_tokensUncheckedCreateWithoutUsersInput> | email_verification_tokensCreateWithoutUsersInput[] | email_verification_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_verification_tokensCreateOrConnectWithoutUsersInput | email_verification_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: email_verification_tokensUpsertWithWhereUniqueWithoutUsersInput | email_verification_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: email_verification_tokensCreateManyUsersInputEnvelope
    set?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    disconnect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    delete?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    connect?: email_verification_tokensWhereUniqueInput | email_verification_tokensWhereUniqueInput[]
    update?: email_verification_tokensUpdateWithWhereUniqueWithoutUsersInput | email_verification_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: email_verification_tokensUpdateManyWithWhereWithoutUsersInput | email_verification_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
  }

  export type wallet_transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<wallet_transactionsCreateWithoutUsersInput, wallet_transactionsUncheckedCreateWithoutUsersInput> | wallet_transactionsCreateWithoutUsersInput[] | wallet_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wallet_transactionsCreateOrConnectWithoutUsersInput | wallet_transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: wallet_transactionsUpsertWithWhereUniqueWithoutUsersInput | wallet_transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: wallet_transactionsCreateManyUsersInputEnvelope
    set?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    disconnect?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    delete?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    connect?: wallet_transactionsWhereUniqueInput | wallet_transactionsWhereUniqueInput[]
    update?: wallet_transactionsUpdateWithWhereUniqueWithoutUsersInput | wallet_transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: wallet_transactionsUpdateManyWithWhereWithoutUsersInput | wallet_transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: wallet_transactionsScalarWhereInput | wallet_transactionsScalarWhereInput[]
  }

  export type walletsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput
    upsert?: walletsUpsertWithoutUsersInput
    disconnect?: walletsWhereInput | boolean
    delete?: walletsWhereInput | boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutUsersInput, walletsUpdateWithoutUsersInput>, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type usersCreateNestedOneWithoutWallet_transactionsInput = {
    create?: XOR<usersCreateWithoutWallet_transactionsInput, usersUncheckedCreateWithoutWallet_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWallet_transactionsInput
    connect?: usersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutWallet_transactionsNestedInput = {
    create?: XOR<usersCreateWithoutWallet_transactionsInput, usersUncheckedCreateWithoutWallet_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWallet_transactionsInput
    upsert?: usersUpsertWithoutWallet_transactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWallet_transactionsInput, usersUpdateWithoutWallet_transactionsInput>, usersUncheckedUpdateWithoutWallet_transactionsInput>
  }

  export type usersCreateNestedOneWithoutWalletsInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    upsert?: usersUpsertWithoutWalletsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWalletsInput, usersUpdateWithoutWalletsInput>, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutEmail_verification_tokensInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    wallet_transactions?: wallet_transactionsCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEmail_verification_tokensInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    wallet_transactions?: wallet_transactionsUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEmail_verification_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEmail_verification_tokensInput, usersUncheckedCreateWithoutEmail_verification_tokensInput>
  }

  export type usersUpsertWithoutEmail_verification_tokensInput = {
    update: XOR<usersUpdateWithoutEmail_verification_tokensInput, usersUncheckedUpdateWithoutEmail_verification_tokensInput>
    create: XOR<usersCreateWithoutEmail_verification_tokensInput, usersUncheckedCreateWithoutEmail_verification_tokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEmail_verification_tokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEmail_verification_tokensInput, usersUncheckedUpdateWithoutEmail_verification_tokensInput>
  }

  export type usersUpdateWithoutEmail_verification_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet_transactions?: wallet_transactionsUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEmail_verification_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet_transactions?: wallet_transactionsUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type email_verification_tokensCreateWithoutUsersInput = {
    id?: bigint | number
    token_hash: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type email_verification_tokensUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    token_hash: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type email_verification_tokensCreateOrConnectWithoutUsersInput = {
    where: email_verification_tokensWhereUniqueInput
    create: XOR<email_verification_tokensCreateWithoutUsersInput, email_verification_tokensUncheckedCreateWithoutUsersInput>
  }

  export type email_verification_tokensCreateManyUsersInputEnvelope = {
    data: email_verification_tokensCreateManyUsersInput | email_verification_tokensCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type wallet_transactionsCreateWithoutUsersInput = {
    id?: bigint | number
    amount: number
    type: string
    reference_id?: string | null
    created_at?: Date | string
  }

  export type wallet_transactionsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    amount: number
    type: string
    reference_id?: string | null
    created_at?: Date | string
  }

  export type wallet_transactionsCreateOrConnectWithoutUsersInput = {
    where: wallet_transactionsWhereUniqueInput
    create: XOR<wallet_transactionsCreateWithoutUsersInput, wallet_transactionsUncheckedCreateWithoutUsersInput>
  }

  export type wallet_transactionsCreateManyUsersInputEnvelope = {
    data: wallet_transactionsCreateManyUsersInput | wallet_transactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type walletsCreateWithoutUsersInput = {
    balance?: number
    updated_at?: Date | string
  }

  export type walletsUncheckedCreateWithoutUsersInput = {
    balance?: number
    updated_at?: Date | string
  }

  export type walletsCreateOrConnectWithoutUsersInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
  }

  export type email_verification_tokensUpsertWithWhereUniqueWithoutUsersInput = {
    where: email_verification_tokensWhereUniqueInput
    update: XOR<email_verification_tokensUpdateWithoutUsersInput, email_verification_tokensUncheckedUpdateWithoutUsersInput>
    create: XOR<email_verification_tokensCreateWithoutUsersInput, email_verification_tokensUncheckedCreateWithoutUsersInput>
  }

  export type email_verification_tokensUpdateWithWhereUniqueWithoutUsersInput = {
    where: email_verification_tokensWhereUniqueInput
    data: XOR<email_verification_tokensUpdateWithoutUsersInput, email_verification_tokensUncheckedUpdateWithoutUsersInput>
  }

  export type email_verification_tokensUpdateManyWithWhereWithoutUsersInput = {
    where: email_verification_tokensScalarWhereInput
    data: XOR<email_verification_tokensUpdateManyMutationInput, email_verification_tokensUncheckedUpdateManyWithoutUsersInput>
  }

  export type email_verification_tokensScalarWhereInput = {
    AND?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
    OR?: email_verification_tokensScalarWhereInput[]
    NOT?: email_verification_tokensScalarWhereInput | email_verification_tokensScalarWhereInput[]
    id?: BigIntFilter<"email_verification_tokens"> | bigint | number
    user_id?: UuidFilter<"email_verification_tokens"> | string
    token_hash?: StringFilter<"email_verification_tokens"> | string
    expires_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
    created_at?: DateTimeFilter<"email_verification_tokens"> | Date | string
  }

  export type wallet_transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: wallet_transactionsWhereUniqueInput
    update: XOR<wallet_transactionsUpdateWithoutUsersInput, wallet_transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<wallet_transactionsCreateWithoutUsersInput, wallet_transactionsUncheckedCreateWithoutUsersInput>
  }

  export type wallet_transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: wallet_transactionsWhereUniqueInput
    data: XOR<wallet_transactionsUpdateWithoutUsersInput, wallet_transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type wallet_transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: wallet_transactionsScalarWhereInput
    data: XOR<wallet_transactionsUpdateManyMutationInput, wallet_transactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type wallet_transactionsScalarWhereInput = {
    AND?: wallet_transactionsScalarWhereInput | wallet_transactionsScalarWhereInput[]
    OR?: wallet_transactionsScalarWhereInput[]
    NOT?: wallet_transactionsScalarWhereInput | wallet_transactionsScalarWhereInput[]
    id?: BigIntFilter<"wallet_transactions"> | bigint | number
    user_id?: UuidFilter<"wallet_transactions"> | string
    amount?: IntFilter<"wallet_transactions"> | number
    type?: StringFilter<"wallet_transactions"> | string
    reference_id?: StringNullableFilter<"wallet_transactions"> | string | null
    created_at?: DateTimeFilter<"wallet_transactions"> | Date | string
  }

  export type walletsUpsertWithoutUsersInput = {
    update: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
    where?: walletsWhereInput
  }

  export type walletsUpdateToOneWithWhereWithoutUsersInput = {
    where?: walletsWhereInput
    data: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type walletsUpdateWithoutUsersInput = {
    balance?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type walletsUncheckedUpdateWithoutUsersInput = {
    balance?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutWallet_transactionsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    email_verification_tokens?: email_verification_tokensCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWallet_transactionsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    email_verification_tokens?: email_verification_tokensUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWallet_transactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWallet_transactionsInput, usersUncheckedCreateWithoutWallet_transactionsInput>
  }

  export type usersUpsertWithoutWallet_transactionsInput = {
    update: XOR<usersUpdateWithoutWallet_transactionsInput, usersUncheckedUpdateWithoutWallet_transactionsInput>
    create: XOR<usersCreateWithoutWallet_transactionsInput, usersUncheckedCreateWithoutWallet_transactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWallet_transactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWallet_transactionsInput, usersUncheckedUpdateWithoutWallet_transactionsInput>
  }

  export type usersUpdateWithoutWallet_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification_tokens?: email_verification_tokensUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWallet_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification_tokens?: email_verification_tokensUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutWalletsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    email_verification_tokens?: email_verification_tokensCreateNestedManyWithoutUsersInput
    wallet_transactions?: wallet_transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWalletsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    email_verified?: boolean
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    email_verification_tokens?: email_verification_tokensUncheckedCreateNestedManyWithoutUsersInput
    wallet_transactions?: wallet_transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWalletsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
  }

  export type usersUpsertWithoutWalletsInput = {
    update: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWalletsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type usersUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification_tokens?: email_verification_tokensUpdateManyWithoutUsersNestedInput
    wallet_transactions?: wallet_transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email_verification_tokens?: email_verification_tokensUncheckedUpdateManyWithoutUsersNestedInput
    wallet_transactions?: wallet_transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type email_verification_tokensCreateManyUsersInput = {
    id?: bigint | number
    token_hash: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type wallet_transactionsCreateManyUsersInput = {
    id?: bigint | number
    amount: number
    type: string
    reference_id?: string | null
    created_at?: Date | string
  }

  export type email_verification_tokensUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verification_tokensUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type wallet_transactionsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type wallet_transactionsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type wallet_transactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}