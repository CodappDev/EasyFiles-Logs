export interface UpdatesCreateData {
    type: string;
    users?: string[];
    teams?: string[];
    teamId?: string;
    repositoryId?: string;
    fileId?: string;
    authorId?: string;
    title?: string;
    text?: string;
    version?: string;
}