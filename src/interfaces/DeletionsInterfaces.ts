export interface DeletionCreateData {
    createdAt: Date;
    organizationId: string;
    type: string;
    userId?: string;
    teamId?: string;
    groupId?: string;
    repositoryId?: string;
    fileId?: string;
    expiration: Date;
}

export interface DeletionDeleteData {
    ids: string[];
}