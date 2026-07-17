export type UserIdParamDto = {
    id: string;
};
export type CreateUserBodyDto = {
    name: string;
    email: string;
    password: string;
};
export type UpdateUserBodyDto = CreateUserBodyDto;
export type UserBodyInputDto = Partial<CreateUserBodyDto>;
//# sourceMappingURL=user.dto.d.ts.map