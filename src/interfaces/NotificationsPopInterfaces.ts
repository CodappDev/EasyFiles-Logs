export interface NotificationPopCreateData {
    type: string;
    userId: string;
    updateId?: string;
    repositoryId?: string;
    fileId?: string;
}

export interface NotificationDeleteData{
    id: string;
}

export interface NotificationDeleteManyData {
    ids: string[]
}

export interface NotificationGetData{
    userId: string;
}