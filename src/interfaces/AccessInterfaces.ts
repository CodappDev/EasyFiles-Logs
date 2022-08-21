export interface AccessCreateData {
    createdAt: Date;
    userId: string;
    userName: string;
    userEmail: string;
    organizationId: string
}

export interface AccessDeleteByUserData{
    userId: string;
}

export interface AccessDeleteByIdsData{
    ids: string[];
}