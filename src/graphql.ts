
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    email: string;
    password: string;
    name?: Nullable<string>;
}

export interface UpdateUserInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IQuery {
    _placeholder(): Nullable<string> | Promise<Nullable<string>>;
    users(): User[] | Promise<User[]>;
    userById(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: string;
    email: string;
    name?: Nullable<string>;
    createdAt: string;
    updatedAt: string;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(id: string, updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: string): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
